import React from 'react';
import './Cards.css';

const Cards = (props) => {
  return (
    <div className="cardContainer">
        <div className="wordContainer">{props.word}</div>
        <div className="meaningContainer">{props.meaning}</div>
    </div>
  )
}

export default Cards