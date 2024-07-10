import { useEffect, useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  text-align: center;
  padding: 20px;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  margin: 5rem;
`;

const Title = styled.h1`
  font-size: 2rem;
  color: #06D6A0;
`;

const Subtitle = styled.p`
  font-size: 1rem;
  color: #118AB2;
`;

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 2fr));
  gap: 20px;
  justify-items: center;
`;

const Card = styled.div`
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 90px;
  width: 400px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: left;
  background: white;
`;

const RegionName = styled.h2`
  font-size: 1.2rem;
  color: #073B4C;
  text-align: center;
  margin-bottom: 20px;
`;

const Stat = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;

const StatLabel = styled.span`
  font-size: 1rem;
  color: #073B4C;
  font-weight: bold;
`;

const StatValue = styled.span`
  font-size: 1rem;
  font-weight: bold;
  color: ${props => props.color};
`;

const Icon = styled.img`
  width: 24px;
  height: 24px;
`;

const Regions = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://covid-fe-2023.vercel.app/api/global.json')
      .then((response) => response.json())
      .then((data) => {
        setData(data.regions);
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <Container>
      <Title>Situation by Regions</Title>
      <Subtitle>Bacaan Pilihan Covid</Subtitle>
      <br />
      <br />
      <CardGrid>
        {data.map((region, index) => (
          <Card key={index}>
            <RegionName>{region.name}</RegionName>
            <Stat>
              <StatLabel>Confirmed</StatLabel>
              <StatValue color="#06D6A0">{region.numbers.confirmed.toLocaleString()}</StatValue>
              <Icon src="../src/assets/confirmed-icon.png" alt="Confirmed" />
            </Stat>
            <Stat>
              <StatLabel>Recovered</StatLabel>
              <StatValue color="#118AB2">{region.numbers.recovered.toLocaleString()}</StatValue>
              <Icon src="../src/assets/recovered-icon.png" alt="Recovered" />
            </Stat>
            <Stat>
              <StatLabel>Death</StatLabel>
              <StatValue color="#EF476F">{region.numbers.death.toLocaleString()}</StatValue>
              <Icon src="../src/assets/deaths-icon.png" alt="Deaths" />
            </Stat>
          </Card>
        ))}
      </CardGrid>
    </Container>
  );
};

export default Regions;
