import React, { Component } from "react";
import sushiImg from "../../assets/images/fila.jpg";
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
                return (
                  <li key={item.id} className='products-item'>
                    <img src={sushiImg} alt='' />
                    <div className='products-description'>
                      <div className='products-info'>
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>
                      </div>
                      <div className='products-price'>
                        <span>{item.price}</span>
                      </div>
                    </div>
                    <button onClick={() => props.addProduct(item)}>
                      Add to cart
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
