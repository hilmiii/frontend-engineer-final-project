import { useState, useContext } from 'react';
import styled from 'styled-components';
import data from "../../utils/constants/provinces";
import { ProvincesContext } from '../../context/ProvincesContext';
import FormImageSrc from '../../assets/berjalan.png'; // Renamed the import for clarity

const Container = styled.div`
  margin: 1rem;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  background-color: #fafafa;

  @media (min-width: 992px) {
    max-width: 1200px;
    margin: 3rem auto;
  }
`;

const FormWrapper = styled.section`
  display: flex;
  flex-direction: row;
  text-align: left;
  padding: 1rem;

  @media (min-width: 992px) {
    margin: 0 1rem;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    text-align: left;
  }
`;

const FormLeft = styled.div`
  margin-bottom: 1rem;
  width: 100%;

  @media (min-width: 992px) {
    flex-basis: 40%;
  }
`;

const FormRight = styled.div`
  margin-bottom: 1rem;
  margin-right: 1rem;
  width: 100%;

  @media (min-width: 992px) {
    flex-basis: 60%;
  }
`;

const FormTitle = styled.h2`
  color: #06D6A0;
  margin-bottom: 1rem;
  font-size: 2rem;

  @media (min-width: 992px) {
    font-size: 2.44rem;
  }
`;

const FormGroup = styled.div`
  margin-bottom: 1rem;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  color: #118AB2;
  font-weight: bold;
  font-size: 0.8rem;

  @media (min-width: 992px) {
    font-size: 1rem;
  }
`;

const InputField = styled.input`
  width: 100%;
  padding: 0.5rem;
  margin-bottom: 1rem;
  border: 1px solid #06D6A0;
  border-radius: 5px;
  transition: border-color 0.3s ease;
  font-size: 0.6rem;

  &:focus {
    outline: none;
    border-color: #06D6A0;
  }

  @media (min-width: 992px) {
    font-size: 1rem;
  }
`;

const Select = styled.select`
  width: 100%;
  padding: 0.5rem;
  margin-bottom: 1rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #fff;
  transition: border-color 0.3s ease;

  &:focus {
    outline: none;
    border-color: #06D6A0;
  }
`;

const FormButton = styled.button`
  padding: 0.8rem 2rem;
  border: none;
  border-radius: 10px;
  background-color: #06D6A0;
  color: #fff;
  cursor: pointer;
  transition: background-color 0.3s ease;
  font-size: 0.8rem;

  &:hover {
    background-color: #05b08d;
  }

  @media (min-width: 992px) {
    font-size: 1rem;
  }
`;

const StyledFormImage = styled.img` // Renamed styled component
  max-width: 100%;
  height: auto;
  border-radius: 25px;
  margin-top: 5rem;
  margin-right: 1rem;

  @media (min-width: 992px) {
    margin-top: 0;
  }
`;

function Form() {
  const { addDataToProvinces } = useContext(ProvincesContext);
  const [formData, setFormData] = useState({
    provinsi: '',
    status: '',
    jumlah: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.provinsi && formData.status && formData.jumlah) {
      addDataToProvinces(formData);
      setFormData({
        provinsi: '',
        status: '',
        jumlah: ''
      });
    } else {
      alert("Please fill in all fields.");
    }
  };

  return (
    <Container>
      <FormWrapper>
        <FormRight>
          <StyledFormImage src={FormImageSrc} alt="placeholder" /> {/* Updated to use renamed variables */}
        </FormRight>
        <FormLeft>
          <FormTitle>Add Data</FormTitle>
          <form onSubmit={handleSubmit}>
            <FormGroup>
              <Label htmlFor="provinsi">Provinsi :</Label>
              <Select
                id="provinsi"
                onChange={handleChange}
                value={formData.provinsi}
              >
                <option value="">Select Provinsi</option>
                {data.provinces.map((province, index) => (
                  <option key={index} value={province.kota}>{province.kota}</option>
                ))}
              </Select>
            </FormGroup>
            <FormGroup>
              <Label htmlFor="status">Status :</Label>
              <Select
                id="status"
                onChange={handleChange}
                value={formData.status}
              >
                <option value="">Select Status</option>
                {data.statusOptions.map((status, index) => (
                  <option key={index} value={status}>{status}</option>
                ))}
              </Select>
            </FormGroup>
            <FormGroup>
              <Label htmlFor="jumlah">Jumlah :</Label>
              <InputField
                type="number"
                id="jumlah"
                onChange={handleChange}
                value={formData.jumlah}
              />
            </FormGroup>
            <FormButton type="submit">Submit</FormButton>
          </form>
        </FormLeft>
      </FormWrapper>
    </Container>
  );
}

export default Form;
