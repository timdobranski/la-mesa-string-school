import React, { useState, useEffect } from 'react';
import supabase from '../../../supabase';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';


export default function Progress() {
  const [userSession, setUserSession] = useState(null);


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


          <Text style={styles.header}>Progress & Practice</Text>
          <Text style={styles.text}>Practice more. No, more!</Text>




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
