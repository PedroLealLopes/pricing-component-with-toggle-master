import React from 'react';

const Card = (props) => {
  return (
    <div className={props.isMain ? 'card card-main' : 'card'}>
      {props.header}
      <div className='card-price'>
        <span className="card-price-dollar">$</span>{props.isMonthly ? props.price.monthly : props.price.annually}
      </div>
      <div className="card-info-container">
        <div className={props.isMain ? 'card-info-main' : 'card-info'}>{props.row1}</div>
        <div className="card-info-middle">{props.row2}</div>
        <div className={props.isMain ? 'card-info-main' : 'card-info'}>{props.row3}</div>
      </div>
    </div>);  
}

export default Card;
