import { useEffect, useState } from 'react';
import { CarGallary } from 'components/CarGallary/CarGallary';
import { Loader } from '../components/Loader/Loader';
import { fetchCars } from '../services/api';
import { ErrorMessage } from '../components/ErrorMessage.styled';

import { TitleHidden } from '../components/CarGallary/CarGallary.styled';

import { ButtonLoadMore, ButtonWrap } from 'components/ButtonLoadMore/ButtonLoadMore.styled';
import { ButtonSearch, InputLeft, InputRight, InputWrap, SelectMakes } from '../components/Catalog.styled';

const Catalog = () => {
  const [cars, setCars] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [visibleCars, setVisibleCars] = useState(8);
  const [showLoadMore, setShowLoadMore] = useState(true);

  const [selectedMake, setSelectedMake] = useState(''); 
  const [selectedPrice, setSelectedPrice] = useState(0); 
  const [minMileage, setMinMileage] = useState(0); 
  const [maxMileage, setMaxMileage] = useState(100000);
  const [filteredCars, setFilteredCars] = useState([]);


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
 
const handleSearch = () => {
  const filtered = cars
    .filter(car => {
      const isMakeMatch = selectedMake === '' || car.make === selectedMake;


      return isMakeMatch;
    })
    .filter(car => {
      const isPriceMatch =
        selectedPrice === 0 ||
        Number(car.rentalPrice.replace('$', '')) <=
       selectedPrice;
     
      return isPriceMatch;
     
    })
    .filter(car => {
       const isMileageMatch =
         car.mileage >= minMileage && car.mileage <= maxMileage;
      return isMileageMatch;
    });
    

  setFilteredCars(filtered);
};

  return (
    <main>
      <TitleHidden>Car for rent</TitleHidden>
      <InputWrap>
       
        <SelectMakes
          name="Car brand"
          onChange={e => setSelectedMake(e.target.value)}
          value={selectedMake}
        >
          <option value="">All Makes</option>
          {uniqueMakes.map(make => (
            <option key={make} value={make}>
              {make}
            </option>
          ))}
        </SelectMakes>

        <SelectMakes
          onChange={e => setSelectedPrice(Number(e.target.value))}
          value={selectedPrice}
        >
          <option value={0}>To $</option>
          {uniquePrices.map(price => (
            <option key={price} value={price}>
              {`$${price}`}
            </option>
          ))}
        </SelectMakes>

        <div>
          <InputLeft
            type="number"
            placeholder="Min Mileage"
            value={minMileage}
            onChange={e => setMinMileage(Number(e.target.value))}
          />
          <InputRight
            type="number"
            placeholder="Max Mileage"
            value={maxMileage}
            onChange={e => setMaxMileage(Number(e.target.value))}
          />
          </div>
          
        <ButtonSearch type="submit" onClick={handleSearch}>
          Search
        </ButtonSearch>
      </InputWrap>

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


