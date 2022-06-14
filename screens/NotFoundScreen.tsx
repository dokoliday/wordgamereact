import {StyleSheet} from 'react-native';

import {View} from '../components/Themed';
import {RootStackScreenProps} from '../types';

export default function NotFoundScreen({
  navigation
}: RootStackScreenProps<'NotFound'>) {
  return <View style={styles.container}></View>;
}

const styles = StyleSheet.create({
  container: {}
});
