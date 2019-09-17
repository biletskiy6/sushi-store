import React from "react";
import { Field, reduxForm } from "redux-form";
import "./checkout.scss";

const required = value =>
  value || typeof value === "number" ? undefined : "Required";
const phoneNumber = value =>
  value && !/^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/.test(value)
    ? "Invalid phone number, must be 10 digits"
    : undefined;
const renderField = ({
  input,
  label,
  type,
  meta: { touched, error, warning }
}) => (
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
  const { handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit} className='form-control'>
      <div className='form-group'>
        <Field
          name='name'
          type='text'
          label='Имя'
          component={renderField}
          validate={[required]}
        />
      </div>
      <div className='form-group'>
        <Field
          name='surname'
          type='text'
          label='Фамилия'
          component={renderField}
        />
      </div>
      <div className='form-group'>
        <Field
          name='phone'
          type='text'
          label='Телефон'
          component={renderField}
          validate={[required, phoneNumber]}
        />
      </div>
      <div className='form-group'>
        <Field
          name='address'
          type='text'
          label='Адрес доставки'
          component={renderField}
        />
      </div>
      <button type='submit'>Подтвердить заказ</button>
    </form>
  );
};

const CheckoutReduxForm = reduxForm({
  form: "checkout"
})(CheckoutForm);

const Checkout = () => {
  const onSubmit = formData => {};

  return (
    <div>
      <h2 className='cart-header'>Оформление доставки</h2>
      <CheckoutReduxForm onSubmit={onSubmit} />
    </div>
  );
};

export default Checkout;
