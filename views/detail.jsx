'use strict';
import React from 'react';
import Search from '../app/scripts/components/search.jsx';
import Detail from '../app/scripts/components/detail.jsx';

export default class DetailPage extends React.Component{
  render() {
    return (
      <div className='container-fluid'>
        <Search/>
        <Detail movie={this.props.detail} similar={this.props.similar} reviews={this.props.reviews}/>
      </div>
    );
  }
}
