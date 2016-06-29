'use strict';
import MovieDb from '../api/movie-db';

var genre = (req, res) => {
  let movies = new MovieDb('GET');
  let id = req.params.id;

  movies.getGenreMovies(id)
    .then(function(data) {
      return movies.getCategories(data);
    })
    .then(function(data) {
      res.render(req.url, data);
    });
}

export default genre;
