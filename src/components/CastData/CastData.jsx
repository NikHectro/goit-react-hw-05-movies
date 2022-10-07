import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCast } from '../../services/api';
import noImage from '../../services/Images/noImage2.jpg';

const CastData = () => {
  const { movieId } = useParams();
  const [movieCast, setCast] = useState(null);

  useEffect(() => {
    const fetchCast = async () => {
      try {
        const castData = await getCast(movieId);
        // console.log('castData: ', castData.cast);

        setCast(castData.cast);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchCast(movieId);
  }, [movieId]);

  return (
    <div>
      <ul
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '15px',
          listStyleType: 'none',
        }}
      >
        {movieCast &&
          movieCast.map(actor => (
            <li
              key={actor.id}
              style={{ border: '2px solid black', width: '170px' }}
            >
              <img
                src={
                  actor.profile_path
                    ? `https://image.tmdb.org/t/p/w500${actor.profile_path}`
                    : noImage
                }
                alt={movieCast.name}
                width="150px"
              />
              <p>{actor.name}</p>
              <p>Character: {actor.character}</p>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default CastData;
