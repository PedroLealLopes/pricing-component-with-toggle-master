import React from 'react';

const PricingHeader = (props) => {
  return (
    <div className="pricing-header-container">
      <div className="pricing-header-title">Our Pricing</div>
      <span className="pricing-header-content">
        Annually 
        <span className='pricing-header-btn-bg'>
          <button onClick = {props.handler} className={props.monthly ? 'pricing-header-btn' : 'pricing-header-btn pricing-header-btn-active'}></button>
        </span>
        Monthly
      </span>
    </div>);  
}

export default PricingHeader;
