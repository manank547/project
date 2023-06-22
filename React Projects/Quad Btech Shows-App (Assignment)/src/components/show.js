import React, { useState, useEffect } from "react";

import Card from "react-bootstrap/Card";
import cardStyles from "./cardStyles";

function Show() {

const [shows, setShows] = useState([]);

useEffect(() => {

async function fetchShows(){
    try{
        const response = await fetch("https://api.tvmaze.com/search/shows?q=all");
const data = await response.json();
setShows(data)}catch(error){console.log(error);}
}fetchShows();
},[]);

return (
<div style={cardStyles.div}>
<div className="d-flex flex-wrap justify-content-center">
         {shows.map((data) => (<Card key={data.show.score} className="m-3" style={cardStyles.card}>

<Card.Img variant="top" src={data.show.image.original} alt={data.show.name} style={cardStyles.image} />

<Card.Body style={cardStyles.body}> 
<Card.Title style={cardStyles.title}>{data.show.name}</Card.Title>

<Card.Text> {data.show.summary?data.show.summary.slice(0,110):""}</Card.Text>

<Card.Text>{data.show.language}<br/>{data.show.genres[0]+" "+data.show.genres[1]}</Card.Text>
<a href={data.show.url} target="blank" className="btn btn-primary">Read more</a>

</Card.Body>

</Card>

))}

</div></div>

);

}

export default Show;