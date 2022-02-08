import React from 'react';
import PropTypes from 'prop-types';
import AddFishForm from './AddFishForm';
import EditFishForm from './EditFishForm';

class Inventory extends React.Component {
  static propTypes = {
    addFish: PropTypes.func,
    editFish: PropTypes.func,
    loadSampleFishes: PropTypes.func,
    fishes: PropTypes.object,
  }

  render() {
    return (
      <div className="inventory">
        <h2>Inventory</h2>
        {Object.keys(this.props.fishes).map(key =>
          <EditFishForm
            key={key}
            index={key}
            fish={this.props.fishes[key]}
            editFish={this.props.editFish}
            deleteFish={this.props.deleteFish}
          />
        )}
        <AddFishForm addFish={this.props.addFish} />
        <button onClick={this.props.loadSampleFishes}>
          Load Sample Fishes
        </button>
      </div>
    )
  }
}

export default Inventory;
