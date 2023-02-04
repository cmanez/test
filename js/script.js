"use strict";

const numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {

       
    },
    actors: {

    },
    genres: [],
    privat: false
};

const lastOfFilms = prompt('Один из просмотренных фильмов?', ''),
      lastRateOfFilms = prompt('На сколько вы его оцените?', '');

personalMovieDB.movies[lastOfFilms] = lastRateOfFilms;
console.log(personalMovieDB); 



