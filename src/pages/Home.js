import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Loader } from '../components/Loader/Loader';
import { fetchMoviesTrending } from '../services/api';
import { ErrorMessage } from '../components/ErrorMessage.styled';


const Home = () => {
  const [moviesTrending, setMoviesTrending] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const fetchMoviesTrending2 = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const {results}  = await fetchMoviesTrending();
        setMoviesTrending(results);
        
      } catch (error) {
        setError('Error, try reloading the page');
      } finally {
        setIsLoading(false);
      }
    };
    fetchMoviesTrending2();
  }, []);
  
   
  return (
    <main>
      <h1>Trending today</h1>
      <ul>
        {!isLoading && error && <ErrorMessage>{error}</ErrorMessage>}
        {isLoading && <Loader />}
        {!error &&
          moviesTrending?.map(movie => (
            <li key={movie.id}>
              <Link to={`/movies/${movie.id}`} state={{ from: location }}>
                {movie.title}
              </Link>
            </li>
          ))}
      </ul>
    </main>
  );
};

export default Home;
