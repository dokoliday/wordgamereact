import {Text, TouchableOpacity, Vibration, View} from 'react-native';
import React from 'react';
import {blue, darkBlue} from '../../assets/colors';
import {letters} from './keyBoardPatterns';
import {TRootState} from '../../redux/types';
import {useSelector} from 'react-redux';
import {useAppDispatch} from '../../hooks/reduxHooks';
import {setWordInput} from '../../redux/reducers/gameReducer';

export const KeyBoard = ({}) => {
  const {wordinput} = useSelector((state: TRootState) => state.gameReducer);

  const dispatch = useAppDispatch();

  const onKeyBoardTap = (letter: string) => {
    if (letter === '<') {
      return dispatch(
        setWordInput({
          wordinput: wordinput
            .split('')
            .slice(0, wordinput.length - 1)
            .join('')
        })
      );
    }
    if (letter === '<=') {
      return dispatch(setWordInput({wordinput: ''}));
    }
    dispatch(
      setWordInput({
        wordinput:
          wordinput +
          letter
            .toLowerCase()
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '')
      })
    );
  };
  return (
    <View
      style={{
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        flexWrap: 'wrap',
        justifyContent: 'center',
        backgroundColor: darkBlue
      }}>
      {letters.map((letter, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => {
            onKeyBoardTap(letter);
            Vibration.vibrate(100);
          }}
          style={{
            width: 38,
            height: 46,
            borderRadius: 10,
            borderColor: 'black',
            borderWidth: 2,
            backgroundColor: blue
          }}>
          <Text
            style={{
              textAlign: 'center',
              fontWeight: 'bold',
              fontSize: 27,
              color: darkBlue
            }}>
            {letter}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};
