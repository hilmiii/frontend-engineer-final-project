import { useState } from 'react';
import data from "../utils/constants/provinces";
import Navbar from "../components/Navbar/Navbar";
import Header from "../components/Header/Header";
import Indonesias from "../components/Indonesias/Indonesias";
import Footer from "../components/Footer/Footer";
import Form from "../components/Form/Form";
import Provinces from "../components/Provinces/Provinces";

function Home() {
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

    return(
        <div>
            <Navbar />
            <main>
                <Header />
                <Indonesias />
                <Provinces data={provincesData} />
                <Form addDataToProvinces={addDataToProvinces} />
            </main>
            <Footer />
        </div>
    );
}

export default Home;
