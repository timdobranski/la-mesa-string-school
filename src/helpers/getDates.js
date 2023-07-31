const getDates = {
  regularSpot: (spot, n, newSpot) => {
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    // Get the index of the input spot day in the daysOfWeek array
    const spotDayIndex = daysOfWeek.indexOf(spot.day);

    // Prepare the newSpot day and time, if provided
    let newSpotDayIndex, newSpotTime, isNewSpotPM;
    if (newSpot && newSpot.day && newSpot.time && newSpot.startDate) {
      newSpotTime = newSpot.time.toLowerCase();
      isNewSpotPM = newSpotTime.endsWith('pm');
      newSpotDayIndex = daysOfWeek.indexOf(newSpot.day);
    }

    // Get the current day index and time
    const now = new Date();
    const currentDayIndex = now.getDay();

    // Calculate the number of days to add to reach the input spot day
    let daysToAdd = (spotDayIndex + 7 - currentDayIndex) % 7;

    // Adjust the days to add based on the current time
    if (daysToAdd === 0 && now.toLocaleTimeString().toLowerCase() > newSpotTime) {
      daysToAdd = 7; // If the input spot day has already passed this week, move to the next week
    }

    // Calculate the next n instances of the input spot day
    const nextInstances = [];
    let currentDate = new Date();
    currentDate.setDate(currentDate.getDate() + daysToAdd);

    for (let i = 0; i < n; i++) {
      const instanceDate = new Date(currentDate);

      if (newSpot && newSpot.startDate) {
        const startDate = new Date(newSpot.startDate);
        if (instanceDate >= startDate && newSpotDayIndex !== undefined && newSpotTime) {
          // Use newSpot day and time if instanceDate falls on or after startDate
          const dateString = `${daysOfWeek[newSpotDayIndex]}, ${instanceDate.toLocaleString('default', { month: 'long' })} ${instanceDate.getDate()} @ ${newSpotTime}${isNewSpotPM ? 'pm' : 'am'}`;
          nextInstances.push(dateString);
        } else {
          // Use spot day and time
          const dateString = `${daysOfWeek[spotDayIndex]}, ${instanceDate.toLocaleString('default', { month: 'long' })} ${instanceDate.getDate()} @ ${spot.time}`;
          nextInstances.push(dateString);
        }
      } else {
        // Use spot day and time
        const dateString = `${daysOfWeek[spotDayIndex]}, ${instanceDate.toLocaleString('default', { month: 'long' })} ${instanceDate.getDate()} @ ${spot.time}`;
        nextInstances.push(dateString);
      }

      currentDate.setDate(currentDate.getDate() + 7); // Move to the next week
    }

    return nextInstances;
  }
};

export default getDates;