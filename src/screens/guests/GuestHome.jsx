import React, { useEffect } from 'react';
import { StyleSheet, Text, ScrollView, Pressable, View } from 'react-native';
import Header from '../../components/Header/Header';
import goTo from '../../helpers/navigation';
import { useNavigation } from '@react-navigation/native';
import supabase from '../../../supabase';
import {GoogleSignin, GoogleSigninButton } from '@react-native-google-signin/google-signin';
import { GOOGLE_IOS_CLIENT_ID, GOOGLE_WEB_CLIENT_ID } from '@env';

const iOSclientId = GOOGLE_IOS_CLIENT_ID;
const webClientId = GOOGLE_WEB_CLIENT_ID;

const GuestHome = () => {
  const nav = useNavigation();

  // check login status
  async function checkLoginStatus ()  {
    const { data, error } = await supabase.auth.getSession()
    if (data.session) { console.log('guest home session return: ', data);
    goTo.UserHome(nav);
    // supabase.auth.signOut();
  }
    if (error) {console.log('Error in getSession: ', error);}
  }

  useEffect(() => {
    checkLoginStatus();
  })

  // supabase signin
  async function handleSupabaseSignIn(user) {
    try {

        // sign in with Supabase
        const { data, error } = await supabase.auth.signInWithPassword({
          email: user.email,
          password: user.id, // Use the "id" as the password for signing in
        });

        if (error) {
          console.error('Error signing in with Supabase: ', error.message);
        }
        if (data) {goTo.UserHome(nav);}

    } catch (error) {
      console.error('Error handling Supabase sign-in:', error.message);

    }
  }

  // native google signin
  async function signInWithGoogle() {
    GoogleSignin.configure({
      iosClientId: iOSclientId,
      webClientId: webClientId,
      offlineAccess: true,
    });
    try {
      const userInfo = await GoogleSignin.signIn();
      console.log('google response: ', userInfo);
      await handleSupabaseSignIn(userInfo.user)
    } catch (error) {
      console.log('catch error: ', error);
    }
  }

  return (
    < ScrollView contentContainerStyle={styles.scrollviewChildren} style={styles.container}>

      <View style={styles.headerContainer}>
        <Header />
      </View>
      <Text style={styles.headerText}>
        {`Welcome! \nChoose your adventure:`}
      </Text>
      <Text style={styles.text}>First time users:</Text>
      <Pressable
        onPress={() =>{ console.log('clicked!'); goTo.SignUp(nav)}}
        style={styles.signInButton}>
          <Text style={styles.signInButtonText}>Sign Up</Text>
      </Pressable>
    <Text style={styles.text}>or for existing users:</Text>
      <GoogleSigninButton
        size={GoogleSigninButton.Size.Narrow}
        onPress={signInWithGoogle}
        />

    </ScrollView>
    // </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'transparent',
  },
  headerContainer: {

  },
  scrollviewChildren: {
    backgroundColor: 'transparent',
    alignItems: 'center',
    textAlign: 'center',
  },
  headerText: {
    fontSize: 35,
    color: 'white',
    fontFamily: 'economica',
    marginTop: 30,
    marginBottom: 50,
    textAlign: 'center',
    marginHorizontal: 20,
  },
  text: {
    color: 'white',
    fontSize: 22,
    fontFamily: 'economica',
    marginBottom: 30,
    textAlign: 'center',
    marginHorizontal: 20,
  },
  signInButton: {
    backgroundColor: 'white',
    borderRadius: 2,
    padding: 10,
    width: '50%',
    alignItems: 'center',
    marginBottom: 50,
  },
  signInButtonText: {
    fontFamily: 'economica',
    fontSize: 20,

  }
});

export default GuestHome;