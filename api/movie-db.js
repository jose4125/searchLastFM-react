'use strict';
import request from 'request';
import config from './movie-db.config';

export default class MovieDb {
  constructor(method) {
    this.method = method;
    this.data = {};
  }

  getCategories(dataContent) {
    return new Promise((resolve, reject) => {
      let options = {
        method: this.method,
        url: `${config.url}genre/movie/list${config.apiKey}`,
        headers: config.headers
      };
      request(options, (error, response, body) => {
        dataContent.categories = JSON.parse(body).genres;
        resolve(dataContent);
      });
    });
  }

  getNowPlaying() {
    return new Promise((resolve, reject) => {
      let options = {
        method: this.method,
        url: `${config.url}movie/now_playing${config.apiKey}`,
        headers: config.headers
      };
      request(options, (error, response, body) => {
        this.data.playing = JSON.parse(body).results;
        resolve(this.data);
      });
    });
  }
  // getNowPlaying() {
  //   return new Promise((resolve, reject) => {
  //     let options = {
  //       method: this.method,
  //       url: `${config.url}movie/now_playing${config.apiKey}`,
  //       headers: config.headers
  //     };
  //     request(options, function(error, response, body) {
  //       this.data.playing = JSON.parse(body).results;
  //       resolve(this.data);
  //     });
  //   });
  // }

  getGenreMovies(id) {
    return new Promise((resolve, reject) => {
      let options = {
        method: this.method,
        url: `${config.url}genre/${id}/movies${config.apiKey}`,
        headers: config.headers
      };
      request(options, (error, response, body) => {
        this.data.genre = JSON.parse(body).results;
        resolve(this.data);
      });
    });
  }

  getDetail(id) {
    return new Promise((resolve, reject) => {
      let options = {
        method: this.method,
        url: `${config.url}movie/${id}${config.apiKey}`,
        headers: config.headers
      };
      request(options, (error, response, body) => {
        this.data.detail = JSON.parse(body);
        resolve(this.data);
      });
    });
  }

  getSimilarMovies(id, dataContent) {
    return new Promise((resolve, reject) => {
      let options = {
        method: this.method,
        url: `${config.url}movie/${id}/similar${config.apiKey}`,
        headers: config.headers
      };
      request(options, (error, response, body) => {
        dataContent.similar = JSON.parse(body).results.slice(0,4);
        resolve(dataContent);
      });
    });
  }

  getMovieReviews(id, dataContent) {
    return new Promise((resolve, reject) => {
      let options = {
        method: this.method,
        url: `${config.url}movie/${id}/reviews${config.apiKey}`,
        headers: config.headers
      };
      request(options, (error, response, body) => {
        dataContent.reviews = JSON.parse(body).results;
        resolve(dataContent);
      });
    });
  }
}
