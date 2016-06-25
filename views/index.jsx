import React from 'react';
import Head from './partials/head.jsx';
import Scripts from './partials/scripts.jsx';
import Nav from '../app/scripts/components/nav.jsx';

export default class Index extends React.Component{
  render(){
    return (
        <html lang="es">
        <Head />
        <body>
          <Nav categories={this.props.categories}/>
          <div className="jumbotron text-center">
          <h1>Search Movies</h1>
          <p>This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
          <form className="navbar-form" role="search">
            <div className="form-group">
              <input type="text" className="form-control" placeholder="Search" />
            </div>
            <button type="submit" className="btn btn-default">Submit</button>
          </form>
          </div>
          <section id="container" className="container-fluid">
            {this.props.children}
          </section>
          <Scripts />
        </body>
      </html>
    )
  }
}
