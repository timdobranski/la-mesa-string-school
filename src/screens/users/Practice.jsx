import React, { useState, useEffect } from 'react';
import supabase from '../../../supabase';
import { StyleSheet, View, ScrollView } from 'react-native';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';


import PracticeLogCard from '../../components/users/PracticeLogCard';
import LogPracticeCard from '../../components/users/LogPracticeCard';


export default function Practice() {
  const [userSession, setUserSession] = useState(null);

  async function getAndSetSession ()  {
    const { data, error } = await supabase.auth.getSession()
    if (data) {
      console.log('getSession response: ', data)
      setUserSession(data.session)
    }
    if (error) {console.log('Error in getSession; navigating to Guest Home: ', error);
      }
  }

    useEffect(() => {
      getAndSetSession();
    }, [])

    console.log('userSession: ', userSession);
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollContainer}>
        <Header />

      <PracticeLogCard />
      <LogPracticeCard />


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
    textDecorationLine: 'underline',
    textAlign: 'center',
    marginTop:30
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
  },
  comment: {
    color: '#cccccc',
    fontStyle: 'italic',
    textAlign: 'center',
  }
});
