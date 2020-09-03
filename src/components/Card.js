import React from 'react'

const Card = ({isMonthly, isMain, header, price, row1, row2, row3 }) => {
  return (
    <div className={isMain ? 'card card-main' : 'card'}>
      <div className={isMain ? 'card-header-main' : 'card-header'}>
        {header}
      </div>
      <div className='card-price'>
        <span className='card-price-dollar'>$</span>
        {isMonthly ? price.monthly : price.annually}
      </div>

      <div className='card-info-container'>
        <div>
          <hr
            className={
              isMain ? 'card-info-seperator-main' : 'card-info-seperator'
            }
          />
          <div className='card-info'>{row1}</div>
          <hr
            className={
              isMain ? 'card-info-seperator-main' : 'card-info-seperator'
            }
          />
        </div>
        <div>
          <div className='card-info'>{row2}</div>
        </div>
        <div>
          <hr
            className={
              isMain ? 'card-info-seperator-main' : 'card-info-seperator'
            }
          />
          <div className='card-info'>{row3}</div>
          <hr
            className={
              isMain ? 'card-info-seperator-main' : 'card-info-seperator'
            }
          />
        </div>
      </div>

      <button className={isMain ? 'btn btn-main' : 'btn'}>
        LEARN MORE
      </button>
    </div>
  )
}

export default Card
