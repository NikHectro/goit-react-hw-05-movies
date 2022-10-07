import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getReviews } from '../../services/api';

const ReviewsData = () => {
  const { movieId } = useParams();
  const [movieReviews, setReviews] = useState('');
  //   const location = useLocation();

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const reviewsData = await getReviews(movieId);
        // console.log('reviewsData: ', reviewsData.results);

        setReviews(reviewsData.results);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchReviews(movieId);
  }, [movieId]);

  return (
    <div>
      <h5>REVIEWS</h5>
      <ul>
        {movieReviews.length !== 0 ? (
          movieReviews.map(review => (
            <li key={review.id}>
              <h6>{review.author}</h6>
              <p>{review.content}</p>
            </li>
          ))
        ) : (
          <p>No reviews yet</p>
        )}
      </ul>
    </div>
  );
};

export default ReviewsData;
