import { useEffect, useState } from 'react';
import { RxHamburgerMenu } from 'react-icons/rx';
import { Loader } from '../components/Loader/Loader';
import { fetchCars } from '../services/api';
import { ErrorMessage } from '../components/ErrorMessage.styled';
import { CarGallary } from 'components/CarGallary/CarGallary';
import SidebarComponent from 'components/SideBar/SideBar';
import { BurgerButton } from '../components/SideBar/SideBar.styled';


const Favorites = () => {
  const [favoriteCarsId, setFavoriteCarsId] = useState([]);
  const [filteredCars, setFilteredCars] = useState([]);
  const [cars, setCars] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => {
      setSidebarOpen(!sidebarOpen);
    };

    const closeSidebar = () => {
      setSidebarOpen(false);
    };

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
      {sidebarOpen && <SidebarComponent isOpen={sidebarOpen} onClose={closeSidebar} />}
      <BurgerButton onClick={toggleSidebar}><RxHamburgerMenu size="24" fill="#121417"/></BurgerButton>
      {!isLoading && error && <ErrorMessage>{error}</ErrorMessage>}
      {isLoading && <Loader />}
      {!error && (
        <>
          {filteredCars.length > 0 ? (
            <CarGallary cars={filteredCars} />
          ) : (
            <ErrorMessage>Your list of favorite cars is empty</ErrorMessage>
          )}
        </>
      )}
    </main>
  );
};

export default Favorites;
