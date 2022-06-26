import {Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

export const KeyBoard = ({onKeyBoardTap}) => {
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
    'n',
    '<'
  ];

  return (
    <View
      style={{
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        flexWrap: 'wrap',
        justifyContent: 'center'
      }}>
      {letters.map((letter, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => onKeyBoardTap(letter)}
          style={{
            width: 35,
            height: 35,
            borderRadius: 10,
            borderColor: 'black',
            borderWidth: 2,
            margin: 3
          }}>
          <Text style={{textAlign: 'center', fontWeight: 'bold'}}>
            {letter}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};
