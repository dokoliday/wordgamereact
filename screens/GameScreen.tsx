import {StyleSheet, Text, TextInput, TouchableOpacity} from 'react-native';
import {faker} from '@faker-js/faker';
import {useEffect, useState} from 'react';

import {View} from '../components/Themed';
import {KeyBoard} from '../components/keyBoard';

export default function GameScreen() {
  faker.setLocale('fr');
  const [word, setWord] = useState('');
  const [wordInput, setWordInput] = useState('');

  const launchGame = () => {
    setWordInput('');

    setWord(faker.random.word().toLowerCase());
  };
  useEffect(() => {
    if (word === wordInput && word) {
      alert('win');
    }
  }, [wordInput]);

  const callBack = (letter: string) => {
    setWordInput(wordInput + letter);
  };
  return (
    <View>
      <TouchableOpacity
        onPress={() => {
          launchGame();
        }}>
        <Text
          style={{
            backgroundColor: 'red',
            alignSelf: 'center',
            margin: 100,
            width: 100
          }}>
          play
        </Text>
      </TouchableOpacity>
      <Text>{word ? `${word}` : ''}</Text>
      <KeyBoard callback={callBack} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {}
});
