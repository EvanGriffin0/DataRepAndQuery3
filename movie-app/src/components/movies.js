//import movieItem component
import MovieItem from "./MovieItem"

//create movies component 
const Movies = (props) => {

    //returned a list of movies from from the array of objects found in read
    //updated movie to read through map of array
    return props.myMovies.map((movie) => (
           <MovieItem data={movie} key={movie.imdbID}/>
    ));
}

//exported movies class
export default Movies;