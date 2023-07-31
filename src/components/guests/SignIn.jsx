import React, { useState, useEffect } from 'react';
import { Alert, StyleSheet, View, Text } from 'react-native';
import  supabase  from '../../../supabase';
import { Button, Input } from '@rneui/themed';
import goTo from '../helpers/navigation';
import { useNavigation } from '@react-navigation/native';
import { GOOGLE_IOS_CLIENT_ID, GOOGLE_WEB_CLIENT_ID } from '@env';
import { Linking } from 'react-native';
import * as WebBrowser from 'expo-web-browser';
import {GoogleSignin, GoogleSigninButton, statusCodes,
} from '@react-native-google-signin/google-signin';
// import jwt_decode from 'jwt-decode';
// import { Platform } from 'react-native';
// import axios from 'axios';


export default function SignIn() {
  const nav = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [userSession, setUserSession] = useState(null);

  const iOSclientId = GOOGLE_IOS_CLIENT_ID;
  const webClientId = GOOGLE_WEB_CLIENT_ID;

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


// sign in manually with email and password
async function signInWithEmail() {
  setLoading(true)
  const { error } = await supabase.auth.signInWithPassword({
    email: email,
    password: password,
  })

  if (error) {
    Alert.alert(error.message)
  } else {
    goTo.UserHome(nav);
  }
  setLoading(false)
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
        <View style={styles.container}>

      {/* <View style={[styles.verticallySpaced]}>
        <Input
          label="Email"
          labelStyle={styles.label}
          onChangeText={(text) => setEmail(text)}
          value={email}
          placeholder="email@address.com"
          autoCapitalize={'none'}
          color='white'
          />
      </View> */}

      {/* <View style={styles.verticallySpaced}>
        <Input
          label="Password"
          labelStyle={styles.label}
          onChangeText={(text) => setPassword(text)}
          value={password}
          secureTextEntry={true}
          placeholder="at least 6 characters"
          autoCapitalize={'none'}
          color='white'
          />
      </View> */}
      <View style={[styles.verticallySpaced, styles.centered, ]}>
        {/* <Button title="Sign in" disabled={loading} onPress={() => signInWithEmail()} style={styles.signInButton} /> */}
        {/* <Text style={styles.or}>Or, sign in with Google: </Text> */}
        <GoogleSigninButton
        size={GoogleSigninButton.Size.Narrow}
        onPress={signInWithGoogle}
        />
        {/* <Text style={styles.or}>Skip sign in and explore the app: </Text>
        <Button title="Explore App" onPress={() => {goTo.UserHome(nav)}} /> */}

      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    padding: 12,
    width: '100%',
    alignItems: 'center',
  },
  verticallySpaced: {
    paddingTop: 4,
    paddingBottom: 4,
    alignSelf: 'stretch',
  },
  mt20: {
    marginTop: 20,
  },
  label: {
    color: 'white',
    fontFamily: 'economica',
    fontSize: 22,
  },
  or: {
    color: 'white',
    fontFamily: 'economica',
    fontSize: 22,
    marginVertical:20
  },
  centered: {
    alignItems: 'center'
  },
  signInButton: {
    width: '100%',
    color: 'white',
  }
})
