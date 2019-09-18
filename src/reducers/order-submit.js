const initialState = {
  isSubmitButtonDisabled: false
};

const OrderSubmit = (state = initialState, action) => {
  switch (action.type) {
    case "DISABLE_SUBMIT_BUTTON":
      return {
        isSubmitButtonDisabled: true
      };
    case "ENABLE_SUBMIT_BUTTON":
      return {
        isSubmitButtonDisabled: false
      };
    default:
      return state;
  }
};

export default OrderSubmit;
