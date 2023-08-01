const getDates = {
  upcoming: (spot, n, options) => {
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    const spotDayIndex = daysOfWeek.indexOf(spot.day);

    let newSpotDayIndex, newSpotTime;
    if (options && options.newSpot && options.newSpot.day && options.newSpot.time && options.newSpot.startDate) {
      newSpotTime = options.newSpot.time.toLowerCase();
      newSpotDayIndex = daysOfWeek.indexOf(options.newSpot.day);
    }

    const now = new Date();
    const currentDayIndex = now.getDay();

    let daysToAdd = (spotDayIndex + 7 - currentDayIndex) % 7;

    if (daysToAdd === 0 && now.toLocaleTimeString().toLowerCase() > newSpotTime) {
      daysToAdd = 7;
    }

    const nextInstances = [];
    let currentDate = new Date();
    currentDate.setDate(currentDate.getDate() + daysToAdd);

    for (let i = 0; i < n; ) {
      const instanceDate = new Date(currentDate);

      let instanceDayIndex, instanceTime, instanceString, instanceType, instanceNote;

      instanceType = "regular";

      if(options && options.cancellations && options.cancellations.length > 0){
        const cancellation = options.cancellations.find(cancellation =>
          cancellation.date === instanceDate.toISOString().slice(0,10) && cancellation.time === spot.time
        );
        if(cancellation) {
          instanceType = "cancellation";
          instanceNote = cancellation.note;
        }
      }

      if (options && options.newSpot && options.newSpot.startDate) {
        const startDate = new Date(options.newSpot.startDate);
        if (instanceDate >= startDate && newSpotDayIndex !== undefined && newSpotTime) {
          instanceDayIndex = newSpotDayIndex;
          instanceTime = newSpotTime;
        } else {
          instanceDayIndex = spotDayIndex;
          instanceTime = spot.time;
        }
      } else {
        instanceDayIndex = spotDayIndex;
        instanceTime = spot.time;
      }

      instanceString = `${daysOfWeek[instanceDayIndex]}, ${instanceDate.toLocaleString('default', { month: 'long' })} ${instanceDate.getDate()} @ ${instanceTime.endsWith('pm') || instanceTime.endsWith('am') ? instanceTime : (instanceTime + 'pm')}`;

      nextInstances.push({
        string: instanceString,
        day: daysOfWeek[instanceDayIndex],
        time: instanceTime,
        date: instanceDate,
        type: instanceType,
        note: instanceNote
      });

      currentDate.setDate(currentDate.getDate() + 7); // Move to the next week
      i++; // Only increment counter if a non-cancelled spot is added
    }

    // Add makeups
    if(options && options.makeups && options.makeups.length > 0) {
      options.makeups.forEach(makeup => {
        const [year, month, day] = makeup.date.split('-').map(Number);
        // Create a new date object without timezone correction
        const makeupDate = new Date(Date.UTC(year, month - 1, day));
        const makeupTime = makeup.time;
        const dateString = `${daysOfWeek[makeupDate.getUTCDay()]}, ${makeupDate.toLocaleString('default', { month: 'long' })} ${makeupDate.getUTCDate()} @ ${makeupTime.endsWith('pm') || makeupTime.endsWith('am') ? makeupTime : (makeupTime + 'pm')}`;
        const insertIndex = nextInstances.findIndex(instance => instance.date > makeupDate);
        const makeupInstance = {
          string: dateString,
          day: daysOfWeek[makeupDate.getUTCDay()],
          time: makeupTime,
          date: makeupDate,
          type: 'makeup',
          note: makeup.note
        };
        if (insertIndex === -1) {
          nextInstances.push(makeupInstance);
        } else {
          nextInstances.splice(insertIndex, 0, makeupInstance);
        }
      });
    }

    return nextInstances;
  },

  removeCancellations: (dates, cancellations) => {

  }
};

export default getDates;