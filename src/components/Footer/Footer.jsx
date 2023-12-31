import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Pressable, Image } from 'react-native';
import { FontAwesome, AntDesign, MaterialIcons, Ionicons } from '@expo/vector-icons';
import goTo from '../../helpers/navigation';
import { useNavigation } from '@react-navigation/native';
import supabase from '../../../supabase';

export default function Footer() {
  const [ session, setSession ] = useState(null);


  // console.log('session in footer: ', supabase.auth.session);
  const nav = useNavigation();
  return (
    <View style={styles.footerContainer}>

      <Pressable
      style={styles.iconContainer}
      onPress={() => {goTo.UserHome(nav)}}>
        <Ionicons name='home' style={styles.icons} />
        <Text style={styles.text}>Home</Text>
      </Pressable>

      <Pressable
      style={styles.iconContainer}
      onPress={() => {goTo.SchedulingAndPayments(nav)}}>
        <Ionicons name="timer" style={styles.icons} />
        <Text style={styles.text}>{'Practice'}</Text>
      </Pressable>

      <Pressable
      style={styles.iconContainer}
      onPress={() => {goTo.StudentResources(nav)}}>
        <Ionicons name="md-musical-notes" style={styles.icons} />
        <Text style={styles.text}>Resources</Text>
        </Pressable>

      <Pressable
      style={styles.iconContainer}
      onPress={() => {goTo.PracticeAndProgress(nav)}}>
        <FontAwesome name="line-chart" style={styles.icons} />
        <Text style={styles.text}>Progress</Text>
        </Pressable>

      <Pressable
        style={styles.iconContainer}
        onPress={() => {goTo.UserProfile(nav)}}>

        <Image
          source={{uri: `https://lh3.googleusercontent.com/a/AAcHTtcMIAsQe10lqit0R1nLYYFoqQ-LDbEAj5D7Fdlzj1cAy4Q=s120`}}
          style={{height:50, width:50, borderRadius: 75, borderColor: '#2fc02d', borderWidth: 3}} />
        {/* <FontAwesome name="user-circle" style={styles.icons} /> */}
        {/* <Text style={styles.text}>Profile</Text> */}
        </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  footerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: 'rgba(0, 0, 0, .8)',
    width: '100%',
    borderTopWidth: 1, // Use borderTopWidth instead of border
    borderTopColor: '#666666', // Use borderTopColor instead of borderColor
    position: 'absolute', // Position the footer absolutely
    bottom: 0, // Align the footer to the bottom
  },
  iconContainer: {
    flex: 1, // Distribute equal width to each icon container
    alignItems: 'center',
    paddingVertical: 10, // Adjust the padding as needed
  },
  icons: {
    color: 'white',
    fontSize: 35,
  },
  text: {
    color: 'white',
    fontSize: 12,
    textAlign: 'center',
    marginTop: 5, // Adjust the margin as needed
  },
});
