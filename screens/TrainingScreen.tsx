import {Text, TouchableOpacity, View, Image, StyleSheet} from 'react-native';
import React, {useState} from 'react';

import {LinearGradient} from 'expo-linear-gradient';
import {blue, darkBlue, marine, pink, turquoise} from '../assets/colors';
import {TGame} from './HomeScreen';

export default function HomeScreen({navigation}) {
  const onPlay = (game: TGame) => {
    navigation.navigate('Game', {game});
  };
  const [customGame, setCustomGame] = useState<TGame>({
    keyboard: 'azerty',
    hidden: false,
    background: 'regular',
    keyboardStyle: 'regular',
    speedLevel: 'medium',
    life: 'regular'
  });

  return (
    <View>
      <Text style={styles.logo}>Training</Text>
      <View style={{flexDirection: 'row'}}>
        <Text style={{color: turquoise, margin: 10, fontSize: 20}}>
          keyboard :
        </Text>
        <TouchableOpacity
          onPress={() => setCustomGame({...customGame, keyboard: 'azerty'})}>
          <Text
            style={{
              color: 'white',
              margin: 10,
              borderWidth: 1,
              borderColor: pink,
              padding: 2
            }}>
            azerty
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setCustomGame({...customGame, keyboard: 'querty'})}>
          <Text
            style={{
              color: 'white',
              margin: 10,
              borderWidth: 1,
              borderColor: pink,
              padding: 2
            }}>
            querty
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setCustomGame({...customGame, keyboard: 'shuffle'})}>
          <Text
            style={{
              color: 'white',
              margin: 10,
              borderWidth: 1,
              borderColor: pink,
              padding: 2
            }}>
            shuffle
          </Text>
        </TouchableOpacity>
      </View>
      <View style={{flexDirection: 'row'}}>
        <Text style={{color: turquoise, margin: 10, fontSize: 20}}>
          hidden :
        </Text>
        <TouchableOpacity
          onPress={() => setCustomGame({...customGame, hidden: true})}>
          <Text
            style={{
              color: 'white',
              margin: 10,
              borderWidth: 1,
              borderColor: pink,
              padding: 2
            }}>
            true
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setCustomGame({...customGame, hidden: false})}>
          <Text
            style={{
              color: 'white',
              margin: 10,
              borderWidth: 1,
              borderColor: pink,
              padding: 2
            }}>
            flase
          </Text>
        </TouchableOpacity>
      </View>
      <View style={{flexDirection: 'row'}}>
        <Text style={{color: turquoise, margin: 10, fontSize: 20}}>
          background :
        </Text>
        <TouchableOpacity
          onPress={() => setCustomGame({...customGame, background: 'regular'})}>
          <Text
            style={{
              color: 'white',
              margin: 10,
              borderWidth: 1,
              borderColor: pink,
              padding: 2
            }}>
            regular
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setCustomGame({...customGame, background: 'psyche'})}>
          <Text
            style={{
              color: 'white',
              margin: 10,
              borderWidth: 1,
              borderColor: pink,
              padding: 2
            }}>
            psyche
          </Text>
        </TouchableOpacity>
      </View>

      <View style={{flexDirection: 'row'}}>
        <Text style={{color: turquoise, margin: 10, fontSize: 20}}>
          keyboardStyle :
        </Text>
        <TouchableOpacity
          onPress={() =>
            setCustomGame({...customGame, keyboardStyle: 'regular'})
          }>
          <Text
            style={{
              color: 'white',
              margin: 10,
              borderWidth: 1,
              borderColor: pink,
              padding: 2
            }}>
            regular
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            setCustomGame({...customGame, keyboardStyle: 'psyche'})
          }>
          <Text
            style={{
              color: 'white',
              margin: 10,
              borderWidth: 1,
              borderColor: pink,
              padding: 2
            }}>
            psyche
          </Text>
        </TouchableOpacity>
      </View>
      <View style={{flexDirection: 'row'}}>
        <Text style={{color: turquoise, margin: 10, fontSize: 20}}>
          speedLevel :
        </Text>
        <TouchableOpacity
          onPress={() => setCustomGame({...customGame, speedLevel: 'hard'})}>
          <Text
            style={{
              color: 'white',
              margin: 10,
              borderWidth: 1,
              borderColor: pink,
              padding: 2
            }}>
            hard
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setCustomGame({...customGame, speedLevel: 'medium'})}>
          <Text
            style={{
              color: 'white',
              margin: 10,
              borderWidth: 1,
              borderColor: pink,
              padding: 2
            }}>
            medium
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setCustomGame({...customGame, speedLevel: 'easy'})}>
          <Text
            style={{
              color: 'white',
              margin: 10,
              borderWidth: 1,
              borderColor: pink,
              padding: 2
            }}>
            easy
          </Text>
        </TouchableOpacity>
      </View>
      <View style={{flexDirection: 'row'}}>
        <Text style={{color: turquoise, margin: 10, fontSize: 20}}>life :</Text>
        <TouchableOpacity
          onPress={() => setCustomGame({...customGame, life: 'regular'})}>
          <Text
            style={{
              color: 'white',
              margin: 10,
              borderWidth: 1,
              borderColor: pink,
              padding: 2
            }}>
            regular
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setCustomGame({...customGame, life: 'infinite'})}>
          <Text
            style={{
              color: 'white',
              margin: 10,
              borderWidth: 1,
              borderColor: pink,
              padding: 2
            }}>
            infinite
          </Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          alignSelf: 'center',
          marginTop: 20,
          borderWidth: 2,
          borderColor: turquoise,
          padding: 10
        }}>
        {Object.keys(customGame).map(key => {
          return (
            <View style={{flexDirection: 'row'}}>
              <Text style={{color: turquoise, fontSize: 20}}>{key} :</Text>
              <Text style={{color: pink, fontSize: 20}}>
                {customGame[key].toString()}
              </Text>
            </View>
          );
        })}
      </View>
      <TouchableOpacity onPress={() => onPlay(customGame)}>
        <LinearGradient
          colors={[marine, blue]}
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
  logo: {color: pink, fontSize: 60, textAlign: 'center', marginTop: 50},

  linear: {
    height: 50,
    width: 200,
    borderRadius: 40,
    alignSelf: 'center',
    borderWidth: 2,
    borderColor: 'white',
    margin: 30
  },
  play: {
    color: darkBlue,
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
    top: 10
  }
});
