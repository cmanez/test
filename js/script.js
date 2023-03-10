"use strict";
//sss
let numberOfFilms;
function start(){
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

    while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)){
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
}

start();

const personalMovieDB = {
    

    count: numberOfFilms,
    movies: {

       
    },
    actors: {

    },
    genres: [],
    privat: false
};


console.log('test')

function remeberMyFilms(){
    for(let i=0; i<2; i++){
        const lastOfFilms = prompt('Один из просмотренных фильмов?', ''),
              lastRateOfFilms = prompt('На сколько вы его оцените?', ''); 
        if(lastOfFilms != null && lastRateOfFilms != null && lastOfFilms!= '' && lastRateOfFilms != '' && lastOfFilms.length < 50){
            console.log('done');
        }else{
            console.log('error');
            i--;
        }
        personalMovieDB.movies[lastOfFilms] = lastRateOfFilms;
        
    }
}

remeberMyFilms();

function detectPersonalLevel(){
    if(personalMovieDB.count < 10){
        alert('Просмотрено довольно мало фильмов')
    }else if(personalMovieDB.count <= 30){
        alert('Вы классический зритель')
    }else if(personalMovieDB.count > 30){
        alert('Вы киноман')
    }else{
        alert('Произошла ошибка')
    };
}

detectPersonalLevel();

function showMyDb(hidden){
    if (!hidden){
        console.log(personalMovieDB);
    };
};

showMyDb(personalMovieDB.privat);

function writeYourGenres(){
    for(let i = 1; i <= 3; i++){
        
        const mostLikedGenre = prompt(`Ваш любимый жанр под номером ${i}`);
        personalMovieDB.genres[i - 1] = mostLikedGenre;
    };
};

writeYourGenres();


console.log(personalMovieDB); 



