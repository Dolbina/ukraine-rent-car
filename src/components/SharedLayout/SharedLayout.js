import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import {
  Container,
  Header,
  Link,
  LogoWrap,
 
  ContactInfo,
} from './Sharedlayout.styled';

import  Logo  from '../../assets/images/CarForRent_2.png'

export const SharedLayout = () => {
  return (
    <Container>
      <Header>
        <nav>
          <LogoWrap>
            <img src={Logo} alt="logo" width="40" />
          </LogoWrap>
          <Link to="/">Home</Link>
          <Link to="/catalog">Catalog</Link>
          <Link to="/favorites">Favorites</Link>
        </nav>
        <div>
          <ContactInfo>
            <p>Our Office Address: 123 Main Street, Kyiv, Ukraine</p>
            <p>
              Contact Phone Number:{' '}
              <a href={`tel:+38-066-456-7890`}>+38-066-456-7890</a>
            </p>
            <p>
              Email:{' '}
              <a href={`mailto:info@carsforrent.com`}>info@carsforrent.com</a>
            </p>
          </ContactInfo>
        </div>
      </Header>
      <Suspense fallback={<div>Loading page...</div>}>
        <Outlet />
      </Suspense>
    </Container>
  );
};
