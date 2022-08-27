import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  ActivityIndicator,
  ScrollView,
  RefreshControl,
} from 'react-native';
import {DayForecastList, HourForecastList, Header, Gap} from './components';

const wait = timeout => {
  return new Promise(resolve => setTimeout(resolve, timeout));
};
const App = () => {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [isErr, setIsErr] = useState(false);
  const [refreshing, setRefreshing] = React.useState(false);

  async function getWeather() {
    await axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=jakarta&units=metric&appid=cf7fef9a8698b4a1bb21fa55fd9a8aee`,
      )
      .then(res => {
        setCurrentWeather(res);
        setIsErr(false);
      })
      .catch(err => {
        console.log(err);
        setIsErr(true);
      });
  }
  async function getForecast() {
    await axios
      .get(
        `https://api.openweathermap.org/data/2.5/forecast?q=jakarta&units=metric&appid=cf7fef9a8698b4a1bb21fa55fd9a8aee`,
      )
      .then(res => {
        setForecast(res.data);
        setIsErr(false);
      })
      .catch(err => {
        console.log(err.data);
        setIsErr(true);
      });
  }
  useEffect(() => {
    getWeather();
    getForecast();
  }, []);
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => {
      setRefreshing(false);
      getForecast();
      getWeather();
    });
  }, []);
  if (isErr) {
    return (
      <SafeAreaView style={styles.loadingPage}>
        <ScrollView
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={onRefresh}
              colors="#FF4651"
              tintColor="#FF4651"
            />
          }>
          <Text>Oops...</Text>
          <Text>Something went wrong with API</Text>
          <Text>Please try again later</Text>
        </ScrollView>
      </SafeAreaView>
    );
  }

  if (currentWeather != null && forecast != null) {
    return (
      <SafeAreaView style={styles.page}>
        <ScrollView
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={onRefresh}
              colors="#FF4651"
              tintColor="#FF4651"
            />
          }>
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
        </ScrollView>
      </SafeAreaView>
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
