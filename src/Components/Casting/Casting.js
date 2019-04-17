import React from 'react';
import "./Casting.css";
import {
    Card, CardImg, CardTitle, CardColumns,
} from 'reactstrap';



const Cast = (props) => {
    return (
        <div onClick = {props.linkMovie}>
        <Card>
            <CardImg src={props.imgUrl} alt="Card image cap" />
        </Card>
        <CardTitle className='actor'><p>Brad Pitt</p><p>role</p></CardTitle>
        </div>
    );
}


const Casting = (props) => {
    return (
        <CardColumns className='container'>
          <Cast linkMovie = {this.linkMovie} imgUrl ='https://assets.e-cinema.com/UPLOADS/622134-zodiac-affiche.jpg'/>
        </CardColumns>
    );
};

export default Casting;
