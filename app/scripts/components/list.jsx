import React from 'react';
import Search from './search.jsx';
import Movie from './movie.jsx';

export default class extends React.Component {

  genresNames() {
    let genres = {}
    this.props.categories.forEach((category, index) => {
      genres[category.id] = {
        name: category.name,
        id: category.id
      }
    });
    return genres;
  }
  render() {
    let genresNames = this.genresNames();
    var movies = this.props.playing || this.props.genre;
    return (
      <div>
        <Search/>
        <h2>now playing</h2>
        <Movie movies={movies} genres={genresNames}/>
      </div>
    );
  }
}
