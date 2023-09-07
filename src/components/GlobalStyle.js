import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';

import ManropeRegular from '../assets/fonts/Manrope-Regular.ttf';
import ManropeMedium from '../assets/fonts/Manrope-Medium.ttf';
import ManropeSemiBold from '../assets/fonts/Manrope-SemiBold.ttf';
import MontserratRegular from '../assets/fonts/Montserrat-Regular.ttf';
import MontserratSemiBold from '../assets/fonts/Montserrat-SemiBold.ttf';

export const GlobalStyle = createGlobalStyle`
   @font-face {
        font-family: 'ManropeRegular';
        src: local('ManropeRegular'),
        url(${ManropeRegular}) format('truetype');
        font-weight: 400;
        font-style: normal;
    }
  @font-face {
        font-family: 'ManropeMedium';
        src: local('ManropeMedium'),
        url(${ManropeMedium}) format('truetype');
        font-weight: 500;
        font-style: normal;
    }

     @font-face {
        font-family: 'ManropeSemiBold';
        src: local('ManropeSemiBold'),
        url(${ManropeSemiBold}) format('truetype');
        font-weight: 600;
        font-style: normal;
    }

     @font-face {
        font-family: 'MontserratRegular';
        src: local('MontserratRegular'),
        url(${MontserratRegular}) format('truetype');
        font-weight: 400;
        font-style: normal;
    }

      @font-face {
        font-family: 'MontserratSemiBold';
        src: local('MontserratSemiBold'),
        url(${MontserratSemiBold}) format('truetype');
        font-weight: 600;
        font-style: normal;
    }

html {
  box-sizing: border-box;
  
}

*,
*::before,
*::after {
  box-sizing: inherit;
}

body {
  margin: 0;

  font-family: -apple-system, BlinkMacSystemFont, 'ManropeMedium','Segoe UI', Roboto,
    Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif;
   
  color: rgba(18, 20, 23, 0.50);
   font-size: 12px;
  font-weight: 400;
  line-height: 1.5;
  
  background-color: #fff;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

img {
  display: block;
  max-width: 100%;
  height: auto;
}

p {
  margin: 0;
}

ul, ol {
  margin: 0;
  padding: 0;
  list-style: none;
}

h1, h2, h3{
  margin: 0;
}

 a {
    color: inherit;
    text-decoration: none;
  }

  button {
    cursor: pointer;
  }

`;
