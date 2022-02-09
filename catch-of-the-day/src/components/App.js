import React from 'react';
import PropTypes from 'prop-types';
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

  static propTypes = {
    match: PropTypes.object,
  };

  componentDidMount() {
    const { params } = this.props.match;
    // get previous local storage values from prev key
    const localStorageRef = localStorage.getItem(params.storeID)
    // if there was data before, update state
    if(localStorageRef){
      this.setState({order: JSON.parse(localStorageRef)})
    } // make sure to check the dependencies, this needs a fish to exist before
    this.ref = base.syncState(`${params.storeID}/fishes`,{
      context: this,
      state: 'fishes'
    });
  }

  componentDidUpdate() {
    localStorage.setItem(
      this.props.match.params.storeID,
      JSON.stringify(this.state.order)
    );
    //key, value in app debug tools, value in JSON
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

  editFish = (key,updatedFish) => {
    const fishes = { ...this.state.fishes };
    fishes[key] = updatedFish;
    this.setState({
      fishes
    })
  }

  deleteFish = (key) => {
    const fishes = { ...this.state.fishes };
    fishes[key] = null;
    this.setState({
      fishes
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

  removeFromOrder = (key) => {
    const order = { ...this.state.order };
    delete order[key];
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
        <Order
          fishes={this.state.fishes}
          order={this.state.order}
          removeFromOrder = {this.removeFromOrder}
        />
        <Inventory
          addFish={this.addFish}
          editFish={this.editFish}
          deleteFish={this.deleteFish}
          loadSampleFishes={this.loadSampleFishes}
          fishes = {this.state.fishes}
          storeId = {this.props.match.params.storeID}
        />
      </div>
    )
  }
}

export default App;
