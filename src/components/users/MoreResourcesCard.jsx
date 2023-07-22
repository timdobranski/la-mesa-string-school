import React, { useState, useEffect } from 'react';
import supabase from '../../../supabase';
import { StyleSheet, View, Alert, Text, ImageBackground, Pressable } from 'react-native';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import goTo from '../helpers/navigation';
import { useNavigation } from '@react-navigation/native';



export default function MoreResourcesCard() {


  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>More Resources</Text>

      <Text style={styles.label}>Getting Started</Text>
      <Text style={styles.comment}>tuning, using guitar pro, reading the pages</Text>


      <Text style={styles.label}>My Book</Text>
      <Text style={styles.comment}>The String School Guitar Method</Text>

      <Text style={styles.label}>Great Youtube Videos</Text>
      <Text style={styles.comment}>Signals Music Studio</Text>

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

}


});

