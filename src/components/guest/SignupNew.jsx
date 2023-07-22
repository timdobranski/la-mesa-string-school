import SignUp from './SignUp';
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import goTo from '../helpers/navigation';
import { Button, Input } from '@rneui/themed'


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


  return (
    <ScrollView
      contentContainerStyle={styles.scrollviewChildren}
      style={styles.container} >

      <Pressable onPress={() => goTo.SelectSpot(nav)} style={styles.backContainer}>
        <Ionicons name="arrow-back-circle" size={50} color="white" />
        <Text style={styles.text}>{ `To schedule`}</Text>
      </Pressable>

      <View style={styles.spotContainer}>
        <Text style={styles.spotText}>Monday, July 10th @ 7:00</Text>
      </View>

      {disabled === false ? <Text style={styles.header}>{`Student: ${studentName}`}</Text> :
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

      {disabled === true ? null : <SignUp />}

    </ScrollView>
  )
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
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
  }
});

export default SignupNew;