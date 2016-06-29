'use strict';

import React from 'react';
import SearchForm from './search-form.jsx';
import SearchMovie from './search-movie.jsx';

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
    var self = this;

    fetch(`http://api.themoviedb.org/3/search/movie?query=${searchName}&api_key=dcb242a0182017bf4f403f0386d3e7cc`, {
      method: 'get'
    }).then(function(response) {
      return response.json().then(function(json) {
        return self.setState({searchMovies: json.results});
      });
    }).catch(function(err) {
      // Error :(
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
