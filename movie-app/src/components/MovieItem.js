import Movies from "./movies"

//created an arrow function
const MovieItem = (props) => {

    //return the data in a structured format
    return(
        <div>
            <h4>
                {props.data.Title}
            </h4>
            <p>Year: {props.data.Year}</p>
        </div>       
    );

}

export default MovieItem;