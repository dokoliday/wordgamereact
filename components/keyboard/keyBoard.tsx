import {
  Dimensions,
  Text,
  TouchableOpacity,
  Vibration,
  View,
  StyleSheet
} from 'react-native';
import React from 'react';
import {darkBlue, marine, turquoise} from '../../assets/colors';
import {TRootState} from '../../redux/types';
import {useSelector} from 'react-redux';
import {useAppDispatch} from '../../hooks/reduxHooks';
import {setWordInput} from '../../redux/reducers/gameReducer';
import AnimatedGradient from '../AnimatedLinearComponent.tsx';

export const KeyBoard = ({keyBoard, keyboardStyle, hidden}) => {
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
    <View style={styles.container}>
      {keyBoard.map((letter, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => {
            onKeyBoardTap(letter);
          }}
          style={styles.letterInput}>
          {keyboardStyle === 'psyche' ? (
            <AnimatedGradient>
              <Text style={{...styles.letter, opacity: hidden ? 0 : 1}}>
                {letter}
              </Text>
            </AnimatedGradient>
          ) : (
            <Text style={{...styles.letter, opacity: hidden ? 0 : 1}}>
              {letter}
            </Text>
          )}
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    display: 'flex',
    flexDirection: 'row',
    width: Dimensions.get('screen').width,
    bottom: 0,
    left: 0,
    flexWrap: 'wrap',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0)'
  },
  letterInput: {
    width: 38,
    height: 46,
    borderRadius: 10,
    borderColor: turquoise,
    borderWidth: 2,
    backgroundColor: marine,
    margin: 0.5
  },
  letter: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 27,
    color: darkBlue
  }
});
