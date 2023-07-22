import React, { useState, useEffect } from 'react';
import supabase from '../../../supabase';
import { StyleSheet, View, Alert, Text, ImageBackground, Pressable, ScrollView } from 'react-native';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import goTo from '../helpers/navigation';
import { useNavigation } from '@react-navigation/native';
import SchedulingCard from './SchedulingCard';
import PaymentsCard from './PaymentsCard';


export default function UserHome() {
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


          <Text style={styles.studentName}>Levi Sklar</Text>


          <SchedulingCard />
          <PaymentsCard />

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
  studentName: {
    color: 'white',
    fontFamily: 'economica',
    fontSize: 40,
    textAlign: 'center',
    marginVertical: 20,
  }
});
