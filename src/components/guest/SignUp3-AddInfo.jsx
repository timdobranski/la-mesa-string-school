import React, { useState, useEffect } from 'react'
import { Alert, StyleSheet, View, Switch, Text, ScrollView, Pressable } from 'react-native'
import  supabase  from '../../../supabase'
import { Button, Input } from '@rneui/themed'
import { useNavigation } from '@react-navigation/native';
import { Picker } from '@react-native-picker/picker';
import format from '../helpers/format'
import goTo from '../helpers/navigation';


export default function SignUp3AddInfo () {
  const [isParent, setIsParent] = useState(false);
  const [email, setEmail] = useState('');
  const [ loading, setLoading ] = useState(false);
  const [ firstName, setFirstName ] = useState('');
  const [ lastName, setLastName ] = useState('');
  const [ phone, setPhone ] = useState('');
  const [ buttonColor, setButtonColor ] = useState(false);
  const [ communicationPreference, setCommunicationPreference ] = useState('email');
  const [ session, setSession ] = useState(null);
  const [ user, setUser ] = useState(null);


  const studentId = 3;
  const nav = useNavigation();



  async function handleSupabaseSignIn() {
    const session = await supabase.auth.getSession();
    setSession(session);
    const { data: { user } } = await supabase.auth.getUser()
    setUser(user);
  }

  const handlePhoneNumberChange = (input) => {
    const formattedPhoneNumber = format.phoneNumber(input);
    setPhone(formattedPhoneNumber);
  };

  useEffect(() => {
    handleSupabaseSignIn();
  }, [])


  async function signUpWithEmail() {
    setLoading(true)

    // add data to users table
    const { data, error } = await supabase
      .from('users')
      .insert({
        email: email || null,
        first_name: firstName,
        last_name: lastName,
        phone: phone,
        comm_pref: communicationPreference,
        // is_parent: isParent,
        student_id: studentId,
        auth_user_id: user.identities[0].user_id,
      })

      if (error) {
        Alert.alert(error.message)
        setLoading(false)
        return
      } else {
        goTo.UserHome(nav);
      }
  }



  return (
    <ScrollView>
    <View style={styles.container}>
      <View style={[styles.verticallySpaced, styles.signupHeaderContainer]}>
      <Text style={styles.signupHeaderText}>Just add the info below to complete signup:</Text>

      {isParent ? <Text style={[styles.signupHeaderText, styles.finePrint]}>{'(if your kiddo is older, they can make an account later too or use yours)'}</Text> : null}
    </View>

    <View>
      <View style={[styles.verticallySpaced]}>
        <Input
          label="First Name"
          labelStyle={styles.label}
          onChangeText={(text) => setFirstName(text)}
          value={firstName}
          placeholder=""
          autoCapitalize="words"
          color='white'
        />
      </View>

      <View style={[styles.verticallySpaced]}>
        <Input
          label="Last Name"
          labelStyle={styles.label}
          onChangeText={(text) => setLastName(text)}
          value={lastName}
          placeholder=""
          autoCapitalize="words"
          color='white'
        />
      </View>

      <View style={[styles.verticallySpaced]}>
        <Input
          label="Preferred Email"
          labelStyle={styles.label}
          onChangeText={(text) => setEmail(text)}
          value={email}
          placeholder="only if different from your Gmail"
          autoCapitalize={'none'}
          color='white'
        />
      </View>

    <View style={styles.verticallySpaced}>
      <Input
        label="Phone"
        labelStyle={styles.label}
        onChangeText={(text) => {handlePhoneNumberChange(text)}}
        value={phone}
        placeholder="(xxx)xxx-xxxx"
        autoCapitalize="none"
        color='white'
      />
    </View>

      <View style={[styles.verticallySpaced ]}>
        <Text style={styles.centeredLabel}>Communication Preference</Text>
        <View style={styles.optionsContainer}>
        <Pressable style={communicationPreference === 'Email' ? styles.commPrefButtonSelected : styles.commPrefButton}
          onPress={() => {
            setCommunicationPreference('Email')
          }}>
            <Text style={communicationPreference === 'Email' ? styles.buttonTextSelected : styles.buttonText}>Email</Text>
        </Pressable>


          <Pressable style={communicationPreference === 'Text' ? styles.commPrefButtonSelected : styles.commPrefButton}
          onPress={() => setCommunicationPreference('Text')}>
            <Text style={communicationPreference === 'Text' ? styles.buttonTextSelected : styles.buttonText}>Text Message</Text>
          </Pressable>


        </View>
      </View>
    </View>

      <View style={styles.verticallySpaced}>
        <Button title="Complete Signup" disabled={loading} onPress={() => signUpWithEmail()} />
      </View>
    </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    padding: 12,
    width: '100%',
  },
  verticallySpaced: {
    paddingTop: 4,
    paddingBottom: 4,
    alignSelf: 'stretch',
  },
  mt20: {
    marginTop: 20,
  },
  optionsContainer: {
    flexDirection: 'row', // Arrange the options horizontally
    justifyContent: 'space-between', // Distribute options evenly along the row
    paddingHorizontal: 20, // Add some horizontal padding to the options
    backgroundColor: 'transparent',
  },
  commPrefButton: {
    flex: 1, // Allow the options to grow and occupy equal space in the row
    paddingVertical: 15,
    borderWidth: 5,
    borderColor: 'white',
    borderRadius: 3,
    alignItems: 'center',
    backgroundColor: 'black',
    marginVertical: 25,
    marginHorizontal: 20,
    width: 150
  },
  commPrefButtonSelected: {
    flex: 1, // Allow the options to grow and occupy equal space in the row
    paddingVertical: 15,
    borderWidth: 5,
    borderRadius: 3,
    borderColor: '#2fc02d',
    alignItems: 'center',
    backgroundColor: 'black',
    marginVertical: 25,
    marginHorizontal: 20,

  },
  label: {
    color: 'white',
    fontFamily: 'economica',
    fontSize: 22,
  },
  signupHeaderContainer: {
    alignItems: 'center',
  },
  signupHeaderText: {
    fontSize: 22,
    color: 'white',
    fontFamily: 'economica',
    marginVertical: 10,
  },
  signupType: {
    color: '#2fc02d',
    fontFamily: 'economica-bold',
  },
  finePrint: {
    marginTop: 0,
    marginBottom: 20,
    fontSize: 18
  },
  centeredLabel: {
    color: 'white',
    fontFamily: 'economica',
    fontSize: 25,
    textAlign: 'center',
  },
  buttonText: {
    fontWeight: 'normal',
    textAlign: 'center',
    color: 'white',
    fontFamily: 'economica',
    fontSize: 22,
  },
  buttonTextSelected: {
    fontWeight: 'bold',
    color: 'white',
    fontFamily: 'economica',
    fontSize: 22,
  },
})