import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

// eslint-disable-next-line react/prop-types
export default function ProfileCard({ student={
  first_name: 'Timmy',
  last_name: 'Dobranski',
  email: 'timdobranski@gmail.com',
  makeups: 14
  } }) {

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Your Profile</Text>

      <Text style={styles.label}>Student Name</Text>
      <Text style={styles.comment}>{`${student.first_name} ${student.last_name}`}</Text>

      <Text style={styles.label}>User Name</Text>
      <Text style={styles.comment}>Joe Hendrix</Text>

      <Text style={styles.label}>User Email</Text>
      <Text style={styles.comment}>jimisdad@gmail.com</Text>

      <Text style={styles.label}>User Phone</Text>
      <Text style={styles.comment}>619-123-4567</Text>

      <Text style={styles.label}>Preferred Communication Method</Text>
      <Text style={styles.comment}>Text</Text>

      <Text style={styles.label}>Primary Contact:</Text>
      <Text style={styles.comment}>Amanda</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
    borderColor: '#ffb62b',
    borderWidth: 8,
    borderRadius: 5,
    marginBottom: 100,
    backgroundColor: 'rgba(0,0,0,0.7)',
    marginHorizontal: 20,
    padding: 10,
  },
  label: {
    textAlign: 'center',
    color: '#ffb62b',
    fontFamily: 'economica',
    fontWeight: 'bold',
    fontSize: 24,
    textDecorationLine: 'underline',
    marginTop: 15,
  },
  text: {
    textAlign: 'center',
    fontFamily: 'economica',
    fontSize: 24,
    color: 'white',
  },
  headerText: {
  textAlign: 'center',
  fontFamily: 'economica',
  fontSize: 40,
  color: 'white'
},
comment: {
  color: '#cccccc',
  fontStyle: 'italic',
  textAlign: 'center',
  fontSize: 16

}


});

