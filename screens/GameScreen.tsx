import {
  Animated,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity
} from 'react-native';
import {TRootState} from '../redux/types';
import {faker} from '@faker-js/faker';
import React, {useEffect, useRef, useState} from 'react';

import {View} from '../components/Themed';
import {KeyBoard} from '../components/keyboard/keyBoard';
import {useAppDispatch} from '../hooks/reduxHooks';
import {darkBlue} from '../assets/colors';
import {useSelector} from 'react-redux';
import {setWord} from '../redux/reducers/gameReducer';

export default function GameScreen({navigation}) {
  const {word, wordinput, score} = useSelector(
    (state: TRootState) => state.gameReducer
  );
  faker.setLocale('fr');

  const wordAnimationRef = useRef(new Animated.Value(0)).current;
  const dispatch = useAppDispatch();
  useEffect(() => {
    launchGame();
  }, []);

  useEffect(() => {
    if (score) {
      launchGame();
    }
  }, [score]);

  const wordAnimation = Animated.timing(wordAnimationRef, {
    toValue: 400,
    duration: 5000,
    useNativeDriver: true
  });

  const launchGame = () => {
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
      if (finished) {
        navigation.navigate('Home');
      }

      wordAnimationRef.setValue(0);
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
      <View
        style={{
          position: 'absolute',
          bottom: 220,
          height: 50,
          padding: 10,
          alignSelf: 'center',
          borderRadius: 40,
          width: '80%'
        }}>
        <Text style={styles.wordInput}>{wordinput ? `${wordinput}` : ''}</Text>
      </View>
      <View style={{position: 'absolute', bottom: 70}}>
        <KeyBoard />
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
    color: 'white',
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
  }
});
