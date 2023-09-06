import styled from 'styled-components';

// export const CarGallaryWrap = styled.ul`
//   display: grid;
//   max-width: calc(100vw - 48px);
//   grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
//   grid-gap: 29px;
//   margin-top: 0;
//   margin-bottom: 0;
//   padding: 0;
//   list-style: none;
//   margin-left: auto;
//   margin-right: auto;
// `;

export const CarGallaryWrap = styled.ul`
  display: grid;
  grid-template-columns: repeat(
    4,
    minmax(274px, 1fr)
  ); /* Розміщує 4 карточки в одному ряду */
  grid-auto-rows: 426px; /* Довжина ряду (426px) */
  grid-gap: 29px; /* Відступ між карточками */
  max-width: 1440px; /* Максимальна ширина контейнера */
  margin: 0 auto; /* Вирівнювання по центру */
  list-style: none;
  padding: 0;
  grid-row-gap: 50px; /* Відступ між рядами */
`;