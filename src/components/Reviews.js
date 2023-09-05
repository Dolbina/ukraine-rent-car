import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMoviesReviews } from '../services/api';

const Reviews = () => {
const { movieId } = useParams();
const [moviesReviews, setMoviesReviews] = useState([]);

  useEffect(() => {
    const fetchMoviesReviews2 = async () => {
      try {
        const { results  } = await fetchMoviesReviews(movieId);
        setMoviesReviews(results );

      } catch (error) {
        console.log(error);
      }
    };
    fetchMoviesReviews2();
  }, [movieId]);
  
  return (
    <section>
      <div>
        {moviesReviews.length > 0 ? (
          <ul>
            {moviesReviews.map(review => (
              <li key={review.id}>
               
                <h2>Author: {review.author}</h2>
                <p>{review.content}</p>
                  </li>
                ))}
          </ul>):(<p>No reviews information available</p>)
}
                      </div>
    </section>
  );
};

export default Reviews;
