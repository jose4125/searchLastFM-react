'use strict';
import React from 'react';
import Search from '../app/scripts/components/search.jsx';

export default class Detail extends React.Component{
  render() {
    //Todo categories, similar, reviews
    var image = 'http://image.tmdb.org/t/p/w342//' + this.props.detail.poster_path;
    return(
      <div className='container-fluid'>
        <Search/>
        <div className='col-md-3'>
          <img className='pull-left img-responsive' src={image} alt={this.props.detail.original_title} />
        </div>
        <div className='col-md-9'>
          <h2>{this.props.detail.title}</h2>
          <p>{this.props.detail.tagline}</p>
          <hr/>
          <p>Calificacion: {this.props.detail.vote_average} / Total votos: {this.props.detail.vote_count}</p>
          <hr/>
          <h4>Descripción</h4>
          <p>{this.props.detail.overview}</p>
          <hr/>
          <h4>Peliculas Relacionadas</h4>
        </div>
      </div>
    )
  }
}
