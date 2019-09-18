import React from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { reset } from "redux-form";
import "./checkout.scss";

const required = value =>
  value || typeof value === "number" ? undefined : "Required";
const phoneNumber = value =>
  value && !/^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/.test(value)
    ? "Invalid phone number, must be 10 digits"
    : undefined;

// const renderField = field => {};

const renderField = ({ input, label, type, meta: { touched, error } }) => (
  <div>
    <div>
      <input
        {...input}
        placeholder={label}
        type={type}
        className={touched && error ? "has-error" : null}
      />
      {/* {touched &&
        ((error && <span>{error}</span>) ||
          (warning && <span>{warning}</span>))} */}
    </div>
  </div>
);

const CheckoutForm = props => {
  const { handleSubmit, isSubmitButtonDisabled } = props;
  console.log(props);
  return (
    <form onSubmit={handleSubmit} className="form-control">
      <div className="form-group">
        <Field
          name="name"
          type="text"
          label="Имя"
          component={renderField}
          validate={[required]}
        />
      </div>
      <div className="form-group">
        <Field
          name="surname"
          type="text"
          label="Фамилия"
          component={renderField}
          validate={[required]}
        />
      </div>
      <div className="form-group">
        <Field
          name="phone"
          type="text"
          label="Телефон"
          component={renderField}
          validate={[required, phoneNumber]}
        />
      </div>
      <div className="form-group">
        <Field
          name="address"
          type="text"
          label="Адрес доставки"
          component={renderField}
          validate={[required]}
        />
      </div>

      <button type="submit" disabled={isSubmitButtonDisabled}>
        Подтвердить заказ
      </button>
    </form>
  );
};

const CheckoutReduxForm = reduxForm({
  form: "checkout"
})(connect(mapStateToProps)(CheckoutForm));

const userOrder = (formData, cartList) => {
  let data = new FormData();
  data.append("name", formData.name);
  data.append("surname", formData.surname);
  data.append("phone", formData.phone);
  data.append("address", formData.address);
  data.append("order", JSON.stringify(cartList));
  return data;
};

const Checkout = ({
  cartList,
  history,
  disableSubmitButton,
  enableSubmitButton,
  resetSubmitForm,
  resetCartItems
}) => {
  const onSubmit = async formData => {
    disableSubmitButton();
    resetSubmitForm();
    let data = userOrder(formData, cartList);
    fetch("http://sushi-store/checkout/", {
      method: "POST",
      body: data
    }).then(() => {
      // history.push("/checkout/success/");
      resetSubmitForm();
      enableSubmitButton();
      resetCartItems();
    });
  };

  return (
    <div className="checkout">
      <h2 className="cart-header">Оформление доставки</h2>
      <CheckoutReduxForm onSubmit={onSubmit} />
    </div>
  );
};

function mapStateToProps({
  cart: { cartList },
  orderSubmit: { isSubmitButtonDisabled }
}) {
  return { cartList, isSubmitButtonDisabled };
}

function mapDispatchToProps(dispatch) {
  return {
    disableSubmitButton: () => {
      dispatch({ type: "DISABLE_SUBMIT_BUTTON" });
    },
    enableSubmitButton: () => {
      dispatch({ type: "ENABLE_SUBMIT_BUTTON" });
    },
    resetSubmitForm: () => dispatch(reset("checkout")),
    resetCartItems: () => dispatch({ type: "RESET_CART_ITEMS" })
  };
}

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Checkout)
);
