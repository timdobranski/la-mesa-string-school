import React, { useState, useEffect } from 'react';
import supabase from '../../../supabase';
import { StyleSheet, View, Alert, Text, ImageBackground, Pressable, ScrollView } from 'react-native';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import goTo from '../helpers/navigation';
import { useNavigation } from '@react-navigation/native';
import UserHomeInfoTable from './UserHomeInfoTable';


export default function SchedulingAndPayments() {
  const [userSession, setUserSession] = useState(null);
  const nav = useNavigation();

  async function getAndSetSession ()  {
    const { data, error } = await supabase.auth.getSession()
    if (data) {
      console.log('Session User ', data)
      setUserSession(data.session)
    }
    if (error) {console.log('Error in getSession; navigating to Guest Home: ', error);
      goTo.GuestHome(nav);}
  }

    useEffect(() => {
      getAndSetSession();
    }, [])

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollContainer}>
        <Header />
        <View style={styles.signOutContainer}>
          <Pressable style={styles.signOut}onPress={() => goTo.GuestHome(nav)}>
            <Text style={styles.signOutText}>Sign Out</Text>
          </Pressable>
        </View>

          <Text style={styles.header}>Scheduling & Payments</Text>

          <Text style={styles.text}>Move A Lesson</Text>
          <Text style={styles.comment}>Cancel and reschedule now</Text>

          <Text style={styles.text}>Cancel A Lesson</Text>
          <Text style={styles.comment}>Cancel now and reschedule later</Text>

          <Text style={styles.text}>Scheduling A Makeup</Text>
          <Text style={styles.comment}>Use a makeup credit</Text>




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
