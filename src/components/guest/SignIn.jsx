import React, { useState, useEffect } from 'react';
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

const nonce = 'WxV3XoiAqmvpY025Auby1HbdU9jHmUiBlC2ALFu-Um0'
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

  async function signInWithGoogle() {
    console.log('signing in with google');
    GoogleSignin.configure({
      // webClientId: GOOGLE_WEB_CLIENT_ID, // client ID of type WEB for your server (needed to verify user ID and offline access)
      // offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
      // hostedDomain: '', // specifies a hosted domain restriction
      iosClientId: clientId, // [iOS] if you want to specify the client ID of type iOS (otherwise, it is taken from GoogleService-Info.plist)
      // openIdRealm: 'http://lamesastringschool.com', // [iOS] The OpenID2 realm of the home web server. This allows Google to include the user's OpenID Identifier in the OpenID Connect ID token.
      // profileImageSize: 120, // [iOS] The desired height (and width) of the profile image. Defaults to 120px
    });
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();

      console.log('userInfo.idToken: ', userInfo.idToken)
      const supabaseSigninOptions = {
        provider: 'google',
        token: userInfo.idToken,
        nonce: nonce,
      };
      const { error, response } = await supabase.auth.signInWithIdToken(supabaseSigninOptions);
     console.error(error)
      // const session = await supabase.auth.getSession();
      // console.log('error: ', error)
      // goTo.UserHome(nav);
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