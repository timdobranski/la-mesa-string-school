const goTo = {
  SignIn: (navigation) => {
    console.log('Going to Sign In');
    navigation.navigate('Sign In');
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

export default goTo;