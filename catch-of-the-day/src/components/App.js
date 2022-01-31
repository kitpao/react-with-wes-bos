import React from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';
import fishes from '../sample-fishes'
import Fish from './Fish';

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

  loadSampleFishes = () => {
    this.setState({ fishes }) // this one is from sample fishes
  }

  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline = "Fresh Seafood Market" />
          <ul className="fishes"> {/*loop through fishes*/}
            { Object.keys(this.state.fishes).map( key =>
              <Fish
                key={key}
                details={this.state.fishes[key]}
              />
            )}

          </ul>
        </div>
        <Order />
        <Inventory
          addFish={this.addFish}
          loadSampleFishes={this.loadSampleFishes}
        />
      </div>
    )
  }
}

export default App;
