import React, { Component } from 'react';
import Counter from './Counter';
// import Header from './Header';
import './App.css';

class App extends Component {
  state = {
    counters: [
      {
        id: 1,
        step: 1,
        value: 111,
      },
      {
        id: 2,
        step: 1,
        value: 222,
      },
      {
        id: 3,
        step: 1,
        value: 333,
      },
    ],
  };

  handleIncrement = (id) => {
    this.setState(({ counters }) => ({
      counters: counters.map((counter) =>
        counter.id === id
          ? {
              ...counter,
              value: counter.value + 1,
            }
          : counter,
      ),
    }));
  };

  handleDecrement = (id) => {
    this.setState(({ counters }) => ({
      counters: counters.map((counter) =>
        counter.id === id
          ? {
              ...counter,
              value: counter.value - 1,
            }
          : counter,
      ),
    }));
  };

  // handleStepChange = (e) => {
  //   this.setState({ step: ~~e.target.value });
  // };

  render() {
    const { counters } = this.state;

    return (
      <div className="App">
        <h2>QA 9</h2>

        {/* <Header value={value} /> */}

        {counters.map((counter) => (
          <Counter
            key={counter.id}
            value={counter.value}
            onDecrement={() => this.handleDecrement(counter.id)}
            onIncrement={() => this.handleIncrement(counter.id)}
          />
        ))}
      </div>
    );
  }
}

export default App;
