import styled from 'styled-components';

const Table = styled.table`
    width: 100%;
    border-collapse: collapse;
    margin-top: 10px;
    border-radius: 8px;
    overflow: hidden;
`;

const TableCell = styled.td`
    padding: 5px 15px;
    text-align: left;
`;

const TableRow = styled.tr`
    &:nth-child(even) {
        
    }

    &:hover {
        background-color: #f1f1f148;
    }
`;

const WeatherTable = ({ data }) => {
    if (!data) return null; 

    return (
        <Table>
            <tbody>
                <TableRow>
                    <TableCell><strong>City</strong></TableCell>
                    <TableCell>{data.name}</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell><strong>Temperature</strong></TableCell>
                    <TableCell>{Math.round((data.main.temp - 273.15) * 10) / 10}°C</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell><strong>Humidity</strong></TableCell>
                    <TableCell>{data.main.humidity}%</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell><strong>Pressure</strong></TableCell>
                    <TableCell>{data.main.pressure} hPa</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell><strong>Wind Speed</strong></TableCell>
                    <TableCell>{data.wind.speed} m/s</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell><strong>Wind Direction</strong></TableCell>
                    <TableCell>{data.wind.deg}º</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell><strong>Sunrise</strong></TableCell>
                    <TableCell>{new Date(data.sys.sunrise * 1000).toLocaleTimeString()}</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell><strong>Sunset</strong></TableCell>
                    <TableCell>{new Date(data.sys.sunset * 1000).toLocaleTimeString()}</TableCell>
                </TableRow>
            </tbody>
        </Table>
    );
};

export default WeatherTable;
