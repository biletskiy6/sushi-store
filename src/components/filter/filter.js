import React, { Component } from "react";
import { connect } from "react-redux";
import "./filter.scss";

const Button = ({ text, name, isActive, onClick }) => {
  let classNames = isActive ? "active" : null;
  return (
    <button name={name} className={classNames} onClick={onClick}>
      {text}
    </button>
  );
};

class Filter extends Component {
  state = {
    activeName: "all"
  };

  onButtonClick = e => {
    const name = e.target.name;
    this.setState(
      {
        activeName: name
      },
      this.props.filterBy(name)
    );
  };

  render() {
    const { activeName } = this.state;
    return (
      <div className="filter">
        <Button
          name="all"
          isActive={activeName === "all"}
          onClick={this.onButtonClick}
          text="Все"
        />
        <Button
          name="priceHigh"
          isActive={activeName === "priceHigh"}
          onClick={this.onButtonClick}
          text="По цене (от дорогих к дешевым)"
        />
        <Button
          name="priceLow"
          isActive={activeName === "priceLow"}
          onClick={this.onButtonClick}
          text="По цене (от дешевых к дорогим)"
        />
        <Button
          name="newest"
          isActive={activeName === "newest"}
          onClick={this.onButtonClick}
          text="По новизне"
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { state };
};

const mapDispatchToProps = dispatch => {
  return {
    filterBy: term => {
      dispatch({
        type: "SET_FILTER",
        payload: term
      });
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Filter);
