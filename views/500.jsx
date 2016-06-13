'use strict';

import React from 'react';

export default class page500 extends React.Component{
  render() {
    return (
      <div>
        <h1>Internal Service Error (500)</h1>
        <h3>Error message: {this.props.err.message}</h3>
        <code>{this.props.err.stack}</code>
      </div>
    );
  }
};
