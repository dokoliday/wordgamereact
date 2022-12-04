import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {darkBlue} from '../assets/colors';
import GameScreen from '../screens/GameScreen';
import HomeScreen from '../screens/HomeScreen';
import TrainingScreen from '../screens/TrainingScreen';

export function RootNavigation() {
  const Stack = createNativeStackNavigator();
  const navTheme = DefaultTheme;
  navTheme.colors.background = darkBlue;

  return (
    <NavigationContainer theme={navTheme}>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Game" component={GameScreen} />
        <Stack.Screen name="Training" component={TrainingScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
