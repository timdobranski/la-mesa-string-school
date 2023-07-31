import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, ScrollView, Pressable, View } from 'react-native';
import Header from '../../components/Header/Header';
import Schedule from '../../components/Schedule/Schedule';
import { useNavigation } from '@react-navigation/native';
import goTo from '../../helpers/navigation';
import { Ionicons } from '@expo/vector-icons';
import SignUp1SelectSpot from '../../components/guests/SignUp1-SelectSpot';
import SignUp2ConfirmAndGoogle from '../../components/guests/SignUp2-ConfirmAndGoogle';
import SignUp3AddInfo from '../../components/guests/SignUp3-AddInfo';

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
    flex: 1
  }
});

export default SignUp;