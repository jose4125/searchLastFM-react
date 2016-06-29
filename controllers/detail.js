'use strict';

import MovieDb from '../api/movie-db';

var detail = (req, res) => {
  let movies = new MovieDb('GET');
  let id = req.params.id;

  movies.getDetail(id)
    .then(function(data) {
      return movies.getCategories(data);
    })
    .then(function(data) {
      return movies.getSimilarMovies(id, data);
    })
    .then(function(data) {
      return movies.getMovieReviews(id, data);
    })
    .then(function(data) {
      res.render(req.url, data);
    });

};

export default detail;
