'use strict';
import MovieDb from './movie-db';

var genre = (req, res) => {
  let movies = new MovieDb('hola', 'GET');
  let id = req.params.id;

  movies.getGenreMovies(id)
    .then(function(data) {
      return movies.getCategories(data, 'genre');
    })
    .then(function(data) {
      res.render(req.url, data);
    });
}

export default genre;