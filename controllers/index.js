'use strict';

import request from 'request';

var index = (req, res) => {
  let options = {
    method: 'GET',
    url: 'http://api.themoviedb.org/3/movie/now_playing?api_key=dcb242a0182017bf4f403f0386d3e7cc',
    headers: {
      'accept': 'application/json'
    }
  };
  request(options, function(error, response, body) {
    let data = JSON.parse(body);
    console.log('response', data.results);
    res.render('index', data.results);
  });

};

module.exports = index;
