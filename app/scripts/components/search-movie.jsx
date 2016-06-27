'use strict';

import React from 'react';

export default class SearchMovie extends React.Component {
  createCard(card, index) {
    var image = 'http://image.tmdb.org/t/p/w342//' + card.poster_path;
    return (
      <div key={index} className='col-md-2'>
        <a href={`/movie/${card.id}`}>
          <img src={image} className='img-responsive'/>
          <div>{card.title}</div>
        </a>
      </div>
    )
  }
  render() {
    let moviesArray = this.props.movies.slice(0, 6)
    let movies = moviesArray.map(this.createCard.bind(this))
    return(
      <div>
        {movies}
      </div>
    )
  }
}
