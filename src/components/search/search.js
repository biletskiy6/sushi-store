import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import searchIcon from "../../assets/images/loupe.svg";
import "./search.scss";

const onIconClick = () => {
  const iconSearch = document.querySelector(".search img");
  const siblingInput = iconSearch.nextElementSibling;
  siblingInput.classList.add("active");
  siblingInput.focus();
};

const Search = ({ history, searchBy, resetSearchTerm, state: { filter } }) => {
  resetSearchTerm(filter.searchTerm, history);
  return (
    <form className='search'>
      <img onClick={onIconClick} src={searchIcon} alt='' />
      <input
        type='search'
        value={filter.searchTerm}
        onChange={e => searchBy(e.target.value)}
      />
    </form>
  );
};

const mapStateToProps = state => {
  return { state };
};
const mapDispatchToProps = dispatch => {
  return {
    searchBy: term => {
      dispatch({
        type: "SET_SEARCH_TERM",
        payload: term
      });
    },
    resetSearchTerm: (searchItem, history) => {
      if (searchItem.length > 0) {
        history.listen(() => dispatch({ type: "RESET_SEARCH_TERM" }));
      }
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Search));
