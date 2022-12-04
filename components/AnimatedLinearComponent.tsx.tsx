import React, {Component} from 'react';
import {StyleSheet, Animated, Easing, StyleProp, ViewStyle} from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';

class CLinearGradient extends Component {
  render() {
    // @ts-ignore
    const {color0, color1, children, points} = this.props;
    const gStart = points.start;
    const gEnd = points.end;
    return (
      <LinearGradient
        colors={[color0, color1]}
        start={gStart}
        end={gEnd}
        style={[styles.linearGradient]}>
        {children}
      </LinearGradient>
    );
  }
}
// @ts-ignore
Animated.LinearGradient = Animated.createAnimatedComponent(CLinearGradient);
// Animated.NativeLinearGradient = Animated.createAnimatedComponent(NativeLinearGradient)
interface TProps {
  children: JSX.Element;
  style?: StyleProp<ViewStyle> | undefined;
}
export const AnimatedGradient = ({children, style}: TProps) => {
  const color0 = new Animated.Value(0);
  const color1 = new Animated.Value(0);
  const points = {
    start: {x: 0.5, y: 1},
    end: {x: 1, y: 0.5}
  };

  Animated.loop(
    Animated.parallel([
      Animated.timing(color0, {
        toValue: 30,
        duration: 3000,
        easing: Easing.ease,
        useNativeDriver: false
      }),
      Animated.timing(color1, {
        toValue: 30,
        duration: 3000,
        useNativeDriver: false
      })
    ])
  ).start();

  const randomColor = () => {
    const color = Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, '0');
    return `#${color}`;
  };

  const arrayColors = Array(30)
    .fill('')
    .map(e => (e = randomColor()));

  const boxInterpolation = color0.interpolate({
    inputRange: arrayColors.map((_, index) => index),
    outputRange: arrayColors
  });

  const boxInterpolation2 = color0.interpolate({
    inputRange: arrayColors.map((_, index) => index),
    outputRange: arrayColors.reverse()
  });

  return (
    // @ts-ignore
    <Animated.LinearGradient
      style={[styles.linearGradient]}
      points={points}
      color0={boxInterpolation}
      color1={boxInterpolation2}>
      {children}
      {/* @ts-ignore */}
    </Animated.LinearGradient>
  );
};

const styles = StyleSheet.create({
  linearGradient: {
    position: 'absolute',
    flex: 1,
    flexDirection: 'column',
    alignItems: 'stretch',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0
  }
});

export default AnimatedGradient;
