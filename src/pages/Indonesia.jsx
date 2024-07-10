import { useState } from 'react';
import data from "../utils/constants/provinces";
import Indonesias from "../components/Indonesias/Indonesias";
import Provinces from "../components/Provinces/Provinces";
import Header from "../components/Header/Header";
import { ProvincesProvider } from '../context/ProvincesContext';

const Indonesia = () => {
  const [provincesData] = useState(data.provinces);
  return(
        <div>
            <main>
                <Header />
                <Indonesias />
                  <ProvincesProvider>
                    <Provinces data={provincesData} />
                  </ProvincesProvider>
                <br />
                <br />
            </main>
        </div>
    );
};

export default Indonesia;
