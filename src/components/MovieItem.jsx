import React, { useState } from 'react';
import { SocialIcon } from 'react-social-icons/component'
import 'react-social-icons/instagram'
import 'react-social-icons/linkedin'
import 'react-social-icons/github'
const MovieItem = (props) => {
  const [hoveredMovie, setHoveredMovie] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const handleMouseEnter = (movie) => {
    setHoveredMovie(movie);
  };

  const handleMouseLeave = () => {
    setHoveredMovie(null);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredMovies = props.results.filter(movie =>
    movie.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
    <div className="header">
    <h1>REACT MOVIE APP</h1>
    <div className='socialIcon'>
    <SocialIcon className="item" url="https://github.com/Muratmms" />
    <SocialIcon className="item" url="https://www.linkedin.com/in/murat-memi%C5%9F-652888214/" />
    <SocialIcon className="item" url="https://www.instagram.com/muratmms_/" />
    </div>
    </div>
    <div className='search'>
    <div className='search-title'>Search</div>
    <input className='search-input'
          type="text"
          value={searchTerm}
          onChange={handleSearchChange}
        />

    </div>
    <div className="movieContainer">
      {filteredMovies.slice(0, 20).map((movie) => (
        <div
          key={movie.id}
          className='movieCard'
          onMouseEnter={() => handleMouseEnter(movie)}
          onMouseLeave={handleMouseLeave}
        >
          <h3 className='title'>{movie.title}</h3>
          <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.original_title} width={300} height={400} />

          {hoveredMovie === movie && (
            <div className="tooltip">
              <ul>
                <li><strong>Overview:</strong> {movie.overview}</li>
                <li><strong>Release Date:</strong> {movie.release_date}</li>
                <li><strong>Popularity:</strong> {movie.popularity}</li>
              </ul>
            </div>
          )}
        </div>
      ))}
    </div>
    <div className="footer">
    <p>© 2023Murat™. All Rights Reserved.</p>
    </div>
    </div>
  );
};

export default MovieItem;
