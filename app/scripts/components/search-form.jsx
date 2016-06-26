'use strict';

import React from 'react';

export default class SearchForm extends React.Component {
  render() {
    return (
      <form className="navbar-form" role="search">
        <div className="form-group">
          <input type="text" name="moviename" className="form-control" placeholder="Search Movies" onChange={this.props.onChange} value={this.props.searchText}/>
        </div>
        text: {this.props.searchText}
      </form>
    );
  }

};
