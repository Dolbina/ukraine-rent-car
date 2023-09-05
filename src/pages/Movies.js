import { useLocation, useSearchParams, Link } from 'react-router-dom';

import { SearchBox } from '../components/SearchBox/SearchBox';
import { ErrorMessage } from 'components/ErrorMessage.styled';
import {searchMovies} from '../services/api'
import { useEffect, useState } from 'react';

 const Movies = () => {
   const [searchParams, setSearchParams] = useSearchParams();
   const [dataMovies, setDataMovies] = useState([]);
   const [error, setError] = useState(null);
   const location = useLocation();

   useEffect(() => {
     const movieName = searchParams.get('query') ?? '';
     if (!movieName) return;

     const searchMovies2 = async () => {
       try {
         const { results } = await searchMovies(movieName);

         if (results.length === 0) {
           setError(
             'Sorry, there are no movie matching your search query. Please try again.'
           );
         } else {
           
           setDataMovies(results);
           setError(null);
         }
       } catch (error) {
         setError('Error, try reloading the page');
         setDataMovies([]);
       }
     };
     searchMovies2();
   }, [searchParams]);
   
   const handleSubmit = value => {
     setSearchParams({ query: value.title.trim() });
   };
   
 console.log(error);
   return (
     <main>
       <SearchBox onSubmit={handleSubmit} />
       {error && <ErrorMessage>{error}</ErrorMessage>}
       <ul>
         {dataMovies.map(dataMovie => (
           <li key={dataMovie.id}>
             <Link to={`/movies/${dataMovie.id}`} state={{ from: location }}>
               {dataMovie.title}
             </Link>
           </li>
         ))}
       </ul>
     </main>
   );
 };

export default Movies;