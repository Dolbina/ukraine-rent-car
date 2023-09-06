import { CarGallaryWrap} from './CarGallary.styled';
import { CarCard } from '../CarCard/CarCard';
import PropTypes from 'prop-types';

export const CarGallary = ({ cars }) => {
  return (
    <div>
      <CarGallaryWrap>
        {cars?.map(car => (
          <li key={car.id}>
            <CarCard car={car} />
          </li>
        ))}
      </CarGallaryWrap>
    </div>
  );
};



CarGallary.propTypes = {
  cars: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    make: PropTypes.string.isRequired,
    model: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    fuelConsumption: PropTypes.string.isRequired,
    engineSize: PropTypes.string.isRequired,
    accessories: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    functionalities: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    rentalPrice: PropTypes.string.isRequired,
    rentalCompany: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    rentalConditions: PropTypes.string.isRequired,
    mileage: PropTypes.number.isRequired,
})).isRequired,
};