import React, { Component } from 'react'
import Background from './components/Background'
import PricingHeader from './components/PricingHeader'
import Card from './components/Card'

export default class App extends Component {
  constructor(props){
    super(props);

    this.state = {isMonthly: false};

    this.handler = this.handler.bind(this);
  }


  handler(){
    this.setState(state => ({
      isMonthly: !state.isMonthly
    }));
  }

  render () {
    const basic = {
      header: 'Basic',
      price: {
        annually: '199.99',
        monthly: '19.99'
      },
      row1: '500 GB Storage',
      row2: '2 Users Allowed',
      row3: 'Send up to 3 GB'
    }
    
    const professional = {
      header: 'Professional',
      price: {
        annually: '249.99',
        monthly: '24.99'
      },
      row1: '1 TB Storage',
      row2: '5 Users Allowed',
      row3: 'Send up to 10 GB'
    }
    const master = {
      header: 'Master',
      price: {
        annually: '399.99',
        monthly: '39.99'
      },
      row1: '2 TB Storage',
      row2: '10 Users Allowed',
      row3: 'Send up to 20 GB'
    }

    return (
      <div>
      <Background />
      
      <PricingHeader monthly={this.state.isMonthly} handler={this.handler} />
      {this.state.count}

      <div className="content">
        <Card {...basic} isMonthly={this.state.isMonthly} />
        <Card {...professional} isMain isMonthly={this.state.isMonthly} />
        <Card {...master} isMonthly={this.state.isMonthly} />
      </div>
    </div>
    );
  }
}