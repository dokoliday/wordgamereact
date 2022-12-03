import {Text, TouchableOpacity, View, Image, StyleSheet} from 'react-native';
import React, {useEffect} from 'react';

import {LinearGradient} from 'expo-linear-gradient';
import {blue, pink, turquoise} from '../assets/colors';

export default function HomeScreen({navigation}) {
  const onPlay = () => {
    navigation.navigate('Game');
  };
  return (
    <View>
      <Text style={styles.logo}>W</Text>
      <Text style={styles.title}>WORDGAME</Text>
      <Text style={styles.description}>Écris le plus vite possible !</Text>

      <TouchableOpacity onPress={onPlay}>
        <LinearGradient
          colors={[pink, blue]}
          start={{x: 0, y: 1}}
          end={{x: 1, y: 1}}
          style={styles.linear}>
          <Text style={styles.play}>Jouer</Text>
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
  title: {color: 'white', fontSize: 35, textAlign: 'center'},
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
    marginTop: 70
  },
  play: {
    color: 'white',
    fontSize: 40,
    textAlign: 'center',
    fontWeight: 'bold',
    top: 10
  }
});
