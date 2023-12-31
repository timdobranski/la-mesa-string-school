import React, { useState } from 'react';

import { StyleSheet, View, Text } from 'react-native';

import BorderGradient from './BorderGradient';



export default function SongsCard() {
  const [showUpcomingLessons, setShowUpcomingLessons] = useState(false);

  return (
    <View style={styles.container}>
      <BorderGradient
      color1='#177d9c'
      color2='#16d2f7'
      // color3='#116078'
      />

      <Text style={styles.headerText}>Songs</Text>

      <Text style={styles.text}>Song Search</Text>
      <Text style={styles.comment}>Search by song name or artist</Text>

      <Text style={styles.text}>Recent Songs</Text>
      <Text style={styles.comment}>Livin La Vida Loca - Ricky Martin</Text>
      <Text style={styles.comment}>Mmmmbop - Hanson</Text>
      <Text style={styles.comment}>Wannabe - Spice Girls</Text>

      <Text style={styles.text}>View Playlists</Text>
      <Text style={styles.comment}>Browse songs to get ideas</Text>

      <Text style={styles.text}>Song Wishlist</Text>
      <Text style={styles.comment}>Add songs you want to learn here</Text>

    </View>

  );
}


const styles = StyleSheet.create({
  container: {
    borderRadius: 8,
    marginBottom: 15,
    marginTop: 15,
    backgroundColor: 'rgba(0,0,0,0.7)',
    marginHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 20,
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

