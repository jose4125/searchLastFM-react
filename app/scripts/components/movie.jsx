import React from 'react';
import Tags from './tags';

export default class extends React.Component {
  mapGenre(ids) {
    return ids.map((id) => {
      return this.props.genres[id];
    })
  }
  createCard(card, index) {
    let genreNames = this.mapGenre(card.genre_ids);
    let image = 'http://image.tmdb.org/t/p/w342//' + card.poster_path;
    let overview = card.overview ? card.overview.slice(0, 140) + '...' : '';
    return (
      <div className="col-sm-6 col-md-3" key={index}>
        <a className='movie-link' href={`/movie/${card.id}`}>
          <div className="thumbnail pb">
            <img className='movie-img' src={image} alt={card.original_title} />
            <div className="caption">
              <h3 className='movie-title'>{card.title}</h3>
              <p>{overview}</p>
              <Tags genres={genreNames}/>
            </div>
          </div>
        </a>
      </div>
    );
  }
  render() {
    var movieCards = this.props.movies.map(this.createCard.bind(this));
    return (
      <div>
        {movieCards}
      </div>
    );
  }
}
