import React from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';
import fishes from '../sample-fishes';
import Fish from './Fish';
import base from '../base';

class App extends React.Component {
  state={
    fishes: {},
    order: {},
  };

  componentDidMount() {
    const { params } = this.props.match;
    this.ref = base.syncState(`${params.storeID}/fishes`,{
      context: this,
      state: 'fishes'
    });
  }

  componentWillUnmount() {
    base.removeBinding(this.ref)
  }

  addFish = fish => { // To change state,
    // First create a copy
    const fishes = { ...this.state.fishes };
    // Then modify the copy
    fishes[`fish${Date.now()}`] = fish;
    // Add it to the actual original with setState from React
    this.setState({
      fishes // same as fishes: fishes
    })
  }

  addToOrder = (key) => {
    // Create a copy of state
    const order = { ...this.state.order };
    // add item to order or update the quantity
    order[key] = order[key] + 1 || 1
    // add it to the original with setState
    this.setState({ order })
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
                addToOrder={this.addToOrder}
                fishId={key}
              />
            )}

          </ul>
        </div>
        <Order fishes={this.state.fishes} order={this.state.order} />
        <Inventory
          addFish={this.addFish}
          loadSampleFishes={this.loadSampleFishes}
        />
      </div>
    )
  }
}

export default App;
