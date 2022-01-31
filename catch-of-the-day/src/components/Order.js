import React from 'react';
import { formatPrice } from '../helpers';

class Order extends React.Component {
  render() {
    const orderIds = Object.keys(this.props.order);
    const total = orderIds.reduce((prevTotal,fish) => {
      const isAvailable = fish && this.props.fishes[fish].status === "available";
      const fishPrice = this.props.fishes[fish].price;
      const fishCounter = this.props.order[fish];
      if(isAvailable){
        return prevTotal + (fishPrice * fishCounter)
      }
      return prevTotal
    }, 0)

    return (
      <div className="order-wrap">
        <h2>Order</h2>
        {orderIds}
        <div className="total">
          Total:
          <strong>{formatPrice(total)}</strong>
        </div>
      </div>
    )
  }
}

export default Order;
