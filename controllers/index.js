'use strict';

import request from 'request';
import q from 'q';

function getNowPlaying() {
  let deferred = q.defer();
  let options = {
    method: 'GET',
    url: 'http://api.themoviedb.org/3/movie/now_playing?api_key=dcb242a0182017bf4f403f0386d3e7cc',
    headers: {
      'accept': 'application/json'
    }
  };
  request(options, function(error, response, body) {
    let data = JSON.parse(body).results;
    // console.log('response', data.results);
    deferred.resolve(data);
  });
  return deferred.promise;
}
function getCategories(dataPlaying) {
  let deferred = q.defer();
  let options = {
    method: 'GET',
    url: 'http://api.themoviedb.org/3/genre/movie/list?api_key=dcb242a0182017bf4f403f0386d3e7cc',
    headers: {
      'accept': 'application/json'
    }
  };
  request(options, function(error, response, body) {
    let dataView = {};
    dataView.categories = JSON.parse(body).genres;
    dataView.playing = dataPlaying;
    deferred.resolve(dataView);
  });
  return deferred.promise;
}

var index = (req, res) => {
  getNowPlaying()
    .then(function(data) {
      return getCategories(data);
    })
    .then(function(data) {
      res.render(req.url, data);
    });

};

export default index;
