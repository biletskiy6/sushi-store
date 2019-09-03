import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";

const Search = ({ history, searchBy, resetSearchTerm, state: { filter } }) => {
  resetSearchTerm(filter.searchTerm, history);
  return (
    <form className="search">
      <input
        type="search"
        value={filter.searchTerm}
        onChange={e => searchBy(e.target.value)}
      />
    </form>
  );
};

const mapStateToProps = (state, ownProps) => {
  return { state };
};
const mapDispatchToProps = (dispatch, ownProps) => {
  console.log(ownProps);
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
