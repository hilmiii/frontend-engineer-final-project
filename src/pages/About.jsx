import { useState } from 'react';
import styled from 'styled-components';
import Weather from '../components/Weather/Weather';
import RainyImage from '../assets/rainy.jpg';
import CloudyImage from '../assets/cloudy.jpg';
import ClearImage from '../assets/clear.jpg';
import FairImage from '../assets/fair.jpg';

const AboutContainer = styled.div`
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  transition: background-image 0.3s ease;
  backdrop-filter: blur(8px);
  color: white;
  text-shadow: 0 0 10px rgba(0, 0, 0, 0.9);
`;

const About = () => {
  const [background, setBackground] = useState('');

  const getBackgroundImage = (weather) => {
    switch(weather) {
      case 'rain':
        return `url(${RainyImage})`;
      case 'clouds':
        return `url(${CloudyImage})`;
      case 'clear':
        return `url(${ClearImage})`;
      default:
        return `url(${FairImage})`;
    }
  };

  return (
    <AboutContainer style={{ backgroundImage: getBackgroundImage(background) }}>
      <Weather setBackground={setBackground} />
    </AboutContainer>
  );
};

export default About;
