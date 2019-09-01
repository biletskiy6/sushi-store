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
    default:
      return state;
  }
};

export default Filter;
