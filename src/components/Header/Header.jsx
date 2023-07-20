import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

export default function Header() {
  return (
    <View style={styles.headerContainer}>
      <Image
        style={styles.logo}
        source={require('../../../assets/images/lmss-logo.png')}
        resizeMode='contain'
      />
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    width: '100%',
    aspectRatio: 4,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 5,
    paddingBottom: 5,
    marginBottom: 15,
    backgroundColor: 'black',
    borderWidth: 5,
    borderColor: 'white',
    borderRadius: 5,
    // height: '13%'

  },
  logo: {
    flex: 1,
    width: '90%',
    resizeMode: 'contain',

  },
});
