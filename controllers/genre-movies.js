'use strict';
import MovieDb from '../api/movie-db';

var genre = (req, res) => {
  let movies = new MovieDb('GET');
  let id = req.params.id;

  movies.getGenreMovies(id)
    .then((data) => {
      return movies.getCategories(data);
    })
    .then((data) => {
      res.render(req.url, data);
    });
}

export default genre;
