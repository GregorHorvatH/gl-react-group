import React, { Component } from 'react';

class Counter extends Component {
  render() {
    const { value, onDecrement, onIncrement } = this.props;

    return (
      <div className="counter">
        {/* <label>
          <span>step</span>
          <input type="text" value={step} onChange={onStepChange} />
        </label> */}
        {/* <br /> */}

        <button onClick={onDecrement}>-</button>
        <span>{value}</span>
        <button onClick={onIncrement}>+</button>
      </div>
    );
  }
}

export default Counter;
