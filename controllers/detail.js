'use strict';

import MovieDb from './movie-db';

var detail = (req, res) => {
  let movies = new MovieDb('hola', 'GET');
  let id = req.params.id;

  movies.getDetail(id)
    .then(function(data) {
      return movies.getCategories(data, 'detail');
    })
    .then(function(data) {
      console.log('data', data);
      res.render(req.url, data);
    });

};

export default detail;
