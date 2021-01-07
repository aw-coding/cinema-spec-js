const Cinema = function (films) {
  this.films = films;
};

Cinema.prototype.getFilmTitles = function () {
  return this.films.map ( (film) => {
      return film.title;
  });

};


Cinema.prototype.findFilmByTitle = function (title) {
  const foundFilm = this.films.filter((film) => {
    return film.title === title
  })
      //if (film.title === 'Black Panther');
      return foundFilm
}
//return foundfilm}


Cinema.prototype.findFilmsByGenre = function (genre) {
  const foundFilm = this.films.filter((film) => {
    return film.genre === genre
  })
      return foundFilm
}

Cinema.prototype.findFilmsByYear = function (year) {
  const foundFilm = this.films.filter((film) => {
    return film.year === year;
  })
  return foundFilm
}

module.exports = Cinema;
