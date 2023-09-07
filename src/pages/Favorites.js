import { useEffect, useState } from 'react';
import { Loader } from '../components/Loader/Loader';
import { fetchCars } from '../services/api';
import { ErrorMessage } from '../components/ErrorMessage.styled';
import { CarGallary } from 'components/CarGallary/CarGallary';

const Favorites = () => {
  const [favoriteCarsId, setFavoriteCarsId] = useState([]);
  const [filteredCars, setFilteredCars] = useState([]);
  const [cars, setCars] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCars3 = async () => {
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

    const savedFavoriteCarsId =
      JSON.parse(localStorage.getItem('favorites')) || [];
    setFavoriteCarsId(savedFavoriteCarsId);

    fetchCars3();
  }, []);

  useEffect(() => {
    const filtered = cars.filter(car => favoriteCarsId.includes(car.id));
    setFilteredCars(filtered);
  }, [favoriteCarsId, cars]);

  return (
    <main>
      {!isLoading && error && <ErrorMessage>{error}</ErrorMessage>}
      {isLoading && <Loader />}
      {!error && (
        <>
          {filteredCars.length > 0 ? (
            <CarGallary cars={filteredCars} />
          ) : (
            <p>Your list of favorite cars is empty</p>
          )}
        </>
      )}
    </main>
  );
};

export default Favorites;
