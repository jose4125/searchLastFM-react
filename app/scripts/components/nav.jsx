import React from 'react';

export default class Nav extends React.Component{
  render() {
    var createCategory = function(categry, index) {
      var activeClass = (index === 0) ? 'active' : '';
      return(
        <li className={activeClass} key={index}>
          <a href={`/genre/${categry.id}/movies`}>{categry.name}</a>
        </li>
      )
    }

    var linkItems = this.props.categories.map(createCategory.bind(this))

    return(
      <nav className="navbar navbar-inverse">
        <div className="container-fluid">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-2">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="#">
              <i className="glyphicon glyphicon-expand"></i>
            </a>
          </div>
          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-2">
            <ul className="nav navbar-nav">
              {linkItems}
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
