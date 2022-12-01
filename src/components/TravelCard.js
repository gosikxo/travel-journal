import React from 'react'

export const TravelCard = (props) => {
    return (
        <div className='card'>
            <div className='imagePart'>
                <img className='cardImg' src={props.image} alt="mountFuji" />
            </div>
            <div className='textPart'>
                <div className='countryAndLink'>
                    <img className='locationPin' src='/images/684908.png' alt='locationPin'/>
                    <p className='country'>{props.country}</p>
                    <a className='googleLink' href={props.link}>View on Google Maps</a>
                </div>
                <h1 className='title'>{props.location}</h1>
                <p className='dates'>{props.dates}</p>
                <p className='description'>{props.description}</p>
            </div>
        </div>
    )
}
