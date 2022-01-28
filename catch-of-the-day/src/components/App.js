import React from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';

class App extends React.Component {
  state={
    fishes: {},
    order: {},
  };

  addFish= fish => { // To change state,
    // First create a copy
    const fishes = { ...this.state.fishes };
    // Then modify the copy
    fishes[`fish${Date.now()}`] = fish;
    // Add it to the actual original with setState from React
    this.setState({
      fishes // same as fishes: fishes
    })
  }

  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline = "Fresh Seafood Market" />
        </div>
        <Order />
        <Inventory addFish={this.addFish} />
      </div>
    )
  }
}

export default App;
