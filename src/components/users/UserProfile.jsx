import React, { useState, useEffect } from 'react';
import supabase from '../../../supabase';
import { StyleSheet, View, Alert, Text, ImageBackground, Pressable, ScrollView } from 'react-native';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import goTo from '../helpers/navigation';
import { useNavigation } from '@react-navigation/native';


export default function UserProfile() {
  const [userSession, setUserSession] = useState(null);
  const nav = useNavigation();

  async function getAndSetSession ()  {
    const { data, error } = await supabase.auth.getSession()
    if (data) {
      console.log('Session User ', data)
      setUserSession(data.session)
    }
    if (error) {console.log('Error in getSession; navigating to Guest Home: ', error);
     }
  }

    useEffect(() => {
      getAndSetSession();
    }, [])

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollContainer}>
        <Header />

          <Text style={styles.header}>Your Profile</Text>
          <Text style={styles.text}>Click on a value to edit it</Text>
          <Text style={styles.text}>First Name</Text>
          <Text style={styles.text}>Last Name</Text>
          <Text style={styles.text}>Email</Text>
          <Text style={styles.text}>Phone</Text>
          <Text style={styles.text}>Communication Preference</Text>
          <Text style={styles.text}>Primary Contact</Text>

          <View style={styles.signOutContainer}>
          <Pressable style={styles.signOut}onPress={() => goTo.GuestHome(nav)}>
            <Text style={styles.signOutText}>Sign Out</Text>
          </Pressable>
        </View>


        </ScrollView>
        <Footer />
        </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  text: {
    color: 'white',
    fontFamily: 'economica',
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  signOutContainer: {
    alignItems: 'flex-end',
    padding: 10,
  },
  signOut: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 10,

  },
  header: {
    color: 'white',
    fontFamily: 'economica',
    fontSize: 40,
    textAlign: 'center',
    marginVertical: 20,
  }
});
