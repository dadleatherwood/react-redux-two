import React, { Component } from 'react';

import {connect} from 'react-redux'
import {addItem, addCurrentItem} from './ducks/cart'

import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state ={

    }
    this.viewItem = this.viewItem.bind(this)
    this.buyItem = this.buyItem.bind(this)
  }

  viewItem(item) {
    this.props.addCurrentItem(item)
  }

  buyItem(item) {
    this.props.addItem(item)
  }

  render() {
    const whales = this.props.items.map(whale => {
      return (
        <li
          key={whale.id}
          onClick={() => {this.viewItem(whale)}}
        >
            {whale.species}
        </li>
      )
    })
    const cartItems = this.props.cart.map(item => {
      return (
        <li key={item.id}>{item.name}</li>
      )
    })
    return (
      <div className="App">
        <h1>The Whale Store</h1>
        <ul>{whales}</ul>
        <h1>Current Item</h1>
        {
          this.props.currentItem.id
          ?
          <div>
            <h3>{this.props.currentItem.name}</h3>
            <h4>{this.props.currentItem.species}</h4>
            <p>{'$' + this.props.currentItem.price}K</p>
            <button onClick={() => {this.buyItem(this.props.currentItem)}}>Buy This Item</button>
          </div>
          :
          <h3>No Item Selected</h3>
        }
        <h2>Your Cart</h2>
        <ul>{cartItems}</ul>
      </div>
    );
  }
}
function mapStateToProps (state) {
  return state
}

const mapDispatchToProps = {
  addItem,
  addCurrentItem
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
