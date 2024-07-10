import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  background-color: #06D6A0;
  padding: 1rem;
  color: #fff;
  max-height: 5rem;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

  @media (min-width: 992px) {
    padding: 0;
  }
`;

const NavbarWrapper = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;

  @media (min-width: 992px) {
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
  }
`;

const NavbarBrand = styled.h1`
  font-size: 1rem;
  margin-right: 1rem;
  list-style: none;

  @media (min-width: 992px) {
    margin-right: 2rem;
  }
`;

const NavbarList = styled.ul`
  display: flex;
  list-style: none;
  float: right;

  @media (min-width: 992px) {
    float: right;
  }
`;

const NavbarItem = styled.li`
  margin-right: 1rem;
  font-size: 12px;

  @media (min-width: 768px) {
    margin-right: 0.5rem;
  }

  @media (min-width: 992px) {
    margin-right: 2rem;
  }
`;

const NavbarLink = styled(Link)`
  color: #fff;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

function Navbar() {
    return (
        <Container>
            <NavbarWrapper>
                <div>
                    <NavbarBrand>Covid ID</NavbarBrand>
                </div>
                <div>
                    <NavbarList>
                        <NavbarItem>
                            <NavbarLink to="/">Global</NavbarLink>
                        </NavbarItem>
                        <NavbarItem>
                            <NavbarLink to="/indonesia">Indonesia</NavbarLink>
                        </NavbarItem>
                        <NavbarItem>
                            <NavbarLink to="/provinsi">Provinsi</NavbarLink>
                        </NavbarItem>
                        <NavbarItem>
                            <NavbarLink to="/about">About</NavbarLink>
                        </NavbarItem>
                    </NavbarList>
                </div>
            </NavbarWrapper>
        </Container>
    );
}

export default Navbar;
