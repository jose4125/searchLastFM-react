import React from 'react';
import Head from './partials/head';
import Scripts from './partials/scripts';
import Nav from './partials/nav';

export default class Index extends React.Component{
  render(){
    return (
        <html lang="es">
        <Head />
        <body>
          <Nav />
          <div className="jumbotron">
          <h1>Search Movies</h1>
          <p>This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
          </div>
          <header>
            <div>
              <figure>
                <img src="images/logo.png" width="220"/>
              </figure>
              <a href="https://github.com/deivijt/pokedex-react" target="_blank">
                <img src="images/repo.png" width="40"/>
              </a>
            </div>
          </header>
          <section id="container">
            {this.props.categories[1].name}
          </section>
          <Scripts />
        </body>
      </html>
    )
  }
}
