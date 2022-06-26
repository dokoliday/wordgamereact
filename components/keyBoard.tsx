import {Text, TouchableOpacity, View, Image, Button} from 'react-native';
import React, {useEffect} from 'react';

export const KeyBoard = ({callback}) => {
  const letters = [
    'a',
    'z',
    'e',
    'r',
    't',
    'y',
    'u',
    'i',
    'o',
    'p',
    'q',
    's',
    'd',
    'f',
    'g',
    'h',
    'j',
    'k',
    'l',
    'm',
    'w',
    'x',
    'c',
    'v',
    'b',
    'n'
  ];

  return (
    <View
      style={{
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        flexWrap: 'wrap'
      }}>
      {letters.map(letter => (
        <TouchableOpacity
          onPress={() => callback(letter)}
          style={{
            width: 40,
            height: 40,
            borderColor: 'black',
            borderWidth: 2,

            margin: 10
          }}>
          <Text>{letter}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};
