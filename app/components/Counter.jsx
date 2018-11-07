import React, { Component } from 'react';

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
      <div className="container">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Counter</h5>
            <p>
            Clicked: {this.props.value} times
            {' '}
            <a href="#" className="btn btn-success" onClick={this.increment}>
              +
            </a>
            {' '}
            <a href="#" className="btn btn-success"  onClick={this.decrement}>
              -
            </a>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Counter;
