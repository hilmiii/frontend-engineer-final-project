import { ProvincesProvider } from '../context/ProvincesContext';
import Form from "../components/Form/Form";
import Provinces from "../components/Provinces/Provinces";
import Header from "../components/Header/Header";

const Provinsi = () => {
  return (
    <ProvincesProvider>
      <div>
        <main>
          <Header />
          <Provinces />
          <br />
          <br />
          <Form />
        </main>
      </div>
    </ProvincesProvider>
  );
};

export default Provinsi;
