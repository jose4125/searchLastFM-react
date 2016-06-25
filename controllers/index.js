'use strict';

import MovieDb from './movie-db';

var index = (req, res) => {
  let movies = new MovieDb('hola', 'GET');

  movies.getNowPlaying()
    .then(function(data) {
      return movies.getCategories(data, 'playing');
    })
    .then(function(data) {
      res.render(req.url, data);
    });

};

export default index;
