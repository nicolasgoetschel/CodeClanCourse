const Cinema = function (films) {
  this.films = films;
};

Cinema.prototype.getFilmTitles = function () {
  return this.films.map(film => film.title);
};

Cinema.prototype.findByTitle = function (title) {
  return this.films.find(film => film.title === title);
};

Cinema.prototype.filterFilmsByGenre = function (genre) {
  return this.films.filter(film => film.genre === genre);
};

Cinema.prototype.checkFilmsFromYear = function (year) {
  return this.films.some(film => film.year === year);
};

Cinema.prototype.checkAllFilmsOverLength = function (length) {
  return this.films.every(film => film.length > length);
};

Cinema.prototype.calculateTotalRunningTime = function () {
  return this.films.reduce((total, film) => total + film.length, 0);
};

module.exports = Cinema;
