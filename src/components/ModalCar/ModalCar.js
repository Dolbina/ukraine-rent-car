import Modal from 'react-modal';

import { AiOutlineClose } from 'react-icons/ai';
import PropTypes from 'prop-types';
import {
  CloseBtn,
  CloseBtnWrap,
  ModalWrap,
  Img,
  ImageContainer,
  SubtitleCardForModal,
  Description,
  Accessories,
  AgeWrap,
  AgeBlue,
  Rental,
} from './ModalCar.styled';

import { SubtitleCardBlue, TextWrapAddress } from 'components/CarCard/CarCard.styled';

const customStyles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(18, 20, 23, 0.50)',
    zIndex: '3',
   
  },
  content: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',

    borderRadius: '24px',
    outline: 'none',
    padding: '16px',
    zIndex: '999',
  },
};

Modal.setAppElement('#root');

export const ModalCar = ({ car, isOpen, onClose }) => {
  const address = car.address;
  const parts = address.split(', ');
  const city = parts[1];
  const country = parts[2];

  const mileage = car.mileage;
  const formatter = new Intl.NumberFormat('en-US');
  const formattedMileage = formatter.format(mileage);

  const rentalConditions = car.rentalConditions;
  const arraRrentalConditions = rentalConditions.split('\n');

  const arraRrentalConditions1 = arraRrentalConditions[0];
    const arraRrentalConditions2 = arraRrentalConditions[1];
  const arraRrentalConditions3 = arraRrentalConditions[2];
  const age = arraRrentalConditions1.split(':');
  const ageFormatted = age[1];
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      style={customStyles}
      contentLabel="Car modal"
    >
      <CloseBtnWrap>
        <CloseBtn aria-label="Close" onClick={onClose}>
          <AiOutlineClose size="24" fill="#121417" />
        </CloseBtn>
      </CloseBtnWrap>
      <ModalWrap>
        <ImageContainer>
          <Img src={car.img} alt={car.make} />
        </ImageContainer>
        <div>
          <SubtitleCardForModal>
            {`${car.make} `}
            <SubtitleCardBlue>{`${car.model}`}</SubtitleCardBlue>
            {`, ${car.year}`}
          </SubtitleCardForModal>
        </div>
        <TextWrapAddress>
          <p>{`${city} | ${country} | Id:${car.id} | Year: ${car.year} | Type: ${car.type}`}</p>
          <p>{`Fuel Consumption: ${car.fuelConsumption} | Engine Size:${car.engineSize} `}</p>
        </TextWrapAddress>
        <Description>{`${car.description} `}</Description>

        <div>
          <Accessories>Accessories and functionalities:</Accessories>
          <TextWrapAddress>
            <p>
              {`${car.accessories[0]} | ${car.accessories[1]} | ${car.accessories[2]} `}
            </p>
            <p>
              {`${car.functionalities[0]} | ${car.functionalities[1]} | ${car.functionalities[2]}`}
            </p>
          </TextWrapAddress>
        </div>

        <div>
          <Accessories>Rental Conditions:</Accessories>
          <div>
            <AgeWrap>
              <p>
                {`Minimum age:`}
                <AgeBlue> {`${ageFormatted}`} </AgeBlue>
              </p>
            </AgeWrap>
            <AgeWrap>
              <p>{`${arraRrentalConditions2} `}</p>
            </AgeWrap>
          </div>
          <div>
            <AgeWrap>
              <p>{`${arraRrentalConditions3} `}</p>
            </AgeWrap>

            <AgeWrap>
              <p>
                {`Mileage:`}
                <AgeBlue>{`${formattedMileage}`} </AgeBlue>
              </p>
            </AgeWrap>
            <AgeWrap>
              <p>
                {`Price:`}
                <AgeBlue>{` ${car.rentalPrice} `}</AgeBlue>
              </p>
            </AgeWrap>
          </div>
        </div>
        <Rental>
          <a href="tel:+380730000000">Rental car</a>
        </Rental>
      </ModalWrap>
    </Modal>
  );
};

ModalCar.propTypes = {
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
