'use strict';

import React from 'react';
import SearchForm from './search-form.jsx';
import SearchMovie from './search-movie.jsx';
import Fetch from '../../../api/fetch';
import config from '../../../api/movie-db.config';

export default class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      searchMovies: []
    };
    this.typingTimer;
    this.doneTypingInterval = 500;
  }

  setSearchState(event) {
    var search = event.target.value;
    console.log('search', search);
    this.state.searchText = search;
    clearTimeout(this.typingTimer);
    if (search) {
      this.typingTimer = setTimeout(this.doneTyping.bind(this), this.doneTypingInterval);
    }else {
      return this.setState({
        searchText: '',
        searchMovies: []
      });
    }
    return this.setState({searchText: this.state.searchText});
  }

  doneTyping() {
    let searchName = this.state.searchText;
    let url = `${config.url}search/movie?query=${searchName}&${config.apiKey}`;
    var fetch = new Fetch(searchName, url, 'GET');
    var movies = fetch.moviedb();

    movies.then((data) => {
      this.setState({searchMovies: data});
    });
  }

  render() {
    return (
      <div className="jumbotron text-center clearfix">
        <SearchForm onChange={this.setSearchState.bind(this)} searchText={this.state.searchText}/>
        <SearchMovie movies={this.state.searchMovies}/>
      </div>
    );
  }

};
