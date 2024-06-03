import React from 'react';
import smilykumu from "../Image/th.jpeg"

function Card(props) {
    return (
        <div className='card'>
            {/* image */}
            <div className='img'>
                <img src={`https://image.tmdb.org/t/p/w300${props.img}`} />
            </div>
            {/* heading */}
            <div className='card_title'>
                <h4>{props.name}</h4>
            </div>

            {/* details */}
            <div className='card_details'>
                <h5>{props.type}</h5>
                <h5>{props.date}</h5>
            </div>
        </div>
    )
}

export default Card