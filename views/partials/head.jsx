import React from 'react';

export default class Head extends React.Component {
  render() {
    return(
      <head>
        <meta charser="utf-8" />
        <title>Movie Search Gallery</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <link rel="stylesheet" href="/styles/bootstrap.css"/>
        <link rel="stylesheet" href="/styles/styles.css"/>
      </head>
    );
  }
}
