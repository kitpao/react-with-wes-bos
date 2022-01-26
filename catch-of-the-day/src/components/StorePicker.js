import React from 'react';
import { getFunName } from '../helpers';

class StorePicker extends React.Component {
  myInput = React.createRef();

  goToStore = e => {
    // the form should not submit
    e.preventDefault();
    // should get the input
    console.log(this.myInput);
    // go to the /store/input
  }

  render() {
    return (
      <form className="store-selector" onSubmit={this.goToStore}>
        { /* This is a comment in js, because I'm in jsx */}
        <h2>Please Enter A Store</h2>
        <input
          type="text"
          ref={this.myInput}
          required
          placeholder="Store Name"
          defaultValue={getFunName()}
        />
        <button type="submit">Visit Store →</button>
      </form>
    )
  }
}

export default StorePicker;
