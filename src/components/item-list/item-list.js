import React, { Component } from "react";
import hryvnaIcon from "../../assets/images/hryvnia.svg";
import shoppingCart from "../../assets/images/shopping-cart-48.png";
import { connect } from "react-redux";

import * as productActions from "../../actions/product";
import { bindActionCreators } from "redux";
import "./item-list.scss";

import Filter from "../filter";

const ItemList = props => {
  return (
    <main className='main'>
      <div className='container'>
        <div className='main-wrapper'>
          <Filter />
          <ul className='products item-list'>
            {props.itemList &&
              props.itemList.map(item => {
                item.price = parseInt(item.price);
                return (
                  <li key={item.id} className='products-item'>
                    <img src={item.image} alt='' />
                    <div className='products-description'>
                      <div className='products-info'>
                        <h3>{item.title}</h3>
                        <p>{item.description.slice(0, 100)}</p>
                      </div>
                      <div className='products-price'>
                        <img src={hryvnaIcon} alt='' />
                        <span>{item.price}</span>
                      </div>
                    </div>
                    <button onClick={() => props.addProduct(item)}>
                      <img src={shoppingCart} alt='' />В корзину
                    </button>
                  </li>
                );
              })}
          </ul>
        </div>
      </div>
    </main>
  );
};

const mapStateToProps = state => {
  return { state };
};

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(productActions, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ItemList);
