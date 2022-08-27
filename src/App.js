import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import {DayForecastList, HourForecastList, Header, Gap} from './components';

const App = () => {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);

  useEffect(() => {
    async function getWeather() {
      await axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?q=jakarta&units=metric&appid=cf7fef9a8698b4a1bb21fa55fd9a8aee`,
        )
        .then(res => {
          setCurrentWeather(res);
        })
        .catch(err => {
          err;
        });
    }
    async function getForecast() {
      await axios
        .get(
          `https://api.openweathermap.org/data/2.5/forecast?q=jakarta&units=metric&appid=cf7fef9a8698b4a1bb21fa55fd9a8aee`,
        )
        .then(res => {
          setForecast(res.data);
        })
        .catch(err => {
          err.data;
        });
    }
    getWeather();
    getForecast();
  }, []);

  if (currentWeather != null && forecast != null) {
    return (
      <View style={styles.page}>
        <SafeAreaView />
        <Gap height={100} />
        <Header
          city={currentWeather.data.name}
          weatherDesc={currentWeather.data.weather[0].description}
          temp={Math.round(currentWeather.data.main.temp)}
        />
        <Gap height={50} />
        <DayForecastList data={forecast} />
        <Gap height={30} />
        <HourForecastList data={forecast} />
      </View>
    );
  } else {
    return (
      <View style={styles.loadingPage}>
        <ActivityIndicator size="large" color="#FF4651" />
      </View>
    );
  }
};

export default App;

const styles = StyleSheet.create({
  page: {
    backgroundColor: '#FFF7DC',
    flex: 1,
  },
  loadingPage: {
    backgroundColor: '#FFF7DC',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
