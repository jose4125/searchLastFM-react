'use strict';
import config from './movie-db.config';

export function http(url, method) {
  return fetch(url, {
    method: method
  }).then((response) => {
    return response.json();
  }).catch((err) => {
    // Error :(
  });
}
