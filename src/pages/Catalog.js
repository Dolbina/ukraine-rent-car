import { useEffect, useState } from 'react';
import { Formik, Field } from 'formik';
import * as yup from 'yup';
import { CarGallary } from 'components/CarGallary/CarGallary';
import { Loader } from '../components/Loader/Loader';
import { fetchCars } from '../services/api';
import { ErrorMessage } from '../components/ErrorMessage.styled';

import { TitleHidden } from '../components/CarGallary/CarGallary.styled';

import { ButtonLoadMore, ButtonWrap } from 'components/ButtonLoadMore/ButtonLoadMore.styled';

import {
  FormField,
  Form,
  ButtonSearch,
  InputMileageWrapSecond,
  InputMileageWrap,
 
} from '../components/Form/Form.styled.js';


const initialValues = {
  selectedMake: '',
  selectedPrice: 0,
  minMileage: 0,
  maxMileage: 100000,
};

const validationSchema = yup.object().shape({
  selectedMake: yup.string(),
  selectedPrice: yup.number(),
  minMileage: yup.number(),
  maxMileage: yup.number(),
});

const Catalog = () => {
  const [cars, setCars] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [visibleCars, setVisibleCars] = useState(8);
  const [showLoadMore, setShowLoadMore] = useState(true);

 
  const [filteredCars, setFilteredCars] = useState([]);

  const StylesMakes = {
  width: 'auto',
  height: '48px',
  padding: '14px 18px',
  borderRadius: '14px',
  backgroundColor: '#f7f7fb',
  color: '#121417',
  fontSize: '18px',
  fontWeight: 500,
  lineHeight: 1.11,
    border: 'none',
  outline: 'none',
}

  const StylesLeft = {
    width: '160px',
    height: '48px',
    padding: '14px 14px 14px 24px',
    alignItems: 'center',

    borderRadius: '14px 0px 0px 14px',
    borderRight: '1px solid rgba(138, 138, 137, 0.2)',
    backgroundColor: '#f7f7fb',
    color: '#121417',
    fontSize: '18px',
    fontWeight: '500',
    lineHeight: '1.11',
    border: 'none',
    outline: 'none',
  };

 const StylesRight = {
   width: '160px',
   height: '48px',
   padding: '14px 14px 14px 24px',
   alignItems: 'center',

   borderRadius: '0px 14px 14px 0px ',

   backgroundColor: '#f7f7fb',
   color: '#121417',
   fontSize: '18px',
   fontWeight: '500',
   lineHeight: '1.11',
   border: 'none',
   outline: 'none',
 };
  
  const uniqueMakes = [...new Set(cars.map(car => car.make))];
  
  const minPrice = Math.min(
    ...cars.map(car => Number(car.rentalPrice.replace('$', '')))
  );
  const maxPrice = Math.max(
    ...cars.map(car => Number(car.rentalPrice.replace('$', '')))
  );

  
  const uniquePrices = [];
  for (let price = minPrice; price <= maxPrice; price += 10) {
    uniquePrices.push(price);
  }
  uniquePrices.sort((a, b) => a - b);

  const loadMoreCars = () => {
    const totalVisibleCars = visibleCars + 8;
    if (totalVisibleCars >= cars.length) {
      setShowLoadMore(false);
    }
    setVisibleCars(totalVisibleCars);
  };

  useEffect(() => {
    const fetchCars2 = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const results = await fetchCars();
        setCars(results);
        setFilteredCars(results);
      } catch (error) {
        setError('Error, try reloading the page');
      } finally {
        setIsLoading(false);
      }
    };
    fetchCars2();
  }, []);
 


  return (
    <main>
      <TitleHidden>Car for rent</TitleHidden>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={values => {
          const { selectedMake, selectedPrice, minMileage, maxMileage } =
            values;

          const filtered = cars
            .filter(car => {
              const isMakeMatch =
                selectedMake === '' || car.make === selectedMake;
              return isMakeMatch;
            })
            .filter(car => {
              const isPriceMatch =
                selectedPrice === 0 ||
                Number(car.rentalPrice.replace('$', '')) <= selectedPrice;
              return isPriceMatch;
            })
            .filter(car => {
              const isMileageMatch =
                car.mileage >= minMileage && car.mileage <= maxMileage;
              return isMileageMatch;
            });

          setFilteredCars(filtered);
        }}
      >
        <Form>
          <div>
            <FormField htmlFor="selectedMake">Car Brand</FormField>
            <Field as="select" name="selectedMake" style={StylesMakes}>
              <option value="">All Makes</option>
              {uniqueMakes.map(make => (
                <option key={make} value={make}>
                  {make}
                </option>
              ))}
            </Field>
          </div>

          <div>
            <FormField htmlFor="selectedPrice">Price/ 1 hour</FormField>
            <Field as="select" name="selectedPrice" style={StylesMakes}>
              <option value={0}>To $</option>
              {uniquePrices.map(price => (
                <option key={price} value={price}>
                  {`$${price}`}
                </option>
              ))}
            </Field>
          </div>

          <InputMileageWrapSecond>
            <FormField htmlFor="minMileage">Car mileage / km</FormField>
            <InputMileageWrap>
              <Field
                type="number"
                name="minMileage"
                placeholder="Min Mileage"
                style={StylesLeft}
                step="1000"
              />

              <FormField htmlFor="maxMileage"></FormField>
              <Field
                step="1000"
                type="number"
                name="maxMileage"
                placeholder="Max Mileage"
                style={StylesRight}
              />
            </InputMileageWrap>
          </InputMileageWrapSecond>

          <ButtonSearch type="submit">Search</ButtonSearch>
        </Form>
      </Formik>

      {!isLoading && error && <ErrorMessage>{error}</ErrorMessage>}
      {isLoading && <Loader />}
      {!error && filteredCars.length > 0 && (
        <>
          <CarGallary cars={filteredCars.slice(0, visibleCars)} />

          {showLoadMore && filteredCars.length > 8 && (
            <ButtonWrap>
              <ButtonLoadMore type="button" onClick={loadMoreCars}>
                Load more
              </ButtonLoadMore>
            </ButtonWrap>
          )}
        </>
      )}
      {!error && cars.length > 0 && filteredCars.length === 0 && (
        <ErrorMessage>Incorrect parameters. No cars found.</ErrorMessage>
      )}
    </main>
  );
};


export default Catalog;


