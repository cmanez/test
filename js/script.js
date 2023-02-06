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

if(personalMovieDB.count<10){
    alert('Просмотрено довольно мало фильмов')
}else if(personalMovieDB.count<=30){
    alert('Вы классический зритель')
}else if(personalMovieDB.count>30){
    alert('Вы киноман')
}else{
    alert('Произошла ошибка')
};

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





console.log(personalMovieDB); 



