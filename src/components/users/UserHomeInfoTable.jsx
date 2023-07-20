import React, { useState, useEffect } from 'react';
import supabase from '../../../supabase';
import { StyleSheet, View, Alert, Text, ImageBackground, Pressable } from 'react-native';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import goTo from '../helpers/navigation';
import { useNavigation } from '@react-navigation/native';



export default function UserHomeInfoTable() {


  return (
    <View style={styles.container}>
      <Text style={styles.label}>Makeups Available</Text>
      <Text style={styles.text}>2</Text>

      <Text style={styles.label}>Total Due</Text>
      <Text style={styles.text}>$110</Text>

      <Text style={styles.label}>Due Date</Text>
      <Text style={styles.text}>July 7th</Text>

      <Text style={styles.label}>Currently Working On</Text>
      <Text style={styles.text}>Peace of Mind</Text>
      <Text style={styles.text}>Carry On Wayward Son</Text>

      <Text style={styles.label}></Text>
      <Text style={styles.text}></Text>

      <Text style={styles.label}></Text>
      <Text style={styles.text}></Text>

      <Text style={styles.label}></Text>
      <Text style={styles.text}></Text>
    </View>

  );
}


const styles = StyleSheet.create({
  container: {

    borderColor: '#05a7d7',
    borderWidth: 8,
    borderRadius: 5,
    marginBottom: 10,
    backgroundColor: 'rgba(0,0,0,0.5)',
    marginHorizontal: 20,
    padding: 10,
  },
  label: {
    textAlign: 'center',
    color: 'white',
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
    color: '#05a7d7'
  },


});

