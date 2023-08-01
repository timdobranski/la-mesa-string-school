import React, { useState, useEffect } from 'react';
import supabase from '../../../supabase';
import getDates from '../../helpers/getDates';
import goTo from '../../helpers/navigation';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, View,  Text, Pressable } from 'react-native';


export default function SchedulingCard({ student }) {
  const nav = useNavigation();
  const [showUpcomingLessons, setShowUpcomingLessons] = useState(false);
  const [scheduleDates, setScheduleDates] = useState(null);

  const populateScheduleDates = async () => {
  // Get the student's spot, check for new spot
    const { data, er } = await supabase
      .from('students')
      .select('day, time, new_day, new_time')
      .eq('id', student.id)
    if (er) {console.error('Error getting day/time in SchedulingCard: ', er); }

    console.log('data: ', data)
      // Format spot and newSpot if necessary
    const spot = { day: data[0].day, time: data[0].time };
    let newSpot;
    if (data[0].new_day) {
      newSpot = { day: data[0].new_day, time: data[0].new_time, startDate: data[0].new_spot_start_date };
    }
  // Call getDates with spot and newSpot
    const dates = getDates.regularSpot(spot, 10, newSpot);
  // Set scheduleDates state
    setScheduleDates(dates);
}

  useEffect(() => {
    populateScheduleDates();
  }, [])

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Scheduling</Text>
      <Text style={styles.text}>{`Makeups Available: ${student.makeups}`}</Text>
      <Text style={styles.comment}>Makeups are added when you cancel before 2pm</Text>
      <Text style={styles.comment}>Limit of 4 max</Text>

      <Text style={styles.text}>Schedule A Makeup</Text>
      <Text style={styles.comment}>Use a makeup credit</Text>

      <Pressable onPress={() => goTo.Reschedule(nav)}>
        <Text style={styles.text}>Move or Cancel A Lesson</Text>
        <Text style={styles.comment}>Cancel and reschedule now or later</Text>
      </Pressable>

      <Text style={styles.text}>Change Spots</Text>
      <Text style={styles.comment}>Change to a different recurring weekly spot</Text>

      <Pressable onPress={() => setShowUpcomingLessons(!showUpcomingLessons)}>
      <Text style={styles.label}>{showUpcomingLessons ? 'Hide' : 'Show'} Upcoming Lessons</Text>
      </Pressable>
      {showUpcomingLessons ? scheduleDates.map((lesson, index) => {
        return <Text style={styles.text} key={index}>{lesson}</Text>
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

