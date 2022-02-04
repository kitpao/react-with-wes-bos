import React from 'react';

class EditFishForm extends React.Component {
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
      </div>
    )
  }
}

export default EditFishForm;
