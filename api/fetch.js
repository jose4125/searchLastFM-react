'use strict';
import config from './movie-db.config';

export default class MovieDbFront {
  constructor(searchName, url, method) {
    this.searchName = searchName;
    this.url = url;
    this.method = method;
  }

  moviedb() {
    return fetch(this.url, {
      method: this.method
    }).then((response) => {
      return response.json().then((json) => {
        return json.results;
      });
    }).catch((err) => {
      // Error :(
    });
  }
}
