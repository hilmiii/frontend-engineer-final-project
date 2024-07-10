import { useState, useEffect } from 'react';
import styled from 'styled-components';
import WeatherTable from '../WeatherTable/WeatherTable';

const Container = styled.div`
    min-width: 50vh;
    min-height: 20vh;
    max-width: 70vh;
    max-height: 70vh;
    border: 1px solid #333;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 10px;
    background-color: rgba(255, 255, 255, 0.3);
`;

const Title = styled.h1`
    font-size: 60px;
    margin: 0;
`;

const SubTitle = styled.h2`
    font-size: 2rem;
    margin: 10px 0;
`;

const Text = styled.p`
    font-size: 1rem;
    margin: 0;
`;

const Weather = ({ setBackground }) => {
  const [weatherData, setWeatherData] = useState(null);
  const [location, setLocation] = useState({ latitude: null, longitude: null });

  useEffect(() => {
    const handleGeolocationSuccess = (position) => {
        setLocation({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      });
    };

    const handleGeolocationError = (error) => {
    console.error('Error fetching location:', error.message);
    } ;

    if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(handleGeolocationSuccess, handleGeolocationError);
    } else {
    console.error('Geolocation is not supported.');
    }
  }, []);

  useEffect(() => {
    const getWeather = async () => {
      if (location.latitude && location.longitude) {
        try {
          const url = `https://api.openweathermap.org/data/2.5/weather?lat=${location.latitude}&lon=${location.longitude}&appid=be4f709beb35221438738382074a6cc8`;
          const response = await fetch(url);
          if (!response.ok) {
            throw new Error(`Error fetching weather data: ${response.statusText}`);
          }
          const data = await response.json();
          setWeatherData(data);
          setBackground(data.weather[0].main.toLowerCase());
        } catch (error) {
          console.error(error);
        }
      }
    };
    getWeather();
  }, [location, setBackground]);

  if (!weatherData) {
    return <Container>Loading...</Container>;
  }

  return (
    <Container>
      <Text>Weather App by Hilmiawan</Text>
      <Title>{Math.round((weatherData.main.temp - 273.15) * 10) / 10}°C</Title>
      <Text>{weatherData.weather[0].description}</Text>
      <SubTitle>{weatherData.name}</SubTitle>
      <WeatherTable data={weatherData} />
    </Container>
  );
};

export default Weather;
