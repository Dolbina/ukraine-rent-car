import { useState, useEffect, Suspense } from 'react';
import { useLocation, useParams, Link, Outlet } from 'react-router-dom';
import { BackLink } from '../../components/BackLink';

import { fetchMoviesById } from '../../services/api';
import { Title, Wrap, Img } from './MoviesDetails.styled';

const MoviesDetails = () => {
  const { movieId } = useParams();
  const location = useLocation();
  const [detailsMovies, setDetailsMovies] = useState({});

  const backLinkHref = location.state?.from ?? '/';
  useEffect(() => {
    const detailsMoviesById2 = async movieId => {
      try {
        const detailsMoviesId = await fetchMoviesById(movieId);
        setDetailsMovies(detailsMoviesId);
      } catch (error) {
        console.log(error);
      }
    };
    detailsMoviesById2(movieId);
  }, [movieId]);

  const date = () => {
    if (detailsMovies.release_date)
      return detailsMovies.release_date.split('-')[0];
  };
  const score = () => {
    if (detailsMovies.vote_average)
    return detailsMovies.vote_average.toFixed(1);
}


  console.log(detailsMovies);
  return (
    <main>
      <BackLink to={backLinkHref}>Go back</BackLink>
      <Wrap>
        <div>
          <Img
            src={
              detailsMovies.poster_path
                ? `https://image.tmdb.org/t/p/w300/${detailsMovies.poster_path}`
                : `https://via.placeholder.com/300x400?text=No+Poster`
            }
            alt={detailsMovies.title}
          />
        </div>
        <div>
          <Title>
            {detailsMovies.title} ({date()})
          </Title>

          <p>User score: {score()}</p>

          {detailsMovies.overview && (
            <>
              <p>
                <b>Overview</b>
              </p>
              <p>{detailsMovies.overview}</p>
            </>
          )}

          {detailsMovies.genres && detailsMovies.genres.length > 0 && (
            <p>
              <b>Genres: </b>
              <br />
              {detailsMovies.genres.map(genre => genre.name).join(', ')}
            </p>
          )}
        </div>
      </Wrap>
      <p>
        <b>Additional information</b>
      </p>
      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
      <Suspense fallback={<div>Loading subpage...</div>}>
        <Outlet />
      </Suspense>
    </main>
  );
};

export default MoviesDetails;
