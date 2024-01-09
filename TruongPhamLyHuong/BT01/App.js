import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Intro from './src/Screens/Intro';
import Home from './src/Screens/Home';

const Stack = createStackNavigator();

const App = () => {
  const renderIntroScreen = ({ navigation }) => (
    <Intro onFinish={() => navigation.navigate('Home')} />
  );

  const renderHomeScreen = () => <Home />;

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Intro"
          component={renderIntroScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={renderHomeScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;


