import React from 'react';

function App() {
  return (
    <div>
      <div class="bg-bottom">
        <img src="./images/bg-bottom.svg" alt="background lines at the bottom" />
      </div>
      <div class="bg-top">
        <img src="./images/bg-top.svg" alt="background lines at the top" />
      </div>

      <div class="pricing-header-container">
        <div class="pricing-header-title">Our Pricing</div>
        <span class="pricing-header-content">
          Annually
          <span class="pricing-header-btn-bg">
            <button class="pricing-header-btn"></button>
          </span>
          Monthly
        </span>
      </div>

      <div class="content">
        <div class="card"></div>
        <div class="card-main"></div>
        <div class="card"></div>
      </div>
    </div>
  );
}

export default App;
