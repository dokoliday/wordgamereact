import {Text, TouchableOpacity, View, Image, StyleSheet} from 'react-native';
import React from 'react';

import {LinearGradient} from 'expo-linear-gradient';
import {
  blue,
  darkBlue,
  marine,
  pink,
  purple,
  turquoise
} from '../assets/colors';

export type TGame = {
  keyboard: 'azerty' | 'querty' | 'shuffle';
  hidden: boolean;
  background: 'regular' | 'psyche';
  keyboardStyle: 'regular' | 'psyche';
  speedLevel: 'hard' | 'medium' | 'easy';
  life: 'regular' | 'infinite';
};
export default function HomeScreen({navigation}) {
  const onPlay = (game: TGame) => {
    navigation.navigate('Game', {game});
  };
  const onTrain = () => {
    navigation.navigate('Training');
  };
  return (
    <View>
      <Text style={styles.logo}>W</Text>
      <Text style={styles.title}>WORDGAME</Text>
      <Text style={styles.description}>Écris le plus vite possible !</Text>
      <TouchableOpacity
        onPress={() =>
          onPlay({
            keyboard: 'azerty',
            hidden: false,
            background: 'regular',
            keyboardStyle: 'regular',
            speedLevel: 'medium',
            life: 'regular'
          })
        }>
        <LinearGradient
          colors={[marine, blue, purple]}
          start={{x: 0, y: 1}}
          end={{x: 1, y: 1}}
          style={styles.linear}>
          <Text style={styles.play}>Jouer</Text>
        </LinearGradient>
      </TouchableOpacity>
      <TouchableOpacity onPress={onTrain}>
        <LinearGradient
          colors={[purple, blue, marine]}
          start={{x: 0, y: 1}}
          end={{x: 1, y: 1}}
          style={styles.linear}>
          <Text style={styles.play}>Training</Text>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%'
  },
  title: {color: pink, fontSize: 35, textAlign: 'center'},
  logo: {color: turquoise, fontSize: 60, textAlign: 'center', marginTop: 200},
  description: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
    marginTop: 50
  },
  linear: {
    height: 70,
    width: 250,
    borderRadius: 40,
    alignSelf: 'center',
    borderWidth: 2,
    borderColor: 'white',
    marginTop: 20
  },
  play: {
    color: darkBlue,
    fontSize: 40,
    textAlign: 'center',
    fontWeight: 'bold',
    top: 10
  }
});
