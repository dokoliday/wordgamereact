import {
  Animated,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity
} from 'react-native';
import {faker} from '@faker-js/faker';
import {useEffect, useRef, useState} from 'react';

import {View} from '../components/Themed';
import {KeyBoard} from '../components/keyBoard';
import {fetchGifRequest} from '../redux/reducers/gifExempleReducer';
import {useAppSelector, useAppDispatch} from '../hooks/reduxHooks';

export default function GameScreen() {
  faker.setLocale('fr');
  const [word, setWord] = useState('');
  const [wordInput, setWordInput] = useState('');
  const [color, setColor] = useState('green');
  const [score, setScore] = useState(0);
  const [round, setRound] = useState(0);
  const [countDown, setCountDown] = useState(15);

  const wordAnimationRef = useRef(new Animated.Value(0)).current;
  const dispatch = useAppDispatch();

  const image = useAppSelector(state => state.gifExempleReducer.value);

  useEffect(() => {
    if (word === wordInput && word) {
      setScore(score + 10);
      launchGame();
    }
  }, [wordInput]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCountDown(countDown => countDown - 1);
    }, 1000);
    if (round === 0) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [round]);

  useEffect(() => {
    if (countDown === 0) {
      alert(`Ton score est de ${score}`);
      setScore(0);
      setRound(0);
    }
  }, [countDown]);

  const wordAnimation = Animated.timing(wordAnimationRef, {
    toValue: -350,
    duration: 15000,
    useNativeDriver: true
  });

  const onKeyBoardTap = (letter: string) => {
    if (letter === '<') {
      return setWordInput(
        wordInput
          .split('')
          .slice(0, wordInput.length - 1)
          .join('')
      );
    }
    if (letter === '<=') {
      return setWordInput('');
    }
    if (word.split('')[wordInput.length] !== letter) {
      setColor('red');
    } else {
      setColor('green');
    }
    setWordInput(
      (wordInput + letter)
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
    );
  };

  const launchGame = () => {
    const word = faker.random
      .word()
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '');
    setCountDown(15);
    wordAnimationRef.setValue(280);
    setWordInput('');
    setWord(word);
    dispatch(fetchGifRequest(word));
    wordAnimation.start();
    setRound(round + 1);
  };

  return (
    <View style={{width: '100%', height: '100%'}}>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-around'
        }}>
        <Text
          style={{
            paddingVertical: 20,
            margin: 10
          }}>
          SCORE : {score}
        </Text>

        {image && round !== 0 ? (
          <View
            style={{
              borderWidth: 4,
              borderRadius: 20,
              margin: 10,
              width: 100,
              overflow: 'hidden'
            }}>
            <Image source={{uri: image}} style={{width: 100, height: 100}} />
          </View>
        ) : (
          <TouchableOpacity
            disabled={score !== 0}
            style={{marginTop: 40}}
            onPress={() => {
              launchGame();
            }}>
            <Text
              style={{
                borderWidth: 4,
                paddingVertical: 20,
                borderRadius: 20,
                textAlign: 'center',
                opacity: score !== 0 ? 0.3 : 1,
                margin: 10,
                width: 100
              }}>
              PLAY
            </Text>
          </TouchableOpacity>
        )}
        <Text
          style={{
            paddingVertical: 20,
            margin: 5
          }}>
          TIMING : {countDown}
        </Text>
      </View>
      <View style={{alignSelf: 'center'}}>
        <Text
          style={{
            paddingVertical: 20,
            margin: 5
          }}>
          ROUND : {round}
        </Text>
      </View>
      <Animated.View
        style={{
          transform: [
            {
              translateX: wordAnimationRef
            }
          ]
        }}>
        <Text
          style={{
            textAlign: 'center',
            fontSize: 40,
            marginTop: 40,
            fontWeight: 'bold'
          }}>
          {word ? `${word}` : ''}
        </Text>
      </Animated.View>
      <Text
        style={{
          textAlign: 'center',
          fontSize: 20,
          color
        }}>
        {wordInput ? `${wordInput}` : ''}
      </Text>
      <View style={{position: 'absolute', bottom: 140}}>
        <KeyBoard onKeyBoardTap={onKeyBoardTap} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {}
});
