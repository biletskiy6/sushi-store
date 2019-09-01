const initialState = {
  itemList: []
};

const Categories = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_CATEGORIES_LOADED":
      return {
        itemList: action.payload
      };
      return "categories loaded";
    default:
      return state;
  }
};

export default Categories;
