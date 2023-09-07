
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
} from './CarCard.styled';

import { ButtonLearnMore } from '../ButtonLearnMore/ButtonLearnMore';
// import  {Modal}  from '../Modal/Modal';

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
  // const [isModalOpen, setIsModalOpen] = useState(false);

 
 const [isFavorites, setIsFavorites] = useState(
   JSON.parse(localStorage.getItem('favorites'))?.includes(car.id) || false
 );

 const toggleFavorites = () => {
   setIsFavorites(!isFavorites);
   toggleFavorite(car.id);
  };
  
//  const toggleModal = () => {
//    setIsModalOpen(!isModalOpen);
//   };
  
  return (
    <CardWrap>
      <ImageContainer>
        <Img src={car.img} alt={car.make} />
        <IconWrap>
          {isFavorites ? (
            <IconHeart onClick={toggleFavorites} />
          ) : (
            <IconHeartEmpty onClick={toggleFavorites} />
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
        <p>{`${car.address} | ${car.rentalCompany} `}</p>
        <p>{`${car.type} | ${car.model} | ${car.id}`}</p>
      </TextWrap>
      <ButtonLearnMore>Learn more</ButtonLearnMore>
      {/* <Modal
        // isOpen={isModalOpen}
        // onClose={toggleModal}
        // onClose={onClose}
        // shouldDisplay={shouldDisplayModal}
      >
        <h2>Аренда автомобіля</h2>
      </Modal> */}
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
