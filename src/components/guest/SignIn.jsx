import React, { useState } from 'react';
import { Platform } from 'react-native';
import { Alert, StyleSheet, View, Text } from 'react-native';
import  supabase  from '../../../supabase';
import { Button, Input } from '@rneui/themed';
import goTo from '../helpers/navigation';
import { useNavigation } from '@react-navigation/native';
import { GOOGLE_IOS_CLIENT_ID, GOOGLE_WEB_CLIENT_ID } from '@env';
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-google-signin/google-signin';


export default function SignIn() {
  const nav = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);


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

  let clientId = null;
  if (Platform.OS === 'ios') {
    clientId = GOOGLE_IOS_CLIENT_ID
  } else if (Platform.OS === 'android') {
    clientId = null;
  }

  //console.log('clientId: ', clientId);

  async function signInWithGoogle() {
    console.log('signing in with google');
    GoogleSignin.configure({
      // scopes: ['https://www.googleapis.com/auth/drive.readonly'], // what API you want to access on behalf of the user, default is email and profile
      webClientId: GOOGLE_WEB_CLIENT_ID, // client ID of type WEB for your server (needed to verify user ID and offline access)
      // offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
      // hostedDomain: '', // specifies a hosted domain restriction
      // forceCodeForRefreshToken: true, // [Android] related to `serverAuthCode`, read the docs link below *.
      // accountName: '', // [Android] specifies an account name on the device that should be used
      iosClientId: clientId, // [iOS] if you want to specify the client ID of type iOS (otherwise, it is taken from GoogleService-Info.plist)
      // googleServicePlistPath: '', // [iOS] if you renamed your GoogleService-Info file, new name here, e.g. GoogleService-Info-Staging
      // openIdRealm: '', // [iOS] The OpenID2 realm of the home web server. This allows Google to include the user's OpenID Identifier in the OpenID Connect ID token.
      profileImageSize: 120, // [iOS] The desired height (and width) of the profile image. Defaults to 120px
    });
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      // Do something with the user info
      console.log('userInfo returned from google signin: ', userInfo);
    } catch (error) {
      console.log(error);
      // Handle error
    }
  }

  return (
    <View style={styles.container}>

      <View style={[styles.verticallySpaced]}>
        <Input
          label="Email"
          labelStyle={styles.label}
          onChangeText={(text) => setEmail(text)}
          value={email}
          placeholder="email@address.com"
          autoCapitalize={'none'}
          color='white'
        />
      </View>

      <View style={styles.verticallySpaced}>
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
      <View style={[styles.verticallySpaced, styles.centered]}>
        <Button title="Sign in" disabled={loading} onPress={() => signInWithEmail()} />
        <Text style={styles.or}>Or, sign in with Google: </Text>
        <GoogleSigninButton
        size={GoogleSigninButton.Size.Wide}
        onPress={signInWithGoogle}
        />
      </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    padding: 12,
    width: '100%',
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
})