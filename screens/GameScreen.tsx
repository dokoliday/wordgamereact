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
import {darkBlue, yellow} from '../assets/colors';
import {
  setKeyboard,
  setLife,
  setScore,
  setWord,
  setWordInput
} from '../redux/reducers/gameReducer';
import {keyBoardPatterns} from '../components/keyboard/keyboardPatterns';

export default function GameScreen({navigation}) {
  const {word, wordinput, score, keyboard, life} = useSelector(
    (state: TRootState) => state.gameReducer
  );
  faker.setLocale('fr');

  const wordAnimationRef = useRef(new Animated.Value(0)).current;
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setScore({score: 0}));
    launchGame();
  }, []);

  useEffect(() => {
    if (score) {
      launchGame();
    }
  }, [score]);

  useEffect(() => {
    if (life > 0) {
      launchGame();
    } else {
      wordAnimation.stop();
      dispatch(setLife({life: 3}));
      navigation.navigate('Home');
    }
  }, [life]);

  const wordAnimation = Animated.timing(wordAnimationRef, {
    toValue: 400,
    duration: 5000,
    useNativeDriver: true
  });

  const launchGame = () => {
    wordAnimationRef.setValue(0);

    dispatch(
      setKeyboard({keyboard: keyBoardPatterns.regular.qwertyKeyboardLetters()})
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
        dispatch(setLife({life: life - 1}));
      }
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topBar}>
        <Text style={styles.scoreTexte}>SCORE : {score}</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Text style={styles.scoreTexte}>X</Text>
        </TouchableOpacity>
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
        <KeyBoard keyBoard={keyboard} />
      </View>
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
    margin: 10,
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
    position: 'absolute',
    bottom: 220,
    height: 50,
    padding: 10,
    alignSelf: 'center',
    borderRadius: 40,
    width: '80%'
  },
  wordInput: {
    textAlign: 'center',
    fontSize: 20,
    color: darkBlue,
    fontWeight: 'bold'
  },
  topBar: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    backgroundColor: 'rgba(0,0,0,0)'
  },
  keyboard: {position: 'absolute', bottom: 70}
});
