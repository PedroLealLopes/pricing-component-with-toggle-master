import React from 'react'

const Card = (props) => {
  return (
    <div className={props.isMain ? 'card card-main' : 'card'}>
      <div className={props.isMain ? 'card-header-main' : 'card-header'}>
        {props.header}
      </div>
      <div className='card-price'>
        <span className='card-price-dollar'>$</span>
        {props.isMonthly ? props.price.monthly : props.price.annually}
      </div>

      <div className='card-info-container'>
        <div>
          <hr
            className={
              props.isMain ? 'card-info-seperator-main' : 'card-info-seperator'
            }
          />
          <div className='card-info'>{props.row1}</div>
          <hr
            className={
              props.isMain ? 'card-info-seperator-main' : 'card-info-seperator'
            }
          />
        </div>
        <div>
          <div className='card-info'>{props.row2}</div>
        </div>
        <div>
          <hr
            className={
              props.isMain ? 'card-info-seperator-main' : 'card-info-seperator'
            }
          />
          <div className='card-info'>{props.row3}</div>
          <hr
            className={
              props.isMain ? 'card-info-seperator-main' : 'card-info-seperator'
            }
          />
        </div>
      </div>

      <button className={props.isMain ? 'btn btn-main' : 'btn'}>
        LEARN MORE
      </button>
    </div>
  )
}

export default Card
