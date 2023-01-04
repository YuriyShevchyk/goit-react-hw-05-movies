import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from 'API/API';
import ReviewsList from './ReviewsList/ReviewsList';

export default function Reviews() {
  const [movieReviews, setMovieReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    getMovieReviews(movieId).then(setMovieReviews);
  }, [movieId]);

  if (!movieReviews) {
    return;
  }

  if (movieReviews.length === 0) {
    return <p>We don't have any reviews for this movie.</p>;
  }

  return <ReviewsList movieReviews={movieReviews} />;
}