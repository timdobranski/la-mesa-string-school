import React from 'react';
import { Text, View, Pressable } from 'react-native';
import styles from './scheduleStyling.js';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import BorderGradient from '../users/BorderGradient.jsx';
import goTo from '../../helpers/navigation';

export default function Schedule ({ type, setDay, setTime, setStep}) {
  const nav = useNavigation();

  // if not single schedule, render date range
  const dateRange = (type === 'single') ? null :
  <View style={styles.nav}>
    <Pressable style={styles.navLeft}>
      <Ionicons name="arrow-back-circle" size={50} color="white" />
    </Pressable>
    <Text style={[styles.navCenter]}>July 10th - July 17th</Text>
    <Pressable style={styles.navRight}>
      <Ionicons name="arrow-forward-circle" size={50} color="white" />
    </Pressable>
  </View>

  const handleSpotPress = (day, time) => {
    console.log('day: ', day, 'time: ', time);
    setDay(day);
    setTime(time);
    setStep(2);
  }


  return (
    <View style={styles.contentContainer}>
      {dateRange}
      <Pressable style={[styles.monHeader, styles.dateHeaders]}>
        <BorderGradient
          color1='#177d9c'
          color2='#42b9f5'
          // color3='#116078'
          radius={3}
          width={10}
        />
        <Text style={styles.headerText}>Monday, July 10th</Text>
    </Pressable>
    <Pressable style={styles.row}>
      <Text style={[styles.cell, styles.time]}>6:00</Text>
      <Text style={[styles.spot, styles.monBooked, styles.cell]}>Open!</Text>
    </Pressable>
    <Pressable style={styles.row}>
      <Text style={[styles.cell, styles.time]}>6:30</Text>
      <Text style={[styles.spot, styles.monBooked, styles.cell]}>Open!</Text>
    </Pressable>
    <Pressable style={styles.row}>
      <Text style={[styles.cell, styles.time]}>7:00</Text>
      <Text style={[styles.spot, styles.monOpen, styles.cell]}>Open!</Text>
    </Pressable>
    <Pressable style={styles.row}>
      <Text style={[styles.cell, styles.time]}>7:30</Text>
      <Text style={[styles.spot, styles.monOpen, styles.cell]}>Open!</Text>
    </Pressable>
    <Pressable style={styles.row} onPress={() => {handleSpotPress('Monday', '8:00')}}>
      <Text style={[styles.cell, styles.time]}>8:00</Text>
      <Text style={[styles.spot, styles.monOpen, styles.cell]}>Open!</Text>
    </Pressable>


    <Pressable style={[styles.tuesHeader,  styles.dateHeaders]}>
    <BorderGradient
  color1='#039e37'
  color2='#b2ff59'
  // color3='#039e37'
  radius={3}
  width={10}
  />
      <Text style={styles.headerText}>Tuesday, July 11th</Text>
    </Pressable>
    <Pressable style={styles.row}>
      <Text style={[styles.cell, styles.time]}>6:00</Text>
      <Text style={[styles.spot, styles.tuesBooked, styles.cell]}>Open!</Text>
    </Pressable>
    <Pressable style={styles.row}>
      <Text style={[styles.cell, styles.time]}>6:30</Text>
      <Text style={[styles.spot, styles.tuesBooked, styles.cell]}>Open!</Text>
    </Pressable>
    <Pressable style={styles.row}>
      <Text style={[styles.cell, styles.time]}>7:00</Text>
      <Text style={[styles.spot, styles.tuesOpen, styles.cell]}>Open!</Text>
    </Pressable>
    <Pressable style={styles.row}>
      <Text style={[styles.cell, styles.time]}>7:30</Text>
      <Text style={[styles.spot, styles.tuesOpen, styles.cell]}>Open!</Text>
    </Pressable>


    <Pressable style={[styles.wedHeader,  styles.dateHeaders]}>
    <BorderGradient
    color1='#ff0000'
    color2='#ff0000'
    color3='#f58742'

    radius={3}
    width={10}
    />
      <Text style={styles.headerText}>Wednesday, July 12th</Text>
    </Pressable>
    <Pressable style={styles.row}>
      <Text style={[styles.cell, styles.time]}>6:00</Text>
      <Text style={[styles.spot, styles.wedBooked, styles.cell]}>Open!</Text>
    </Pressable>
    <Pressable style={styles.row}>
      <Text style={[styles.cell, styles.time]}>6:30</Text>
      <Text style={[styles.spot, styles.wedBooked, styles.cell]}>Open!</Text>
    </Pressable>
    <Pressable style={styles.row}>
      <Text style={[styles.cell, styles.time]}>7:00</Text>
      <Text style={[styles.spot, styles.wedOpen, styles.cell]}>Open!</Text>
    </Pressable>
    <Pressable style={styles.row}>
      <Text style={[styles.cell, styles.time]}>7:30</Text>
      <Text style={[styles.spot, styles.wedOpen, styles.cell]}>Open!</Text>
    </Pressable>


    <Pressable style={[styles.thursHeader, styles.dateHeaders]}>
    <BorderGradient
    color1='#ffb62b'
    color2='#ffb62b'
    color3='#ffe599'
    radius={3}
    width={10}
    />
      <Text style={styles.headerText}>Thursday, July 13th</Text>
    </Pressable>
    <Pressable style={styles.row}>
      <Text style={[styles.cell, styles.time]}>6:00</Text>
      <Text style={[styles.spot, styles.thursBooked, styles.cell]}>Open!</Text>
    </Pressable>
    <Pressable style={styles.row}>
      <Text style={[styles.cell, styles.time]}>6:30</Text>
      <Text style={[styles.spot, styles.thursBooked, styles.cell]}>Open!</Text>
    </Pressable>
    <Pressable style={styles.row}>
      <Text style={[styles.cell, styles.time]}>7:00</Text>
      <Text style={[styles.spot, styles.thursOpen, styles.cell]}>Open!</Text>
    </Pressable>
    <Pressable style={styles.row}>
      <Text style={[styles.cell, styles.time]}>7:30</Text>
      <Text style={[styles.spot, styles.thursOpen, styles.cell]}>Open!</Text>
    </Pressable>


    <Pressable style={[styles.sunHeader, styles.dateHeaders]}>
    <BorderGradient
    color1='#a64d79'
    color2='#a64d79'
    color3='#c27ba0'
    radius={3}
    width={10}
    />
      <Text style={styles.headerText}>Sunday, July 16th</Text>
    </Pressable>
    <Pressable style={styles.row}>
      <Text style={[styles.cell, styles.time]}>6:00</Text>
      <Text style={[styles.spot, styles.sunBooked, styles.cell]}>Open!</Text>
    </Pressable>
    <Pressable style={styles.row}>
      <Text style={[styles.cell, styles.time]}>6:30</Text>
      <Text style={[styles.spot, styles.sunBooked, styles.cell]}>Open!</Text>
    </Pressable>
    <Pressable style={styles.row}>
      <Text style={[styles.cell, styles.time]}>7:00</Text>
      <Text style={[styles.spot, styles.sunOpen, styles.cell]}>Open!</Text>
    </Pressable>
    <Pressable style={styles.row}>
      <Text style={[styles.cell, styles.time]}>7:30</Text>
      <Text style={[styles.spot, styles.sunOpen, styles.cell]}>Open!</Text>
    </Pressable>
    </View>
  // </ScrollView>
  )
}
