import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Gap, HourForecast} from '../../atoms';

const Item = ({item}) => {
  let date = new Date(item.dt_txt);
  let hours = date.getHours() + '.00';
  return (
    <HourForecast
      hour={hours}
      weatherDesc={item.weather[0].icon}
      degrees={Math.round(item.main.temp)}
    />
  );
};

const HourForecastList = ({data}) => {
  const groupedData = data.list.reduce((days, row) => {
    const date = row.dt_txt.split(' ')[0];
    days[date] = [...(days[date] ? days[date] : []), row];
    return days;
  }, {});
  function getCurrentDayData(data) {
    let d = new Date();
    let currentDate =
      d.getFullYear() +
      '-' +
      ('0' + (d.getMonth() + 1)).slice(-2) +
      '-' +
      d.getDate();
    return data[currentDate];
  }
  const renderItem = ({item}) => {
    return <Item item={item} />;
  };
  return (
    <View style={styles.container}>
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>3 HOURS FORECAST</Text>
      </View>
      <Gap height={15} />
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={(getCurrentDayData(groupedData), getCurrentDayData(groupedData))}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        style={styles.hourForecast}
      />
    </View>
  );
};

export default HourForecastList;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    paddingHorizontal: 24,
  },
  sectionContainer: {
    borderBottomWidth: 2,
    borderBottomColor: '#EEEEEE',
    paddingBottom: 5,
  },
  sectionTitle: {
    fontFamily: 'Poppins-Medium',
    color: '#0D3C82',
    fontSize: 16,
  },
  hourForecast: {
    flexDirection: 'row',
  },
});
