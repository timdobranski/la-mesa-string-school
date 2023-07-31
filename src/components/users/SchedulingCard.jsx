import React, { useState, useEffect } from 'react';
import supabase from '../../../supabase';
import { StyleSheet, View, Alert, Text, Pressable } from 'react-native';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import goTo from '../helpers/navigation';
import { useNavigation } from '@react-navigation/native';
// import { Picker } from '@react-native-picker/picker';



export default function SchedulingCard({ student }) {
  const [showUpcomingLessons, setShowUpcomingLessons] = useState(false);
  const fakeSchedule = [{
    date: '7/21/23',
    time: '4:00pm',
  },
  {
    date: '7/28/23',
    time: '4:00pm',
  },
  {
    date: '8/4/23',
    time: '4:00pm',
  }]
  if (student === null || student === undefined) {
    student = {
      makeups: 3,
    }
    }

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Scheduling</Text>
      <Text style={styles.text}>{`Makeups Available: ${student.makeups}`}</Text>
      <Text style={styles.comment}>Makeups are added when you cancel before 2pm</Text>
      <Text style={styles.comment}>Limit of 4 max</Text>

      <Text style={styles.text}>Move A Lesson</Text>
      <Text style={styles.comment}>Cancel and reschedule now</Text>

      <Text style={styles.text}>Cancel A Lesson</Text>
      <Text style={styles.comment}>Cancel now and reschedule later</Text>

      <Text style={styles.text}>Scheduling A Makeup</Text>
      <Text style={styles.comment}>Use a makeup credit</Text>

      <Text style={styles.text}>Move Spots</Text>
      <Text style={styles.comment}>Change to a different recurring weekly spot</Text>

      <Pressable onPress={() => setShowUpcomingLessons(!showUpcomingLessons)}>
      <Text style={styles.label}>{showUpcomingLessons ? 'Hide' : 'Show'} Upcoming Lessons</Text>
      </Pressable>
      {showUpcomingLessons ? fakeSchedule.map((lesson, index) => {
        return <Text style={styles.text} key={index}>{lesson.date} @ {lesson.time}</Text>
      }) : null}


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

