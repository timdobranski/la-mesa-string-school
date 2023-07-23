// import React, { useState, useEffect } from 'react';
// import supabase from '../../../supabase';
import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import MaskedView from '@react-native-masked-view/masked-view';
import { LinearGradient } from 'expo-linear-gradient';



export default function BorderGradient({ color1, color2, color3, width, radius }) {

  const colors = [color1 || '#039e37', color2 || '#b2ff59', color3 || null ]

  return (
  <MaskedView
    maskElement={(
      <View
        pointerEvents='none'
        style={[
          StyleSheet.absoluteFill,
          { borderWidth: width || 8, borderRadius: radius || 8}]}
        />
    )}
    style={[StyleSheet.absoluteFill]}
>
    <LinearGradient
        colors={colors}
        pointerEvents='none'
        style={[StyleSheet.absoluteFill]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
    />
</MaskedView>

  );
}



