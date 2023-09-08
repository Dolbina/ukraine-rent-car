import { ModalCar } from 'components/ModalCar/ModalCar';
import { Btn } from './ButtonLearnMore.styled';
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';


export const ButtonLearnMore =
  ({  car  }) => {

    const [isModalOpen, setIsModalOpen] = useState(false);
    
useEffect(() => {
  if (isModalOpen) {
     document.body.style.overflow = 'hidden';
  } 
  return () => {
    document.body.style.overflow = 'auto';
  };
}, [isModalOpen]);
    
     const openModal = () => {
       setIsModalOpen(true);
    };
      const closeModal = () => {
        setIsModalOpen(false);
      };
    
    return (
      <div>
        <div>
          <Btn type="button" onClick={openModal}>
            Learn more
          </Btn>
        </div>
        <>
          <ModalCar isOpen={isModalOpen} onClose={closeModal} car={car} />
        </>
      </div>
    );
  };

ButtonLearnMore.propTypes = {
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
