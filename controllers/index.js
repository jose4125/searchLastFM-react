'use strict';

import MovieDb from '../api/movie-db';

var index = (req, res) => {
  let movies = new MovieDb('GET');

  movies.getNowPlaying()
    .then((data) => {
      return movies.getCategories(data);
    })
    .then((data) => {
      res.render(req.url, data);
    });

};

export default index;
