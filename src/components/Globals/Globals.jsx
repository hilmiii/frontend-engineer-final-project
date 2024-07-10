import { useState, useEffect } from 'react';
import styled from 'styled-components';
import Global from "../Global/Global";

const Container = styled.div`
  background-color: #fafafa;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`;

const Title = styled.h2`
  margin-bottom: 1rem;
  font-size: 2.44rem;
  color: #06D6A0;
  text-align: center;
`;

const Description = styled.p`
  text-align: center;
  color: #4361ee;
`;

const GlobalContainer = styled.div`
  border-radius: 8px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: auto;
  width: calc(100% - 2rem); 
  max-width: 100%;

  @media (min-width: 992px) {
    width: 100%; 
    max-width: none;
    margin-left: 0;
    padding: 5rem;
  }
`;

const GlobalItem = styled.div`
  margin: 0.5rem; 
  padding: 1rem;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease-in-out;
  display: flex;
  flex-direction: column;
  align-items: center;

  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }

  @media (min-width: 992px) {
    padding: 5rem;
  }
`;

function Globals() {
    const [globals, setGlobals] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://covid-fe-2023.vercel.app/api/global.json');
                if (!response.ok) {
                    throw new Error(`Error: ${response.statusText}`);
                }
                const data = await response.json();
                console.log('Fetched data:', data); // Add this line to check fetched data
                const GlobalData = data.global.map(item => ({
                    status: item.status === 'confirmed' ? 'Positif' : item.status === 'recovered' ? 'Sembuh' : 'Meninggal',
                    total: item.total,
                    detail: item.status === 'confirmed' ? 'Jumlah positif dari COVID-19' : item.status === 'recovered' ? 'Jumlah sembuh dari COVID-19' : 'Jumlah meninggal dari COVID-19'
                }));

                setGlobals(GlobalData);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching data:', error);
                setError(error.message);
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }

    const sortedGlobals = globals.sort((a, b) => {
        const statusOrder = {
            "Positif": 1,
            "Sembuh": 2,
            "Meninggal": 3
        };
        return statusOrder[a.status] - statusOrder[b.status];
    });

    return (
        <Container>
            <Title>Global Situation</Title>
            <Description>Data Covid Berdasarkan Global</Description>
            <section>
                <GlobalContainer>
                    {sortedGlobals.map((global, index) => (
                        <GlobalItem key={index}>
                            {global.total !== undefined && <Global global={global} />}
                        </GlobalItem>
                    ))}
                </GlobalContainer>
            </section>     
            <div><br /></div>       
        </Container>
    );
}

export default Globals;
