//create movies component 
const Movies = (props) => {

    //returned a list of movies from from the array of objects found in read
    return(
        <div>
           <h3> Hello from movies component </h3>
           {console.log(props.myMovies)}
        </div>

    )

}

//exported movies class
export default Movies;