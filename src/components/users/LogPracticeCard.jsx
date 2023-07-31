import { StyleSheet, View, Text } from 'react-native';
import React from 'react';

export default function LogPracticeCard() {

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Log A Practice Session</Text>

      <Text style={styles.label}>Log A Session</Text>
      <Text style={styles.comment}>Every little bit helps!</Text>

      <Text style={styles.label}>Set Reminders</Text>
      <Text style={styles.comment}>Edit or toggle on/off reminders to practice</Text>

      <Text style={styles.comment}></Text>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      borderColor: '#2fc02d',
      borderWidth: 8,
      borderRadius: 5,
      marginBottom: 15,
      marginTop: 15,
      backgroundColor: 'rgba(0,0,0,0.7)',
      marginHorizontal: 20,
      padding: 10,
    },
    paymentInfoContainer: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 20

    },
    headerText: {
      textAlign: 'center',
      fontFamily: 'economica',
      fontSize: 40,
      color: 'white',
      marginBottom: 0,
    },
    label: {
      textAlign: 'center',
      color: '#2fc02d',
      fontFamily: 'economica',
      fontWeight: 'bold',
      fontSize: 24,
      textDecorationLine: 'underline',
      marginTop: 20,
    },
    text: {
      textAlign: 'center',
      fontFamily: 'economica',
      fontSize: 24,
      color: 'white',
      // color: 'white',
      marginTop: 0,
      textDecorationLine: 'underline',
    },
    comment: {
      color: '#cccccc',
      fontStyle: 'italic',
      textAlign: 'center',
    },
    labelCell: {
      borderStyle: 'solid',
      borderColor: '#2fc02d',
      flex: 1,
      // padding: 10,
      margin: 5,
      borderRadius: 5,
      alignItems: 'center',
    },
    textCell: {
      flex: 1,
      // padding: 10,
      // margin: 5,
      borderRadius: 5,
      alignItems: 'center',
    },
    tableRow: {
      borderStyle: 'solid',
      borderColor: '#2fc02d',
      flexDirection: 'row',
    },
    labelText: {
      textAlign: 'center',
      color: '#2fc02d',
      fontFamily: 'economica',
      fontWeight: 'bold',
      fontSize: 24,
      textDecorationLine: 'underline',
      marginTop: 20,
    },

});

