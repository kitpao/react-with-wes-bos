import React from 'react';
import PropTypes from 'prop-types';
import { formatPrice } from '../helpers';

class Fish extends React.Component {
  static propTypes = {
    details: PropTypes.shape({
      name: PropTypes.string,
      image: PropTypes.string,
      desc: PropTypes.string,
      price: PropTypes.number,
      status: PropTypes.string,
    }),
    addToOrder: PropTypes.func,
    fishId: PropTypes.string,
  }

  addToOrderOnClick = () => {
    this.props.addToOrder(this.props.fishId);
  }

  render() {
    const {name, image, desc, price, status } = this.props.details;
    let unavailable = status === "unavailable";
    return (
      <li className="menu-fish">
        <img src= {image} alt={name} />
        <h3 className="fish-name">
          {name}
          <span className="price">
            {formatPrice(price)}
          </span>
        </h3>
        <p>{desc}</p>
        <button
          disabled = {unavailable}
          onClick = {
            // () => this.props.addToOrder(this.props.fishId)
            this.addToOrderOnClick
            }
        >
          {unavailable ? "Sold Out!" : "+ Add To Cart"}
        </button>
      </li>
    )
  }
}

export default Fish;
