import React, { useState, useEffect } from 'react';
import supabase from '../../../supabase';
import { StyleSheet, View, Alert, Text, ImageBackground, Pressable, ScrollView } from 'react-native';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import goTo from '../helpers/navigation';
import { useNavigation } from '@react-navigation/native';
import ProfileCard from './ProfileCard';


export default function UserProfile() {
  const [userSession, setUserSession] = useState(null);
  const [student, setStudent] = useState(null);
  const [ isLoading, setIsLoading ] = useState(true);

  const nav = useNavigation();

  async function getAndSetStudent ()  {
    // get and set session
    const { data: sessionData, error: sessionError } = await supabase.auth.getSession();
    if (sessionData) { setUserSession(sessionData.session);

      // get student id from session data
      const { data: idData, error: idError } = await supabase
        .from('users')
        .select('student_id')
        .eq('email', sessionData.session.user.email);
      if (idData && idData.length > 0) {
        // get student info from student id
        const { data: studentData, error: studentError } = await supabase
        .from('students')
        .select('*')
        .eq('id', idData[0].student_id);
        if (studentData) { setStudent(studentData[0]); setIsLoading(false);}
        // handle errors
        if (studentError) {console.log('Error in getAndSetStudent: ', studentError); }
      }
      if (idError) { console.log('Error in getStudentId: ', idError); }
    }
    if (sessionError) {console.log('Error in getSession: ', sessionError);
      goTo.GuestHome(nav);
    }
  }



    // get and set session on page load
    useEffect(() => {
      //getAndSetSession();
      getAndSetStudent()
    }, [])

  return (
    isLoading ? <Text>Loading...</Text> :

    <View style={styles.container}>
      <ScrollView style={styles.scrollContainer}>
        <Header />
        <ProfileCard student={student}/>

          <View style={styles.signOutContainer}>
          <Pressable style={styles.signOut}>
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
    alignItems: 'center',
    padding: 30,
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
