import React, {useEffect, useRef} from 'react';
import {
  Animated,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity
} from 'react-native';
import {useSelector} from 'react-redux';

import {TRootState} from '../redux/types';
import {faker} from '@faker-js/faker';

import {View} from '../components/Themed';
import {KeyBoard} from '../components/keyboard/keyboard';
import {useAppDispatch} from '../hooks/reduxHooks';
import {darkBlue, pink, turquoise, yellow} from '../assets/colors';
import {
  setKeyboard,
  setLife,
  setScore,
  setWord,
  setWordInput
} from '../redux/reducers/gameReducer';
import {keyBoardPatterns} from '../components/keyboard/keyboardPatterns';
import {TGame} from './HomeScreen';
import AnimatedGradient from '../components/AnimatedLinearComponent.tsx';

export default function GameScreen({navigation, route}) {
  const {word, wordinput, score, keyboard, life} = useSelector(
    (state: TRootState) => state.gameReducer
  );
  faker.setLocale('fr');

  const game: TGame = route.params.game;

  const wordAnimationRef = useRef(new Animated.Value(0)).current;
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setScore({score: 0}));
    launchGame();
    return () => {
      dispatch(setLife({life: 3}));
    };
  }, []);

  useEffect(() => {
    if (score) {
      launchGame();
    }
  }, [score]);

  useEffect(() => {
    if (life > 0 || game.life === 'infinite') {
      launchGame();
    } else {
      wordAnimation.stop();
      navigation.navigate('Home');
    }
  }, [life]);

  const wordAnimation = Animated.timing(wordAnimationRef, {
    toValue: 400,
    duration:
      game.speedLevel === 'easy'
        ? 10000
        : game.speedLevel === 'medium'
        ? 7000
        : 4000,
    useNativeDriver: true
  });

  const launchGame = () => {
    wordAnimationRef.setValue(0);

    dispatch(
      setKeyboard({
        keyboard:
          game.keyboard === 'azerty'
            ? keyBoardPatterns.regular.azertyKeyboardLetters()
            : game.keyboard === 'querty'
            ? keyBoardPatterns.regular.qwertyKeyboardLetters()
            : keyBoardPatterns.shuffle()
      })
    );

    dispatch(
      setWord({
        word: faker.random
          .word()
          .toLowerCase()
          .normalize('NFD')
          .replace(/[\u0300-\u036f]/g, '')
      })
    );

    wordAnimation.start(({finished}) => {
      dispatch(setWordInput({wordinput: ''}));
      if (finished) {
        if (game.life === 'infinite' && life < 3) {
          dispatch(setLife({life: 3}));
        } else {
          dispatch(setLife({life: life - 1}));
        }
      }
    });
  };
  const gameScreen = () => (
    <>
      <View style={styles.topBar}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Text style={styles.scoreTexte}>retour</Text>
        </TouchableOpacity>
        <Text style={styles.scoreTexte}>SCORE : {score}</Text>
        <View style={{flexDirection: 'row', backgroundColor: 'rgba(0,0,0,0)'}}>
          {game.life === 'infinite' ? (
            <Text style={styles.scoreTexte}>Infinite</Text>
          ) : (
            Array(life)
              .fill('')
              .map((_, index) => {
                return (
                  <Text key={index} style={styles.scoreTexte}>
                    X
                  </Text>
                );
              })
          )}
        </View>
      </View>

      <Animated.View
        style={{
          justifyContent: 'center',
          flexDirection: 'row',
          transform: [
            {
              translateY: wordAnimationRef
            }
          ]
        }}>
        {word.split('').map((e, index) => {
          return (
            <Text
              key={index}
              style={{
                ...styles.wordText,
                color:
                  word.split('')[index] === wordinput.split('')[index]
                    ? 'green'
                    : 'white'
              }}>
              {e ? `${e}` : ''}
            </Text>
          );
        })}
      </Animated.View>
      <View style={styles.wordInputContainer}>
        <Text style={styles.wordInput}>{wordinput ? `${wordinput}` : ''}</Text>
      </View>
      <View style={styles.keyboard}>
        <KeyBoard
          keyBoard={keyboard}
          keyboardStyle={game.keyboardStyle}
          hidden={game.hidden}
        />
      </View>
    </>
  );
  return (
    <SafeAreaView style={styles.container}>
      {game.background === 'regular' ? (
        gameScreen()
      ) : (
        <AnimatedGradient>{gameScreen()}</AnimatedGradient>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0,0,0,0)'
  },
  scoreTexte: {
    paddingVertical: 20,
    color: yellow,
    fontSize: 20,
    fontWeight: 'bold',
    top: 10
  },
  wordText: {
    textAlign: 'center',
    fontSize: 40,
    marginTop: 40,
    fontWeight: 'bold'
  },
  wordInputContainer: {
    borderWidth: 2,
    borderColor: turquoise,
    backgroundColor: pink,
    position: 'absolute',
    bottom: 240,
    height: 50,
    padding: 10,
    alignSelf: 'center',
    borderRadius: 40,
    width: '80%'
  },
  wordInput: {
    textAlign: 'center',
    fontSize: 23,
    color: turquoise,
    fontWeight: 'bold'
  },
  topBar: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    backgroundColor: 'rgba(0,0,0,0)'
  },
  keyboard: {position: 'absolute', bottom: 70}
});
