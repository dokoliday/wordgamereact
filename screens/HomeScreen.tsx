import {Text, TouchableOpacity, View, Image} from 'react-native';
import React, {useEffect} from 'react';

import {useAppSelector, useAppDispatch} from '../hooks/reduxHooks';
import {fetchGifRequest} from '../redux/reducers/gifExempleReducer';

export const HomeScreen = () => {
  const image = useAppSelector(state => state.gifExempleReducer.value);
  const dispatch = useAppDispatch();
  useEffect(() => {
    console.log(image);
  }, [image]);

  return <View></View>;
};
