import React from 'react';

import { StyleSheet, View, Text } from 'react-native';

export default function SongsCard() {

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>{'This Week\'s Practice'}</Text>

      <Text style={styles.text}>1 hour, 20 minutes</Text>
      <Text style={styles.comment}>Tues: 20 mins</Text>
      <Text style={styles.comment}>Wed: 20 mins</Text>
      <Text style={styles.comment}>Fri: 20 mins</Text>
      <Text style={styles.comment}>Sun: 20 mins</Text>

      <Text style={styles.text}>Goal:</Text>
      <Text style={styles.comment}>2 Hours</Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderColor: '#05a7d7',
    borderWidth: 8,
    borderRadius: 5,
    marginBottom: 15,
    marginTop: 15,
    backgroundColor: 'rgba(0,0,0,0.7)',
    marginHorizontal: 20,
    padding: 10,
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
    color: 'white',
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
    color: '#05a7d7',
    // color: 'white',
    marginTop: 20,
    textDecorationLine: 'underline',

  },
  comment: {
    color: '#cccccc',
    fontStyle: 'italic',
    textAlign: 'center',
  }


});

