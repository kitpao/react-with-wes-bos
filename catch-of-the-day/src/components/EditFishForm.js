import React from 'react';
import PropTypes from 'prop-types';

class EditFishForm extends React.Component {
  static propTypes = {
    index: PropTypes.string,
    fish: PropTypes.shape({
      image: PropTypes.string,
      name: PropTypes.string,
      desc: PropTypes.string,
      status: PropTypes.string,
      price: PropTypes.number,
    }),
    editFish: PropTypes.func,
    deleteFish: PropTypes.func,
  }

  handleChange = e => {
    const fieldValue = e.currentTarget.value;
    const fieldName = e.currentTarget.name;
    // take copy of fish and modify it
    const updatedFish = {
      ... this.props.fish,
      [fieldName]: fieldValue
    }
    //send it to state
    this.props.editFish(this.props.index, updatedFish)
    console.log(updatedFish)
  }
  render(){
    return (
      <div className="fish-edit">
        <input
          type="text" name="name"
          onChange={this.handleChange}
          value={this.props.fish.name}
        />
        <input
          type="text"
          name="price"
          onChange={this.handleChange}
          value={this.props.fish.price}
        />
        <select
          name="status"
          onChange={this.handleChange}
          value={this.props.fish.status}>
          <option value="available">Fresh!</option>
          <option value="unavailable">Sold Out!</option>
        </select>
        <textarea
          name="desc"
          onChange={this.handleChange}
          value={this.props.fish.desc}>
        </textarea>
        <input type="text" name="image"
          onChange={this.handleChange}
          value={this.props.fish.image}
        />
        <button onClick={() => this.props.deleteFish(this.props.index)}>
          Remove this fish
        </button>
      </div>
    )
  }
}

export default EditFishForm;
