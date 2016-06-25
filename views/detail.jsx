'use strict';
import React from 'react';

export default class Detail extends React.Component{
  render() {
    var image = 'http://image.tmdb.org/t/p/w342//' + this.props.detail.poster_path;
    return(
      <div>
        <img src={image} alt={this.props.detail.original_title} />
        <h2>{this.props.detail.title}</h2>
        <p>votes: {this.props.detail.vote_average} / {this.props.detail.vote_count}</p>
        <p>{this.props.detail.overview}</p>
      </div>
    )
  }
}
