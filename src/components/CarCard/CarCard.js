
import { useState } from 'react';
import PropTypes from 'prop-types';
import {
  CardWrap,
  Img,
  ImageContainer,
  IconWrap,
  SubtitleCard,
  SubtitleCardBlue,
  SubtitleWrap,
  TextWrap,
  IconHeart,
  IconHeartEmpty,
  TextWrapAddress,
} from './CarCard.styled';

import { ButtonLearnMore } from '../ButtonLearnMore/ButtonLearnMore';



function toggleFavorite(carId) {
  const favorites = JSON.parse(localStorage.getItem('favorites')) || [];

  const carIndex = favorites.indexOf(carId);
  if (carIndex !== -1) {
    
    favorites.splice(carIndex, 1);
  } else {
   
    favorites.push(carId);
  }

  localStorage.setItem('favorites', JSON.stringify(favorites));
}


export const CarCard = ({ car }) => {
  const address = car.address;
  const parts = address.split(', ');
  const city = parts[1];
  const country = parts[2];

  const [isFavorites, setIsFavorites] = useState(
    JSON.parse(localStorage.getItem('favorites'))?.includes(car.id) || false
  );

  const toggleFavorites = () => {
    setIsFavorites(!isFavorites);
    toggleFavorite(car.id);
  };


  return (
    <CardWrap>
      <ImageContainer>
        <Img src={car.img} alt={car.make} />
        <IconWrap>
          {isFavorites ? (
            <IconHeart aria-label="heart" onClick={toggleFavorites} />
          ) : (
            <IconHeartEmpty aria-label="heart" onClick={toggleFavorites} />
          )}
        </IconWrap>
      </ImageContainer>

      <TextWrap>
        <SubtitleWrap>
          <div>
            <SubtitleCard>
              {`${car.make} `}
              <SubtitleCardBlue>{`${car.model}`}</SubtitleCardBlue>
              {`, ${car.year}`}
            </SubtitleCard>
          </div>
          <div>
            <SubtitleCard>{`${car.rentalPrice}`}</SubtitleCard>
          </div>
        </SubtitleWrap>
        <TextWrapAddress>
          <p>{`${city} | ${country} | ${car.rentalCompany} `}</p>
          <p>{`${car.type} | ${car.model} | ${car.id}`}</p>
        </TextWrapAddress>
      </TextWrap>
      <ButtonLearnMore car={car}>Learn more</ButtonLearnMore>
    </CardWrap>
  );
};

CarCard.propTypes = {
  car: PropTypes.shape({
    img: PropTypes.string.isRequired,
    make: PropTypes.string.isRequired,
    model: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    rentalPrice: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    rentalCompany: PropTypes.string.isRequired,
    accessories: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    type: PropTypes.string.isRequired,
    functionalities: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  }).isRequired,
};
