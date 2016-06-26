import React from 'react';
import Head from './partials/head.jsx';
import Scripts from './partials/scripts.jsx';
import Nav from '../app/scripts/components/nav.jsx';

export default class Index extends React.Component{

  render() {
    return (
        <html lang="es">
        <Head />
        <body>
          <Nav categories={this.props.categories}/>
          <section id="container" className="container-fluid">
            {this.props.children}
          </section>
          <Scripts />
        </body>
      </html>
    )
  }
}
