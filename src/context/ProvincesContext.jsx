// ProvincesContext.js
import { createContext, useState } from 'react';
import data from '../utils/constants/provinces';

const ProvincesContext = createContext();

const ProvincesProvider = ({ children }) => {
  const [provincesData, setProvincesData] = useState(data.provinces);

  const addDataToProvinces = (newData) => {
    const updatedData = provincesData.map(province => {
      if (province.kota === newData.provinsi) {
        province[newData.status.toLowerCase()] += parseInt(newData.jumlah);
      }
      return province;
    });
    setProvincesData(updatedData);
  };

  return (
    <ProvincesContext.Provider value={{ provincesData, addDataToProvinces }}>
      {children}
    </ProvincesContext.Provider>
  );
};

export { ProvincesContext, ProvincesProvider };
