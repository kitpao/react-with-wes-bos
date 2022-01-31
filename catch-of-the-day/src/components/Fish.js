import React from 'react';
import { formatPrice } from '../helpers'

class Fish extends React.Component {
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
        <button disabled = {unavailable}>{unavailable ? "Sold Out!" : "+ Add To Cart"}</button>
      </li>
    )
  }
}

export default Fish;
