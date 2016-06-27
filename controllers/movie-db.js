'use strict';
import request from 'request';
import q from 'q';

export default class MovieDb {
  constructor(url, method) {
    this.url = url;
    this.method = method;
  }

  getCategories(dataContent, keyName) {
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
      dataView[keyName] = dataContent;
      deferred.resolve(dataView);
    });
    return deferred.promise;
  }

  getNowPlaying() {
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

  getGenreMovies(id) {
    let deferred = q.defer();
    let options = {
      method: 'GET',
      url: `http://api.themoviedb.org/3/genre/${id}/movies?api_key=dcb242a0182017bf4f403f0386d3e7cc`,
      headers: {
        'accept': 'application/json'
      }
    };
    request(options, function(error, response, body) {
      let data = JSON.parse(body).results;
      deferred.resolve(data);
    });
    return deferred.promise;
  }

  getDetail(id) {
    let deferred = q.defer();
    let options = {
      method: this.method,
      url: `http://api.themoviedb.org/3/movie/${id}?api_key=dcb242a0182017bf4f403f0386d3e7cc`,
      headers: {
        'accept': 'application/json'
      }
    };
    request(options, function(error, response, body) {
      let data = JSON.parse(body);
      deferred.resolve(data);
    });
    return deferred.promise;
  }

  getSimilarMovies(id, dataContent) {
    let deferred = q.defer();
    let options = {
      method: this.method,
      url: `http://api.themoviedb.org/3/movie/${id}/similar?api_key=dcb242a0182017bf4f403f0386d3e7cc`,
      headers: {
        'accept': 'application/json'
      }
    };
    request(options, function(error, response, body) {
      console.log('results ======', JSON.parse(body).results)
      dataContent.similar = JSON.parse(body).results.slice(0,4);
      deferred.resolve(dataContent);
    });

    return deferred.promise;
  }

  getMovieReviews(id, dataContent) {
    let deferred = q.defer();
    let options = {
      method: this.method,
      url: `http://api.themoviedb.org/3/movie/${id}/reviews?api_key=dcb242a0182017bf4f403f0386d3e7cc`,
      headers: {
        'accept': 'application/json'
      }
    };
    request(options, function(error, response, body) {
      console.log('results ======', JSON.parse(body).results)
      dataContent.reviews = JSON.parse(body).results;
      deferred.resolve(dataContent);
    });

    return deferred.promise;
  }
}
