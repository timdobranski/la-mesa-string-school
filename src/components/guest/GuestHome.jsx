import React from 'react';
import { ImageBackground, StyleSheet, Text, ScrollView, Pressable, View } from 'react-native';
import Header from '../Header/Header';
import Schedule from '../Schedule/Schedule';
import { useNavigation } from '@react-navigation/native';
// import { useEffect, useState }  from 'react';
import goTo from '../helpers/navigation';
import supabase from '../../../supabase';




const GuestHome = () => {
  const nav = useNavigation();

  return (

    < ScrollView contentContainerStyle={styles.scrollviewChildren} style={styles.container}>
      <View style={styles.headerContainer}>
      <Header />
      </View>
      <Text style={styles.text}>
        {`Welcome! \nChoose your adventure below:`}
      </Text>

      <Pressable
        onPress={() =>{ console.log('clicked!'); goTo.SelectSpot(nav)}}
        style={styles.signInButton}>
          <Text style={styles.signInButtonText}>New User Signup</Text>
      </Pressable>

      <Pressable
        onPress={() =>{ console.log('clicked!'); goTo.SignIn(nav)}}
        style={styles.signInButton}>
          <Text style={styles.signInButtonText}>Existing User Sign In</Text>
      </Pressable>

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
    borderRadius: 5,
    padding: 10,
    width: '50%',
    alignItems: 'center',
    marginBottom: 30,
  },
  signInButtonText: {
    fontFamily: 'economica',
    fontSize: 20,

  }
});

export default GuestHome;