const format = {
  phoneNumber: (input) => {
  // Remove all non-numeric characters from the input
  const numericInput = input.replace(/\D/g, '');

  // Apply formatting only if numericInput has a value
  if (numericInput) {
    let formattedPhoneNumber = '(';

    if (numericInput.length > 3) {
      formattedPhoneNumber += numericInput.substr(0, 3) + ')';
      if (numericInput.length > 6) {
        formattedPhoneNumber += numericInput.substr(3, 3) + '-';
        formattedPhoneNumber += numericInput.substr(6, 4);
      } else {
        formattedPhoneNumber += numericInput.substr(3);
      }
    } else {
      formattedPhoneNumber += numericInput;
    }

    return formattedPhoneNumber;
  }

  return ''; // Return an empty string if the input is empty
  },
  UserHome: (navigation) => {
    console.log('Going to User Home');
    navigation.navigate('User Home');
  },
  GuestHome: (navigation) => {
    console.log('Going to Guest Home');
    navigation.navigate('Guest Home');
  },
  CheckEmail: (navigation) => {
    console.log('Going to Check Email');
    navigation.navigate('Check Email');
  },
  SchedulingAndPayments: (navigation) => {
    console.log('Going to Scheduling & Payments');
    navigation.navigate('Scheduling & Payments');
  },
  PracticeAndProgress: (navigation) => {
    console.log('Going to Practice & Progress');
    navigation.navigate('Practice & Progress');
  },
  StudentResources: (navigation) => {
    console.log('Going to Student Resources');
    navigation.navigate('Student Resources');
  },
  UserProfile: (navigation) => {
    console.log('Going to User Profile');
    navigation.navigate('User Profile');
  },
  SignUp1SelectSpot: (navigation) => {
    console.log('Going to Select Spot');
    navigation.navigate('Sign Up 1: Select Spot');
  },
  SignUp2ConfirmAndGoogle: (navigation) => {
    console.log('Going to Sign Up 2 Confirm And Google');
    navigation.navigate('Sign Up 2: Confirm And Google');
  },
  SignUp3AddInfo: (navigation) => {
    console.log('Going to Sign Up 3 Add Info');
    navigation.navigate('Sign Up 3: Add Info');
  }
  };

export default format;