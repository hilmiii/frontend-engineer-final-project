import { useContext } from 'react';
import styled from 'styled-components';
import { ProvincesContext } from '../../context/ProvincesContext';

const Container = styled.div`
  margin: 20px;
  border: 1px solid #ddd;
`;

const TableContainer = styled.div`
  max-height: 400px;
  overflow-y: scroll;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const TableHeader = styled.th`
  padding: 8px;
  text-align: left;
  border-bottom: 1px solid #ddd;
  background-color: #f2f2f2;
  font-weight: bold;
`;

const TableCell = styled.td`
  padding: 8px;
  text-align: left;
  border-bottom: 1px solid #ddd;
`;

const Provinces = () => {
  const { provincesData } = useContext(ProvincesContext);

  return (
    <Container>
      <TableContainer>
        <Table>
          <thead>
            <tr>
              <TableHeader>Kota</TableHeader>
              <TableHeader>Kasus</TableHeader>
              <TableHeader>Sembuh</TableHeader>
              <TableHeader>Meninggal</TableHeader>
              <TableHeader>Dirawat</TableHeader>
            </tr>
          </thead>
          <tbody>
            {provincesData.map((province, index) => (
              <tr key={index}>
                <TableCell>{province.kota}</TableCell>
                <TableCell>{province.kasus}</TableCell>
                <TableCell>{province.sembuh}</TableCell>
                <TableCell>{province.meninggal}</TableCell>
                <TableCell>{province.dirawat}</TableCell>
              </tr>
            ))}
          </tbody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default Provinces;
