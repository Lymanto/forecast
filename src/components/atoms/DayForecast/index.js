import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

const DayForecast = ({date, day, degrees, weatherDesc}) => {
  return (
    <View style={styles.container}>
      <View style={styles.dateDayContainer}>
        <Text style={styles.dayText}>{day}</Text>
        <Text style={styles.dateText}>{date}</Text>
      </View>
      <Image
        style={styles.weatherIcon}
        source={{
          uri: `https://openweathermap.org/img/wn/${weatherDesc}@2x.png`,
        }}
      />
      <View style={styles.degrees}>
        <Text style={styles.degreesText}>{degrees}</Text>
        <View style={styles.degreesIcon} />
        <Text style={styles.degreesText}>C</Text>
      </View>
    </View>
  );
};

export default DayForecast;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  dateDayContainer: {
    marginTop: 10,
    width: 90,
  },
  dayText: {
    fontFamily: 'Poppins-Medium',
    fontSize: 14,
    color: '#0D3C82',
  },
  dateText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 10,
    color: '#71707A',
  },
  weatherIcon: {width: 50, height: 50},
  degrees: {
    flexDirection: 'row',
    width: 90,
    justifyContent: 'flex-end',
  },
  degreesText: {
    fontFamily: 'Poppins-Medium',
    fontSize: 16,
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
