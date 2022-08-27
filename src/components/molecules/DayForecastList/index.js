import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {DayForecast} from '../../atoms';

const DayForecastList = ({data}) => {
  const groupedData = data.list.reduce((days, row) => {
    const date = row.dt_txt.split(' ')[0];
    days[date] = [...(days[date] ? days[date] : []), row];
    return days;
  }, {});

  function getMax(arr, attr) {
    return Math.max.apply(
      Math,
      arr.map(item => item.main[attr]),
    );
  }

  function getMin(arr, attr) {
    return Math.min.apply(
      Math,
      arr.map(item => item.main[attr]),
    );
  }
  function getDay(dateString) {
    let days = [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
    ];
    let d = new Date(dateString);
    let dNow = new Date().getDay();
    dNow = days[dNow];
    let otherDay = days[d.getDay()];
    return dNow == otherDay ? 'Today' : otherDay;
  }

  function getDateMonth(date) {
    let d = new Date(date);
    let month = d.toLocaleString('en-US', {month: 'short'});
    return d.getDate() + ' ' + month;
  }

  return (
    <View style={styles.container}>
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>4-DAY FORECAST</Text>
      </View>
      {Object.keys(groupedData)
        .slice(0, 4)
        .map(item => {
          return (
            <DayForecast
              key={item}
              weatherDesc={groupedData[item][0].weather[0].icon}
              day={getDay(item)}
              date={getDateMonth(item)}
              degrees={`${Math.round(
                getMax(groupedData[item], 'temp_max'),
              )} / ${Math.round(getMin(groupedData[item], 'temp_min'))}`}
            />
          );
        })}
    </View>
  );
};

export default DayForecastList;

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
});
