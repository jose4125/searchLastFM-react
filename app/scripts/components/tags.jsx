'use strict';
import React from 'react';

export default class Tag extends React.Component {

  createTag(tag, index) {
    return(
      <a href={`/genre/${tag.id}/movies`}>
        <span key={index} className="label label-default">{tag.name}</span>
      </a>
    )
  }
  render() {
    let tags = this.props.genres.map(this.createTag.bind(this));
    return (
      <div>
        {tags}
      </div>
    )
  }
}
