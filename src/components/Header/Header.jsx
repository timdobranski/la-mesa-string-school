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
    aspectRatio: 5,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 20,
    paddingBottom: 20,
    marginBottom: 20,
    backgroundColor: 'black',
    borderBottomWidth: 3,
    borderBottomColor: 'white',
    height: '7%'

  },
  logo: {
    flex: 1,
    width: '85%',
    resizeMode: 'contain',
  },
});
