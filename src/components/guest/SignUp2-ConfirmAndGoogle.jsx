import SignUp from './SignUp3-AddInfo';
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import goTo from '../helpers/navigation';
import { Button, Input } from '@rneui/themed'
import { GoogleSignin, GoogleSigninButton } from '@react-native-google-signin/google-signin';
import { GOOGLE_IOS_CLIENT_ID, GOOGLE_WEB_CLIENT_ID } from '@env';
import supabase from '../../../supabase';


const SignupNew = () => {
  const nav = useNavigation();
  const [ text, setText] = useState('')
  const [ disabled, setDisabled] = useState(true)
  const studentName = 'Tim';

  useEffect(() => {
    if (text === studentName) {
      setDisabled(false)
    }
  }, [text])


  const iOSclientId = GOOGLE_IOS_CLIENT_ID;
  const webClientId = GOOGLE_WEB_CLIENT_ID;

  async function handleSupabaseSignIn(user) {
    try {
        // sign in with Supabase
        const { data, error } = await supabase.auth.signUp({
          email: user.email,
          password: user.id, // Use the "id" as the password for signing in
        });
        if (error) {
          console.error('Error signing in with Supabase: ', error.message);
        }

        console.log('Signed up new user: ', JSON.stringify(data));
        const { user: sessionUser } = data;
        if (sessionUser) {
          console.log('session user confirmed: ', sessionUser)
          goTo.SignUp3AddInfo(nav);
        }
        // return data;

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
    <ScrollView
      contentContainerStyle={styles.scrollviewChildren}
      style={styles.container} >

      <Pressable onPress={() => goTo.SignUp1SelectSpot(nav)} style={styles.backContainer}>
        <Ionicons name="arrow-back-circle" size={50} color="white" />
        <Text style={styles.text}>{ `To schedule`}</Text>
      </Pressable>

      <View style={styles.spotContainer}>
        <Text style={styles.spotText}>Monday, July 10th @ 7:00</Text>
      </View>

      {disabled === false ?
      <View style={styles.messageContainer}>
        <Text style={styles.header}>{`Student: ${studentName}`}</Text>
        <Text style={styles.text}>{`Great! Next, sign in with Google below:`}</Text>
        <Text style={styles.text}>{`*Google signin is required for scheduling access via Google calendar at this time`}</Text>
      </View>
       :
      <Text style={styles.text}>
        { `To confirm that this is your spot, please enter the first name of the student below:`}
      </Text>}
      {disabled === false ?
      null :
      <Input
          label="Student First Name"
          labelStyle={styles.label}
          onChangeText={(text) => setText(text)}
          value={text}
          placeholder="first name only"
          autoCapitalize={'none'}
          color='white'
      />}

      {disabled === true ? null : <GoogleSigninButton onPress={signInWithGoogle} />}

    </ScrollView>
  )
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  messageContainer: {
    alignItems: 'center',
  },
  scrollviewChildren: {
    // justifyContent: 'center',
    alignItems: 'center',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  text: {
    color: 'white',
    fontSize: 22,
    fontFamily: 'economica',
    marginBottom: 30,
    textAlign: 'center',
    marginHorizontal: 20,
    justifyContent: 'center',
  },
  spotContainer: {
    width: '75%',
    backgroundColor: 'black',
    alignItems: 'center',
    borderWidth: 10,
    borderStyle: 'solid',
    borderRadius: 3,
    marginVertical: 30,
    paddingVertical: 8,
    borderColor: '#147095',
    justifyContent: 'center',
  },
  spotText: {
    color: 'white',
    fontFamily: 'economica',
    fontSize: 30,
  },
  backContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  label: {
    color: 'white',
    fontFamily: 'economica',
    fontSize: 22,
  },
  header: {
    color: 'white',
    fontFamily: 'economica',
    fontSize: 35,
    marginBottom: 30,
  }
});

export default SignupNew;