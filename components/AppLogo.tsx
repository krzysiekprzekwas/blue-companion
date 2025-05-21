import { Image } from 'expo-image';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { ThemedText } from './ThemedText';

export const AppLogo = () => {
  return (
    <View style={{ alignItems: 'center', justifyContent: 'center'}}>
      {/* Anchor Icon */}
      <Image
        source={require('@/assets/images/bluehorizon-anchor.png')}
        style={styles.anchorImage}
      />
      
      {/* Text Part */}
      <View style={{ alignItems: 'center', marginTop: 20 }}>
        <ThemedText style={{ 
          fontSize: 10,
          lineHeight: 24,
          letterSpacing: 2,
        }} lightColor='#1A2C52'
        >
          BY BLUEHORIZON
        </ThemedText>
        
        <ThemedText style={{ 
          fontSize: 44, 
          lineHeight: 56,
          fontFamily: 'OpenSans-SemiBold',
          letterSpacing: 5,
        }} lightColor='#1A2C52'>
          COMPANION
        </ThemedText>
        
        <ThemedText style={{ 
          fontSize: 84, 
          lineHeight: 120,
          fontFamily: 'CormorantUpright',
          fontWeight: 'bold',
          position: 'absolute',
          zIndex: -1,
          top: -32,
        }} lightColor='#D9D9D9' darkColor='#32405A'>
          APP
        </ThemedText>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  anchorImage: {
    width: 68,
    height: 100,
  },
}); 