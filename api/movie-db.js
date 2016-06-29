'use strict';
import request from 'request';
import q from 'q';
import config from './movie-db.config';

export default class MovieDb {
  constructor(method) {
    this.method = method;
    this.data = {};
  }

  getCategories(dataContent) {
    let deferred = q.defer();
    let options = {
      method: this.method,
      url: `${config.url}genre/movie/list${config.apiKey}`,
      headers: config.headers
    };
    request(options, function(error, response, body) {
      dataContent.categories = JSON.parse(body).genres;
      deferred.resolve(dataContent);
    });
    return deferred.promise;
  }

  getNowPlaying() {
    let deferred = q.defer();
    let options = {
      method: this.method,
      url: `${config.url}movie/now_playing${config.apiKey}`,
      headers: config.headers
    };
    request(options, function(error, response, body) {
      this.data.playing = JSON.parse(body).results;
      deferred.resolve(this.data);
    }.bind(this));
    return deferred.promise;
  }

  getGenreMovies(id) {
    let deferred = q.defer();
    let options = {
      method: this.method,
      url: `${config.url}genre/${id}/movies${config.apiKey}`,
      headers: config.headers
    };
    request(options, function(error, response, body) {
      this.data.genre = JSON.parse(body).results;
      deferred.resolve(this.data);
    }.bind(this));
    return deferred.promise;
  }

  getDetail(id) {
    let deferred = q.defer();
    let options = {
      method: this.method,
      url: `${config.url}movie/${id}${config.apiKey}`,
      headers: config.headers
    };
    request(options, function(error, response, body) {
      this.data.detail = JSON.parse(body);
      deferred.resolve(this.data);
    }.bind(this));
    return deferred.promise;
  }

  getSimilarMovies(id, dataContent) {
    let deferred = q.defer();
    let options = {
      method: this.method,
      url: `${config.url}movie/${id}/similar${config.apiKey}`,
      headers: config.headers
    };
    request(options, function(error, response, body) {
      dataContent.similar = JSON.parse(body).results.slice(0,4);
      deferred.resolve(dataContent);
    });

    return deferred.promise;
  }

  getMovieReviews(id, dataContent) {
    let deferred = q.defer();
    let options = {
      method: this.method,
      url: `${config.url}movie/${id}/reviews${config.apiKey}`,
      headers: config.headers
    };
    request(options, function(error, response, body) {
      dataContent.reviews = JSON.parse(body).results;
      deferred.resolve(dataContent);
    });

    return deferred.promise;
  }
}
