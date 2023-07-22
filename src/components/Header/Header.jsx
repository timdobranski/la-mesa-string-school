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
    backgroundColor: 'rgba(0, 0, 0, .5)',

    borderBottomWidth: 1,
    borderColor: '#666666',
    borderRadius: 5,
    // height: '13%'

  },
  logo: {
    flex: 1,
    width: '90%',
    resizeMode: 'contain',

  },
});
