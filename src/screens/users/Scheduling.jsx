import React, { useState, useEffect } from 'react';
import supabase from '../../../supabase';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import goTo from '../../helpers/navigation';
import { useNavigation } from '@react-navigation/native';
import Reschedule from '../../components/users/Reschedule';



export default function UserHome() {
  const [userSession, setUserSession] = useState(null);
  const [student, setStudent] = useState(null);
  const [studentId, setStudentId] = useState(null);
  const [ isLoading, setIsLoading ] = useState(true);
  const nav = useNavigation();


  async function getAndSetStudent ()  {
    // get and set session
    const { data: sessionData, error: sessionError } = await supabase.auth.getSession();
    if (sessionData) { setUserSession(sessionData.session);
      console.log('--------1/3 sessionData: ', sessionData);
      // get student id from session data
      const { data: idData, error: idError } = await supabase
        .from('users')
        .select('student_id')
        .eq('preferred_email', sessionData.session.user.email);
      if (idData && idData.length > 0) {
        // get student info from student id
        console.log('--------2/3 idData: ', idData);
        const { data: studentData, error: studentError } = await supabase
        .from('students')
        .select('*')
        .eq('id', idData[0].student_id);
        if (studentData) {
          console.log('--------3/3 studentData: ', studentData);
          setStudent(studentData[0]);
          setIsLoading(false);
        }
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
      getAndSetStudent()
    }, [])


  return (

    isLoading === true ? <Text>Loading...</Text> :

    <View style={styles.container}>
      <ScrollView style={styles.scrollContainer}>
        <Header />
        <Reschedule student={student}/>
        <View style={styles.footerFiller}></View>
      </ScrollView>
      <Footer student={student}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  studentNameHeaderContainer: {
    textAlign: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
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
    fontSize: 22,
    textAlign: 'center',
    flex: 1,
  },
  footerFiller: {
    height: 100,
  }
});
