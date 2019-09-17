import React from "react";
import { Field, reduxForm } from "redux-form";

const CheckoutForm = props => {
  const { handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <Field name="login" placeholder="Имя" component="input" />
        <Field name="sirname" placeholder="Фамилия" component="input" />
        <Field name="phone" placeholder="Телефон" component="input" />
        <Field name="address" placeholder="Адрес" component="input" />
        <button type="submit">1</button>
      </div>
    </form>
  );
};

const CheckoutReduxForm = reduxForm({
  form: "checkout"
})(CheckoutForm);

const Checkout = () => {
  const onSubmit = formData => {
    console.log(formData);
  };

  return (
    <div>
      <CheckoutReduxForm onSubmit={onSubmit} />
    </div>
  );
};

export default Checkout;
