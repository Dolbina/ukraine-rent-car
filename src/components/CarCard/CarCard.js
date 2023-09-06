import {
  CardWrap,
  Img,
  SubtitleCard,
  SubtitleWrap,
  TextWrap,
} from './CarCard.styled';

import { ButtonLearnMore } from '../ButtonLearnMore/ButtonLearnMore';

import PropTypes from 'prop-types';

export const CarCard = ({ car }) => {
   
  return (
    <CardWrap>
      <Img src={car.img} alt={car.make} />
      <TextWrap>
        <SubtitleWrap>
          <div>
            <SubtitleCard>{`${car.make} ${car.model}, ${car.year}`}</SubtitleCard>
          </div>
          <div>
            <SubtitleCard>{`${car.rentalPrice}`}</SubtitleCard>
          </div>
        </SubtitleWrap>
        <p>{`${car.address} | ${car.rentalCompany} `}</p>
        {/* <p>{`${car.type} | ${car.model} | ${car.id} | ${car.functionalities}`}</p> */}
      </TextWrap>
      <ButtonLearnMore /> 
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
    functionalities: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired
  }).isRequired,
};
