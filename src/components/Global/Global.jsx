import PropTypes from 'prop-types';
import styled from 'styled-components';

const GlobalContainer = styled.div`
  margin-bottom: 1rem;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`;

const Title = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
`;

const Total = styled.p`
  font-size: 2rem;
  color: ${({ status }) => {
    if (status === 'Positif') return '#06D6A0';
    if (status === 'Sembuh') return '#00B4D8';
    if (status === 'Meninggal') return '#FF006E';
  }};
`;

const Detail = styled.p`
  color: #64748b;
  font-size: 1rem;
`;

function Global({ global }) {
    const { status = '', total = 0, detail = '' } = global; // Add default values

    return (
        <GlobalContainer>
            <Title>{status}</Title>
            <Total status={status}>{total.toLocaleString()}</Total>
            <Detail>{detail}</Detail>
        </GlobalContainer>
    );
}

Global.propTypes = {
    global: PropTypes.shape({
        status: PropTypes.string.isRequired,
        total: PropTypes.number.isRequired,
        detail: PropTypes.string.isRequired,
    }).isRequired,
};

export default Global;
