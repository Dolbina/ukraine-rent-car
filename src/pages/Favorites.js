import { useEffect, useState } from 'react';
import { CarGallary } from 'components/CarGallary/CarGallary';
import { Loader } from '../components/Loader/Loader';
import { fetchCars } from '../services/api';
import { ErrorMessage } from '../components/ErrorMessage.styled';

const Favorites = () => {
  const [cars, setCars] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
 

  useEffect(() => {
    const fetchCars2 = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const results = await fetchCars();
               setCars(results);
      } catch (error) {
        setError('Error, try reloading the page');
      } finally {
        setIsLoading(false);
      }
    };
    fetchCars2();
  }, []);
  console.log(cars);
  
  return (
    <main>
      <h1>Car for rent</h1>
      {!isLoading && error && <ErrorMessage>{error}</ErrorMessage>}
      {isLoading && <Loader />}
      {!error && (cars.length>0) && <CarGallary cars={cars} />}
    </main>
  );
};


export default Favorites;
