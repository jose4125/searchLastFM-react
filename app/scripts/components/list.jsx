import React from 'react';
import Search from './search.jsx';

export default class extends React.Component {
  render() {

    var createCard = function(card, index) {
      var image = 'http://image.tmdb.org/t/p/w342//' + card.poster_path;
      return (
        <div className="col-sm-6 col-md-3" key={index}>
          <a href={`/movie/${card.id}`}>
            <div className="thumbnail">
              <img src={image} alt={card.original_title} />
              <div className="caption">
                <h3>{card.title}</h3>
                <p>{card.overview.slice(0, 140)}...</p>
                <tags category-name={card.genre_ids} />
              </div>
            </div>
            </a>
        </div>
      )
    }
    //console.log('props', this.props)
    var movies = this.props.playing || this.props.genre;
    var movieCards = movies.map(createCard.bind(this))
    return (
      <div>
        <Search/>
        <h2>now playing</h2>
        {movieCards}
      </div>
    );
  }
}
