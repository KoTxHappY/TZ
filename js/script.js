'use strict';

const numberOfFilms = +prompt('сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    generes: [],
    privat: false
};

const a = prompt('Один из последних фильмов', ''),
      b = prompt('На сколько его оцениваете?', ''),
      c = prompt('Один из последних просмотренных фильмов', ''),
      d = prompt('На сколько его оцениваете?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);