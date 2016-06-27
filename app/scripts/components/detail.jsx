'use strict';
import React from 'react';
import Tags from './tags.jsx';
import SearchMovie from './search-movie.jsx';
import Reviews from './reviews.jsx';

export default class Detail extends React.Component {

  render() {
    var image = 'http://image.tmdb.org/t/p/w342//' + this.props.movie.poster_path;
    return (
      <div>
        <div className='col-md-3'>
          <img className='pull-left img-responsive' src={image} alt={this.props.movie.original_title} />
        </div>
        <div className='col-md-9'>
          <h2>{this.props.movie.title}</h2>
          <p>{this.props.movie.tagline}</p>
          <hr/>
          <p>Calificacion: {this.props.movie.vote_average} / Total votos: {this.props.movie.vote_count}</p>
          <hr/>
          <h4>Descripción</h4>
          <p>{this.props.movie.overview}</p>
          <Tags genres={this.props.movie.genres}/>
          <hr/>
          <div className='clearfix'>
            <h4>Peliculas Relacionadas</h4>
            <SearchMovie movies={this.props.similar}/>
          </div>
          <hr/>
          <div>
            <h4>Comentarios</h4>
            <Reviews reviews={this.props.reviews}/>
          </div>
        </div>
      </div>
    )
  }
}
