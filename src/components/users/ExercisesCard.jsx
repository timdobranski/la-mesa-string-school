// import React, { useState, useEffect } from 'react';
// import supabase from '../../../supabase';
import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import MaskedView from '@react-native-masked-view/masked-view';
import { LinearGradient } from 'expo-linear-gradient';
import BorderGradient from './BorderGradient'



export default function ExercisesCard() {


  return (
<View style={styles.container}>
    <BorderGradient
    color1='#039e37'
    color2='#b2ff59'
    // color3='#039e37'
    />

   <Text style={styles.headerText}>Exercises</Text>


   <Text style={styles.label}>Exercise Search</Text>
   <Text style={styles.comment}>Search by topic: scales, chords, strumming, pentatonic, etc</Text>


   <Text style={styles.label}>Recent Exercises</Text>
   <Text style={styles.comment}>Pentatonic scale forms</Text>
   <Text style={styles.comment}>Diatonic scale forms</Text>
   <Text style={styles.comment}>CAGED Chords</Text>

   <Text style={styles.comment}></Text>
  </View>






  );
}

const styles = StyleSheet.create({
    container: {
      flex:1,
      borderColor: '#2fc02d',
      // borderWidth: 8,
      borderRadius: 8,
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

