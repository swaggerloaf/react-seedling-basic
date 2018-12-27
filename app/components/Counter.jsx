import React, { Component } from 'react';
import { Card } from '@salesforce/design-system-react';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0
    };

    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }

  increment() {
    console.log('means go up in value');
  }
  
  decrement() {
    console.log('means go down in value');
  }



  render() {
    return (


        <Card className="slds-card slds-card__body" >
            <h5 className="slds-card__tile">Counter</h5>
            <p>
            Clicked: {this.props.value} times
            {' '}
            <a href="#" className="slds-button_success" onClick={this.increment}>
              +
            </a>
            {' '}
            <a href="#" className="slds-button_success"  onClick={this.decrement}>
              -
            </a>
            </p>
        </Card>
    );
  }
}

export default Counter;
