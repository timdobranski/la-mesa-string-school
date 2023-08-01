import React, { useState, useEffect } from 'react';
import supabase from '../../../supabase';
import getDates from '../../helpers/getDates';
import { StyleSheet, View,  Text, Pressable } from 'react-native';


export default function Reschedule({ student }) {
  const [scheduleDates, setScheduleDates] = useState(null);

  const populateScheduleDates = async () => {
  // Get the student's spot, check for new spot
  const { data, er } = await supabase
    .from('students')
    .select('*')
    .eq('id', student.id)

  if (er) {
    console.error('Error getting day/time in SchedulingCard: ', er);
    return;
  }

  const { data: cancellationData, er: cancellationEr } = await supabase
    .from('cancellations')
    .select('*')
    .eq('student', student.id)

  if (cancellationEr) {
    console.error('Error getting cancellations data: ', cancellationEr);
    return;
  }

  const { data: makeupData, er: makeupEr } = await supabase
    .from('makeups')
    .select('*')
    .eq('student', student.id)

  if (makeupEr) {
    console.error('Error getting makeup data: ', makeupEr);
    return;
  }
    console.log('studentdata: ', data)
    console.log('cancellationData: ', cancellationData)
    console.log('makeupData: ', makeupData)
      // Format spot and newSpot if necessary
    const spot = { day: data[0].day, time: data[0].time };
    const options = {
      cancellations: null,
      makeups: null,
      newSpot: null
    }
    if (data[0].new_day) {
      options.newSpot = { day: data[0].new_day, time: data[0].new_time, startDate: data[0].new_spot_start_date };
    }
    if (cancellationData) {
      options.cancellations = cancellationData;
    }
    if (makeupData) {
      options.makeups = makeupData;
    }
    console.log('options: ', options);
  // Call getDates with spot and newSpot
    const dates = getDates.upcoming(spot, 10, options);
    console.log('dates: ', dates);
  // Set scheduleDates state
    setScheduleDates(dates);
    }

  const showUpcomingLessons = scheduleDates.map((lesson, index) => {
    return (<Text
      style={lesson.type === 'cancellation' ? styles.cancellation : styles.text}
      key={index}>{lesson.string}</Text>)
  })

  useEffect(() => {
    populateScheduleDates();
  }, [])



  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Upcoming Lessons</Text>
      {scheduleDates ? scheduleDates.map((lesson, index) => {
        return (<Text style={styles.text} key={index}>{lesson.string}</Text>)
      }) : null }


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
    fontSize: 20,
    // color: '#05a7d7',
    color: 'white',
    marginTop: 20,
    // textDecorationLine: 'underline',
  },
  cancellation: {
    textAlign: 'center',
    fontFamily: 'economica',
    fontSize: 20,
    // color: '#05a7d7',
    color: 'lightgrey',
    marginTop: 20,
    textDecorationLine: 'underline',
  },
  comment: {
    color: '#cccccc',
    fontStyle: 'italic',
    textAlign: 'center',
  }


});

