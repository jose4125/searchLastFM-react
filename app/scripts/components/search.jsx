'use strict';

import React from 'react';
import SearchForm from './search-form.jsx';

export default class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: ''
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
    }
    return this.setState({searchText: this.state.searchText});
  }

  doneTyping() {
    console.log('search', this.state.searchText);
    let searchName = this.state.searchText;

    fetch(`http://api.themoviedb.org/3/search/movie?query=${searchName}&api_key=dcb242a0182017bf4f403f0386d3e7cc`, {
      method: 'get'
    }).then(function(response) {
      console.log('response', response)
    }).catch(function(err) {
      // Error :(
    });
  }

  render() {
    return (
      <div className="jumbotron text-center">
        <SearchForm onChange={this.setSearchState.bind(this)} searchText={this.state.searchText}/>
      </div>
    );
  }

};
