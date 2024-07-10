import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  background-color: #06D6A0;
  padding: 1.5rem;
  color: #fff;
  max-height: 5rem;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

  @media (min-width: 992px) {
    padding: 0;
  }
`;

const FooterWrapper = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
  }

  @media (min-width: 992px) {
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
  }
`;

const Brand = styled.div`
  font-size: 0.5rem;
  margin-right: 0rem;
  list-style: none;
  align-self: flex-start;

  @media (min-width: 992px) {
    font-size: 1rem;
    margin-right: 1rem;
    list-style: none;
    margin-left: 20px;
  }
`;

const FooterList = styled.ul`
  display: flex;
  list-style: none;
  float: right;

  @media (min-width: 992px) {
    float: right;
  }
`;

const FooterItem = styled.li`
  margin-right: 1rem;
  font-size: 12px;

  @media (min-width: 768px) {
    margin-right: 0.5rem;
  }

  @media (min-width: 992px) {
    margin-right: 2rem;
  }
`;

const FooterLink = styled(Link)`
  color: #fff;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const Description = styled.p`
  font-size: 8px;
  margin-bottom: 0;

  @media (min-width: 992px) {
    font-size: 0.8rem;
  }
`;

function Footer() {
    return (
        <Container>
            <FooterWrapper>
                <Brand>
                    <h1>Covid ID</h1>
                    <Description>Developed by Rizky Hilmiawan Anggoro</Description>
                </Brand>
                <div>
                    <FooterList>
                        <FooterItem>
                            <FooterLink to="/">Global</FooterLink>
                        </FooterItem>
                        <FooterItem>
                            <FooterLink to="/indonesia">Indonesia</FooterLink>
                        </FooterItem>
                        <FooterItem>
                            <FooterLink to="/provinsi">Provinsi</FooterLink>
                        </FooterItem>
                        <FooterItem>
                            <FooterLink to="/about">About</FooterLink>
                        </FooterItem>
                    </FooterList>
                </div>
            </FooterWrapper>
        </Container>
    );
}

export default Footer;
