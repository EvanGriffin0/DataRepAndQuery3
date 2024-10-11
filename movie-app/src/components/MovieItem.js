import Movies from "./movies"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

//created an arrow function
const MovieItem = (props) => {


    //return the data in a structured format
    return (

        //updated the styling to show the movies as cards instead
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={props.data.Poster} />
            <Card.Body>
                <Card.Title>{props.data.Title}</Card.Title>
                <Card.Text>
                    Year: {props.data.Year}
                </Card.Text>
              
            </Card.Body>
        </Card>

    );

}

export default MovieItem;