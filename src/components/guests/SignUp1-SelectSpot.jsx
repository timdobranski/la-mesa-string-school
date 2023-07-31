import React from 'react';
import { StyleSheet, Text, ScrollView, Pressable, View } from 'react-native';
import Header from '../Header/Header';
import Schedule from '../Schedule/Schedule';
import { useNavigation } from '@react-navigation/native';
import goTo from '../../helpers/navigation';
import { Ionicons } from '@expo/vector-icons';




const SelectSpot = ({ setStep, setDay, setTime, setStudentId }) => {
  const nav = useNavigation();


  return (
    < ScrollView contentContainerStyle={styles.scrollviewChildren} style={styles.container}>
      <View style={styles.headerContainer}>
      <Header />
      </View>

      <Pressable  onPress ={()=>goTo.GuestHome(nav)} style={styles.backContainer}>
          <Ionicons name="arrow-back-circle" size={50} color="white" style={styles.backButton} />
          <Text style={styles.text}>{ `Back`}</Text>
        </Pressable>
      <Text style={styles.text}>
        {`To sign up, choose your current weekly spot below:`}
      </Text>
      <Schedule type={'single'} setDay={setDay} setTime={setTime} setStep={setStep} setStudentId={setStudentId}/>
    </ScrollView>

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
    width: '25%',
    alignItems: 'center',
    marginBottom: 30,
  },
  signInButtonText: {
    fontFamily: 'economica',
    fontSize: 20,

  },
  backButton: {
    marginBottom: 10,
    textAlign: 'center',
  },
});

export default SelectSpot;