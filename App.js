import 'react-native-url-polyfill/auto';
import React from 'react';
import { StyleSheet, ImageBackground, SafeAreaView, View, Text } from 'react-native';
import { useEffect } from 'react';
import { useFonts } from 'expo-font';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';

// Screens

// signup
import GuestHome from './src/screens/guests/GuestHome';
import SignUp from './src/screens/guests/SignUp';
// user
import UserHome from './src/screens/users/UserHome';
import Practice from './src/screens/users/Practice';
import Progress from './src/screens/users/Progress';
import StudentResources from './src/screens/users/StudentResources';
import UserProfile from './src/screens/users/UserProfile';
import Scheduling from './src/screens/users/Scheduling';


const App = () => {
  const Stack = createStackNavigator();

  const [fontsLoaded] = useFonts({
    'economica': require('./assets/fonts/Economica/Economica-Regular.ttf'),
    'economica-bold': require('./assets/fonts/Economica/Economica-Bold.ttf'),
  });
  useEffect(() => {

  }, [])

  if (!fontsLoaded) {
    return null;
  }

const navTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'transparent',
  }
}
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require('./assets/images/backgroundVerticalDim.jpg')}
        style={styles.backgroundImage}
        resizeMode='cover'
      >
          <NavigationContainer theme={navTheme}>
            <Stack.Navigator
              initialRouteName='Guest Home'
              theme={navTheme}
              screenOptions={{
                headerShown: false,
                detachPreviousScreen: true,
                presentation: 'transparentModal',
                animationEnabled: false,
                ...TransitionPresets.FadeTransition,
              }}
            >
              <Stack.Screen name="Guest Home" component={GuestHome} />

              <Stack.Screen name="Sign Up" component={SignUp} />

              <Stack.Screen name="User Home" component={UserHome} />
              <Stack.Screen name="Scheduling" component={Scheduling} />
              <Stack.Screen name="User Profile" component={UserProfile} />
              <Stack.Screen name="Student Resources" component={StudentResources} />
              <Stack.Screen name="Scheduling & Payments" component={Practice} />
              <Stack.Screen name="Practice & Progress" component={Progress} />
            </Stack.Navigator>
          </NavigationContainer>
      </ImageBackground>
    </SafeAreaView>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  backgroundImage: {
    flex: 1,
  },
});

export default App;
