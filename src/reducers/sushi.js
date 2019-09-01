const initialState = {
  itemList: null
};

const Sushi = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_SUSHI_LOADED":
      return "sushi loaded";
    default:
      return state;
  }
};

export default Sushi;
