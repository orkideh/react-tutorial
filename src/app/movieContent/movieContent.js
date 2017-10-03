import React, {Component} from 'react';
import './movieContent.scss';

export class MovieContent extends Component {
  render() {
    return (
      <div className="movie">
        <div className="movie__image-container">
          <img src="../../../assets/movie-cover.png" alt="cover"/>
        </div>
        <div className="movie__data">
          <h1 className="movie__header">
            Pulp Fiction
            <span className="movie__rate">4.1</span>
          </h1>
          <h3 className="movie__category">
            Oscar-winning Movies
          </h3>
          <h3>
            <span className="movie__year">
              1994
            </span>
            <span className="movie__duration">
              154 min
            </span>
          </h3>
          <div className="movie__description">
            Weaving together three stories featuring a burger-loving hit man, his philosophical partner and a washed-up boxer, Quentin Tarantino influenced a generation of filmmakers with this crime caper s stylized, over-the-top violence and dark comic spirit.
          </div>
          <div className="movie__director">
            Director: Quentin Tarantino
          </div>
          <div className="movie_cast">
            Cast: John Travolta, Samuel L. Jackson, Uma Thurman, Bruce Willis, Harvey Keitel, Tim Roth, Amanda Plummer, Ving Rhames, Eric Stoltz, Maria de Medeiros
          </div>
        </div>
      </div>
    );
  }
}
