import styled from 'styled-components';
import dokterImage from '../../assets/dokter.png';

const Container = styled.div`
  margin: 1rem;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

  @media (min-width: 992px) {
    max-width: 1200px;
    margin: 3rem auto;
  }
`;

const HeaderSection = styled.section`
  display: flex;
  flex-direction: column;
  text-align: left;
  padding: 1rem;

  @media (min-width: 992px) {
    margin: 0 1rem;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

const HeaderLeft = styled.div`
  margin-bottom: 1rem;

  @media (min-width: 992px) {
    flex-basis: 40%;
  }
`;

const HeaderRight = styled.div`
  @media (min-width: 992px) {
    flex-basis: 60%;
  }
`;

const Title = styled.h2`
  color: #06D6A0;
  margin-bottom: 1rem;
  margin-right: 1rem;
  font-size: 2.44rem;
`;

const Genre = styled.h3`
  color: #118AB2;
  margin-bottom: 1rem;
  margin-right: 1rem;
  font-size: 1.3rem;
`;

const Description = styled.p`
  color: #64748b;
  margin-bottom: 1rem;
  margin-right: 1rem;
  font-size: 0.8rem;
`;

const Button = styled.button`
  padding: 0.8rem 2rem;
  border: none;
  border-radius: 10px;
  background-color: #06D6A0;
  color: #fff;
`;

const Image = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 25px;
  margin-top: 5rem;

  @media (min-width: 992px) {
    margin-top: 0;
  }
`;

function Header() {
    return (
        <Container>
            <HeaderSection>
                <HeaderLeft>
                    <Title>Covid App</Title>
                    <Genre>Monitoring Perkembangan Covid</Genre>
                    <Description>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, excepturi veritatis. Cupiditate doloribus nesciunt dolor.
                    </Description>
                    <Button>Vaccine</Button>
                </HeaderLeft>
                <HeaderRight>
                    <Image src={dokterImage} alt="placeholder" />
                </HeaderRight>
            </HeaderSection>
        </Container>
    );
}

export default Header;
