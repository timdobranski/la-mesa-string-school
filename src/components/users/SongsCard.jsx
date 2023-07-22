import React, { useState, useEffect } from 'react';
import supabase from '../../../supabase';
import { StyleSheet, View, Alert, Text, Pressable } from 'react-native';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import goTo from '../helpers/navigation';
import { useNavigation } from '@react-navigation/native';
import { Picker } from '@react-native-picker/picker';



export default function SongsCard() {
  const [showUpcomingLessons, setShowUpcomingLessons] = useState(false);

  return (
    <View style={styles.container}>
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

