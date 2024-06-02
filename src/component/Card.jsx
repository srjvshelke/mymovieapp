import React from 'react';
import smilykumu from "../Image/th.jpeg"

function Card(props) {
    return (
        <div className='card'>
            {/* image */}
            <div className='img'>
                <img src={`https://image.tmdb.org/t/p/w300${props.img}` }/>
            </div>
            {/* heading */}
            <div>
                <h2>{props.name}</h2>
            </div>

            {/* details */}
            <div className='card_details'>
                <h2>movie</h2>
                <h2>{props.date}</h2>
            </div>
        </div>
    )
}

export default Card