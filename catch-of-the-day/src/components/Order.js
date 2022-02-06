import React from 'react';
import { formatPrice } from '../helpers';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

class Order extends React.Component {
  renderOrder = key => {
    const fish = this.props.fishes[key]
    // when order loads before the fish
    if(!fish) return null;
    const counter = this.props.order[key];
    const isAvailable = fish.status === "available";

    if(isAvailable) {
      return (
        <CSSTransition
          classNames="order"
          key={key}
          timeout={{enter: 500, exit: 500 }}
        >
          <li key={key}>
            {counter} lbs of {fish.name}
            <strong>{formatPrice(fish.price * counter)}</strong>
            <button onClick={() => this.props.removeFromOrder(key)}>&times;</button>
          </li>
        </CSSTransition>
      );
    } else {
      return (
        <CSSTransition
          classNames="order"
          key={key}
          timeout={{enter: 250, exit: 250 }}
        >
          <li key={key}>
            Sorry, {fish ? fish.name : "fish"} is no longer available
          </li>
        </CSSTransition>
      );
    }
  }

  render() {
    const orderIds = Object.keys(this.props.order);
    const total = orderIds.reduce((prevTotal,key) => {
      const fish = this.props.fishes[key];
      const isAvailable = fish && fish.status === "available";
      const fishPrice = fish && fish.price;
      const fishCounter = this.props.order[key];
      if(isAvailable){
        return prevTotal + (fishPrice * fishCounter)
      }
      return prevTotal
    }, 0)

    return (
      <div className="order-wrap">
        <h2>Order</h2>
        <TransitionGroup component="ul" className="order">
          {orderIds.map(this.renderOrder)}
        </TransitionGroup>
        <div className="total">
          Total:
          <strong>{formatPrice(total)}</strong>
        </div>
      </div>
    )
  }
}

export default Order;
