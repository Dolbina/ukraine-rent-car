import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';


import { fetchMoviesCast } from '../services/api';
const Cast = () => {
  const { movieId } = useParams();
  const [moviesCast, setMoviesCast] = useState([]);

  useEffect(() => {
    const fetchMoviesCast2 = async () => {
      try {
        const { cast } = await fetchMoviesCast(movieId);
        setMoviesCast(cast);
        console.log(cast);
      } catch (error) {
        console.log(error);
      }
    };
    fetchMoviesCast2();
  }, [movieId]);
  return (
    <section>
      {moviesCast.length > 0 ? (
        <ul>
          {moviesCast.map(actor => (
            <li key={actor.id}>
              {actor.profile_path ? (
                <img
                  src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`}
                  alt={`${actor.name} profile`}
                />
              ) : (
                <img
                  src={`https://via.placeholder.com/200x300?text=No+Image`}
                  alt={`${actor.name} profile`}
                />
              )}
              <p>{actor.name}</p>
              <p>Character: {actor.character}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No cast information available</p>
      )}
    </section>
  );
};

export default Cast;
