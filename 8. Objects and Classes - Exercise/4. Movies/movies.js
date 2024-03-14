/* 
Write a function that stores information about movies inside an array. 
The movie's object info must be name, director, and date. You can receive several types of input:
•	"addMovie {movie name}" – add the movie
•	"{movie name} directedBy {director}" – check if the movie exists and then add the director
•	"{movie name} onDate {date}" – check if the movie exists and then add the date

At the end print all the movies that have all the info (if the movie has no director, name, or date, don’t print it) in JSON format.
*/

function solve(stringArray) {

    const movies = [];
    const addMovieCommand = "addMovie";
    const directedByCommand = "directedBy";
    const onDateCommand = "onDate";

    for (const row of stringArray) {

        if(row.includes(addMovieCommand)){
            const movieName = row.substring(addMovieCommand.length + 1);

            const movie = {
                name: movieName
            };

            movies.push(movie);

        } else if (row.includes(directedByCommand)){
            const [movieName, director] = row.split(` ${directedByCommand} `);
            const movie = movies.find(movie => movie.name === movieName);

            if (movie){
                movie.director = director;
            }

        } else if (row.includes(onDateCommand)) {
            const [movieName, date] = row.split(` ${onDateCommand} `);
            const movie = movies.find(movie => movie.name === movieName);

            if (movie){
                movie.date = date;
            }
        }
    }
    movies
    .filter(movie => movie.director && movie.date)
    .forEach(movie => console.log(JSON.stringify(movie)));
}


solve([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
]
);

solve([
    'addMovie The Avengers',
    'addMovie Superman',
    'The Avengers directedBy Anthony Russo',
    'The Avengers onDate 30.07.2010',
    'Captain America onDate 30.07.2010',
    'Captain America directedBy Joe Russo'
]
);