let personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privet: false,
    start: function () {
        personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", '');
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", '');
        }

    },
    rememberMyFilms: function rememberMyFilms() {
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
        }
    },
    detectPersonalLevel: function detectPersonalLevel() {
        if (personalMovieDB.count < 10) {
            alert("Просмотрено довольно мало фильмов");
        } else if (personalMovieDB.count > 10 && personalMovieDB.count < 30) {
            alert("Вы классический зритель");
        } else if (personalMovieDB.count > 30) {
            alert("Вы киноман");
        } else {
            alert("Произошла ошибка");
        }
    },
    showMyDB: function (hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    },
    writeYourGenres: function () {

        for (let i = 1; i < 4; i++) {
            let genre = prompt(`Ваш любимый жанр под номером ${i}`, '');
            if (genre == '' || genre == null) {
                console.log('не корректные данные');
                i--;
            } else {
                personalMovieDB.genres.push(genre);
            }

        }
        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Любимый жанр ${ i+1 } - это  ${item}`);
        });

    },
    toggleVisibleMyDB: function () {
        if (personalMovieDB.privet) {
            personalMovieDB.privet = false;
        } else {
            personalMovieDB.privet = true;
        }
    }

};
// personalMovieDB.writeYourGenres(); 