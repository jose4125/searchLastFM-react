'use strict';

import React from 'react';

export default class page404 extends React.Component {
  render() {
    return (
      <h1>URL: {this.props.location.pathname} - Not Found(404)</h1>
    );
  }
};
