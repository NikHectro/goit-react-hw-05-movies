import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const MoviesList = ({ movies, state }) => {
  return (
    <ul>
      {movies &&
        movies.map(movie => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`} state={{ backPage: state }}>
              {movie.title}
            </Link>
          </li>
        ))}
    </ul>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};

export default MoviesList;
