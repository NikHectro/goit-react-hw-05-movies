import { useEffect, useState, Suspense } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { getMovieDetailes } from '../../services/api';

const MovieData = () => {
  const { movieId } = useParams();
  const [movieDesc, setMovieDesc] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const fetchMovieData = async () => {
      try {
        const movieData = await getMovieDetailes(movieId);
        setMovieDesc(movieData);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchMovieData(movieId);
  }, [movieId]);

  const backLinkHref = location.state?.backPage ?? '/';

  return (
    <div>
      <hr />
      <Link to={backLinkHref}>
        <button type="button" style={{}}>
          Go back
        </button>
      </Link>

      {movieDesc && (
        <div style={{ display: 'flex', margin: 16 }}>
          <img
            width="340px"
            src={`https://image.tmdb.org/t/p/w500${movieDesc.poster_path}`}
            alt={movieDesc.original_title}
            style={{ marginRight: 16 }}
          />
          <div>
            <h2>
              {movieDesc.title} ({movieDesc.release_date.slice(0, 4)})
            </h2>
            <p>User score: {(movieDesc.vote_average * 10).toFixed(0) + '%'}</p>
            <h3>Overview</h3>
            <p>{movieDesc.overview}</p>
            <h4>Genres</h4>
            <ul>
              {movieDesc.genres.map(genre => (
                <li key={genre.id}>{genre.name}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
      <hr />
      <div>
        <h5>Additional information</h5>
        <ul>
          <li>
            <Link to="cast" state={location.state}>
              {/* {console.log('location.state: ', location.state)} */}
              Cast
            </Link>
          </li>
          <li>
            <Link to="reviews" state={location.state}>
              Reviews
            </Link>
          </li>
        </ul>
        <hr />
        <Suspense
          fallback={
            <h2>Please, wait a second more... minnions are working!</h2>
          }
        >
          <Outlet />
        </Suspense>
      </div>
    </div>
  );
};

export default MovieData;
