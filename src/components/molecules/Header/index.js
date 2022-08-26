import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Header = ({city, temp, weatherDesc}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.cityText}>{city}</Text>
      <View style={styles.temp}>
        <Text style={styles.tempText}>{temp}</Text>
        <View style={styles.degrees} />
      </View>
      <Text style={styles.weatherDescText}>{weatherDesc}</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  cityText: {
    fontSize: 24,
    fontFamily: 'Poppins-Medium',
    color: '#0D3C82',
    lineHeight: 36,
  },
  temp: {
    flexDirection: 'row',
    position: 'relative',
    height: 80,
  },
  tempText: {
    fontFamily: 'Poppins-light',
    fontSize: 72,
    color: '#0D3C82',
    lineHeight: 90,
  },
  degrees: {
    position: 'absolute',
    top: 12,
    right: -15,
    width: 15,
    borderColor: '#0D3C82',
    borderWidth: 3,
    height: 15,
    borderRadius: 15,
  },
  weatherDescText: {
    fontFamily: 'Poppins-Medium',
    fontSize: 16,
    color: '#0D3C82',
    lineHeight: 24,
    textTransform: 'capitalize',
  },
});
