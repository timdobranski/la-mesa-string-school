import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, ScrollView, Pressable, View } from 'react-native';
import Header from '../Header/Header';
import Schedule from '../Schedule/Schedule';
import { useNavigation } from '@react-navigation/native';
import goTo from '../helpers/navigation';
import { Ionicons } from '@expo/vector-icons';
import SignUp1SelectSpot from './SignUp1-SelectSpot';
import SignUp2ConfirmAndGoogle from './SignUp2-ConfirmAndGoogle';
import SignUp3AddInfo from './SignUp3-AddInfo';

const SignUp = () => {
  const [ step, setStep ] = useState(1);
  const [ day, setDay ] = useState(null);
  const [ time, setTime ] = useState(null);
  const [ studentId, setStudentId ] = useState(null);
  const [ session, setSession ] = useState(null);
  const [ user, setUser ] = useState(null);
  const [tokens, setTokens] = useState(null);

  const nav = useNavigation();

  const renderStep = () => {
    switch(step) {

      case 1:
        return <SignUp1SelectSpot
        setStep={setStep}
        setDay={setDay}
        setTime={setTime}/>;

      case 2:
        return <SignUp2ConfirmAndGoogle
        setStep={setStep}
        day={day}
        time={time}
        setUser={setUser}
        setSession={setSession}
        setTokens={setTokens}
        setStudentId={setStudentId}/>;

      case 3:
        return <SignUp3AddInfo
        session={session}
        user={user}
        tokens={tokens}
        studentId={studentId}/>;

      default:
        console.log('Step is not 1, 2, or 3');
        // additional code for when step is any value other than 1, 2, or 3
        return <div>Default step</div>;
    }
  }

  return (
    <View style={styles.container}>
      {renderStep()}
    </View>

  );
};

const styles = StyleSheet.create({
  container: {
    // backgroundColor: 'transparent',
    flex: 1
  },
  // headerContainer: {

  // },
  // scrollviewChildren: {
  //   backgroundColor: 'transparent',
  //   alignItems: 'center',
  //   textAlign: 'center',
  // },
  // text: {
  //   color: 'white',
  //   fontSize: 22,
  //   fontFamily: 'economica',
  //   marginBottom: 30,
  //   textAlign: 'center',
  //   marginHorizontal: 20,
  // },
  // signInButton: {
  //   backgroundColor: 'white',
  //   borderRadius: 5,
  //   padding: 10,
  //   width: '25%',
  //   alignItems: 'center',
  //   marginBottom: 30,
  // },
  // signInButtonText: {
  //   fontFamily: 'economica',
  //   fontSize: 20,

  // },
  // backButton: {
  //   marginBottom: 10,
  //   textAlign: 'center',
  // },
});

export default SignUp;