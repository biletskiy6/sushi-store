import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import searchIcon from "../../assets/images/loupe.svg";
import "./search.scss";

const onInputFocusOut = () => {
  const iconSearch = document.querySelector(".search img");
  const siblingInput = iconSearch.nextElementSibling;
  iconSearch.classList.remove("active");
  siblingInput.classList.remove("active");
};

const onIconClick = () => {
  const iconSearch = document.querySelector(".search img");
  const siblingInput = iconSearch.nextElementSibling;
  iconSearch.classList.add("active");
  siblingInput.classList.add("active");
  siblingInput.focus();
  siblingInput.addEventListener("focusout", onInputFocusOut);
};

const Search = ({ history, searchBy, resetSearchTerm, state: { filter } }) => {
  resetSearchTerm(filter.searchTerm, history);
  return (
    <form className="search">
      <img onClick={onIconClick} src={searchIcon} alt="" />
      <input
        type="search"
        value={filter.searchTerm}
        onChange={e => {
          searchBy(e.target.value);
          // history.push("/search/");
        }}
        placeholder="Что будем искать?"
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
