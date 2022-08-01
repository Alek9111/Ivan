let numberOfFilms;

function start() {
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", '');
    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", '');
    }
    //personalMovieDB.count = numberOfFilms;
}
start();
let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privet: false
};

function rememberMyFilms() {
    for (let i = 0; i <= 1; i++) {
        let lastFilm = prompt("Укажи последний фильм", "");
        if ((lastFilm.length > 50) || (lastFilm == false)) {
            i--;
            continue;
        }
        let grade = prompt("Какая оценка", "");
        if (grade == false) {
            i--;
            continue;
        }
        personalMovieDB.movies[lastFilm] = grade;
    };
}
rememberMyFilms();

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        alert("Просмотрено довольно мало фильмов");
    } else if (personalMovieDB.count > 10 && personalMovieDB.count < 30) {
        alert("Вы классический зритель");
    } else if (personalMovieDB.count > 30) {
        alert("Вы киноман");
    } else {
        alert("Произошла ошибка");
    }
}
detectPersonalLevel();


function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}
showMyDB(personalMovieDB.privet);

function writeYourGenres() {

    for (let i = 1; i < 4; i++) {
        personalMovieDB.genres.push(prompt(`Ваш любимый жанр под номером ${i}`, ''));
    }
 
    console.log(personalMovieDB);
}

writeYourGenres();