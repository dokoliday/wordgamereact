import {Text, TouchableOpacity, View, Image} from 'react-native';
import React, {useEffect} from 'react';

import {useAppSelector, useAppDispatch} from '../hooks/reduxHooks';
import {fetchGifRequest} from '../redux/reducers/gifExempleReducer';

export const TabOneScreen = () => {
  const image = useAppSelector(state => state.gifExempleReducer.value);
  const dispatch = useAppDispatch();
  useEffect(() => {
    console.log(image);
  }, [image]);

  return (
    <View>
      <TouchableOpacity
        onPress={() => {
          dispatch(fetchGifRequest());
        }}>
        <Text
          style={{
            backgroundColor: 'red',
            alignSelf: 'center',
            margin: 100,
            width: 100
          }}>
          Bouton
        </Text>
        {image ? (
          <Image source={{uri: image}} style={{width: 400, height: 400}} />
        ) : null}
      </TouchableOpacity>
    </View>
  );
};
