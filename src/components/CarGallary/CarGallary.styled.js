import styled from 'styled-components';

export const CarGallaryWrap = styled.ul`
  display: grid;
  grid-template-columns: repeat(
    4,
    minmax(274px, 1fr)
  ); 
  grid-auto-rows: 426px; 
  grid-gap: 29px; 
  max-width: 1440px; 
  margin: 0 auto; 
  list-style: none;
  padding: 0;
  grid-row-gap: 50px;
`;

export const TitleHidden = styled.h1`
 
    position: absolute;
    white-space: nowrap;
    width: 1px;
    height: 1px;
    overflow: hidden;
    border: 0;
    padding: 0;
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
    margin: -1px;
  
`;

