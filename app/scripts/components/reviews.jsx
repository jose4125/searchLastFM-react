'use strict';

import React from 'react';

export default class Review extends React.Component {
  createReview(review, index) {
    return (
      <blockquote key={index}>
        <p>{review.content}</p>
        <small><cite title="Source Title">{review.author}</cite></small>
      </blockquote>
    );
  }
  render() {
    let reviews = this.props.reviews.map(this.createReview.bind(this));
    return (
      <div>
        {reviews}
      </div>
    );
  }
}
