import 'react-native-url-polyfill/auto';
import React from 'react';
import { StyleSheet, ImageBackground, SafeAreaView, View, Text } from 'react-native';
import { useEffect } from 'react';
import { useFonts } from 'expo-font';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
// import { Linking } from 'expo-linking';

// Screens
import GuestHome from './src/components/guest/GuestHome';
import UserHome from './src/components/users/UserHome';
import SignupNew from './src/components/guest/SignupNew';
import SignInView from './src/components/guest/SignInView';
import SchedulingAndPayments from './src/components/users/Scheduling&Payments';
import PracticeAndProgress from './src/components/users/Practice&Progress';
import StudentResources from './src/components/users/StudentResources';
import UserProfile from './src/components/users/UserProfile';
import SelectSpot from './src/components/guest/SelectSpot';
// import CheckEmail from './src/components/guest/CheckEmail';


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
        source={require('./assets/images/backgroundVerticalDimmer.jpg')}
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
              <Stack.Screen name="Select Spot" component={SelectSpot} />
              <Stack.Screen name="New User Signup" component={SignupNew} />
              <Stack.Screen name="Sign In" component={SignInView} />
              {/* <Stack.Screen name="Check Email" component={CheckEmail} /> */}

              <Stack.Screen name="User Home" component={UserHome} />
              <Stack.Screen name="User Profile" component={UserProfile} />
              <Stack.Screen name="Student Resources" component={StudentResources} />
              <Stack.Screen name="Scheduling & Payments" component={SchedulingAndPayments} />
              <Stack.Screen name="Practice & Progress" component={PracticeAndProgress} />
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
