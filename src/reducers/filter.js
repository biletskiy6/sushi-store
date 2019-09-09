const initialState = {
  filterBy: "all",
  searchTerm: ""
};

const Filter = (state = initialState, action) => {
  switch (action.type) {
    case "SET_FILTER":
      return {
        ...state,
        filterBy: action.payload
      };
    case "SET_SEARCH_TERM":
      return {
        ...state,
        searchTerm: action.payload
      };
    case "RESET_SEARCH_TERM":
      return {
        ...state,
        searchTerm: ""
      };
    default:
      return state;
  }
};

export default Filter;
