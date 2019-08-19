import React from 'react';

import {CartServiceContext} from '../context/context'


export class CartService extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inCart: []
    };
    
  }
  
  addItem(item) {
    const items = this.state.inCart.slice();
    items.push(item);
    this.props.showModal();
    this.setState({incart: items});
  }

  componentDidUpdate() {
    console.log(`Добавлен в корзину! `);
  }

  render() {
    return (
    <CartServiceContext.Provider 
      value={{
        cartItems: this.state.cartItems,
        addItem: this.addItem.bind(this)
    }}>
      {this.props.children}
    </CartServiceContext.Provider>
    )
  }
}
