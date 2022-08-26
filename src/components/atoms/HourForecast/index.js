import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import Gap from '../Gap';

const HourForecast = ({hour, weatherDesc, degrees}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.hourText}>{hour}</Text>
      <Gap height={8} />
      <Image
        style={styles.weatherIcon}
        source={{
          uri: `https://openweathermap.org/img/wn/${weatherDesc}@2x.png`,
        }}
      />
      <Gap height={8} />
      <View style={styles.degrees}>
        <Text style={styles.degreesText}>{degrees}</Text>
        <View style={styles.degreesIcon} />
        <Text style={styles.degreesText}>C</Text>
      </View>
    </View>
  );
};

export default HourForecast;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    width: 80,
    height: 120,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  weatherIcon: {width: 50, height: 25},
  hourText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
    color: '#0D3C82',
  },
  degrees: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  degreesText: {
    fontFamily: 'Poppins-Medium',
    fontSize: 18,
    color: '#0D3C82',
  },
  degreesIcon: {
    borderColor: '#0D3C82',
    borderWidth: 1,
    width: 6,
    height: 6,
    borderRadius: 6,
    marginTop: 2,
    marginLeft: 2,
  },
});
