import React, { Component, Fragment } from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";
import withSushiService from "../../../hoc";
class AdminAddProduct extends Component {
  state = {
    categories: null,
    title: "",
    description: "",
    price: "",
    image: "",
    titleValid: false,
    descriptionValid: false,
    priceValid: false,
    imageValid: false,
    formValid: false,
    categoryId: 13
  };

  componentDidMount = () => {
    this.props.sushiService
      .getCategories()
      .then(categories => this.setState({ categories }));
  };

  onChangeHandler = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value }, this.validateField(name, value));
  };
  onImageHandler = e => {
    const { name } = e.target;
    const { files: file } = e.target;
    this.setState({ [name]: file[0] }, this.validateField(name, file[0]));
  };

  validateField = (fieldName, value) => {
    let { titleValid, descriptionValid, priceValid, imageValid } = this.state;

    switch (fieldName) {
      case "title":
        titleValid = value.length > 0;
        break;
      case "description":
        descriptionValid = value.length > 0;
        break;
      case "price":
        priceValid = value.length > 0;
        break;
      case "image":
        imageValid = value.name.length > 0;
        break;
    }

    this.setState(
      {
        titleValid,
        descriptionValid,
        priceValid,
        imageValid
      },
      this.validateForm
    );
  };

  validateForm() {
    let { titleValid, descriptionValid, priceValid, imageValid } = this.state;
    this.setState({
      formValid: titleValid && descriptionValid && priceValid && imageValid
    });
  }

  createFormData = () => {
    const fd = new FormData();
    fd.append("title", this.state.title);
    fd.append("description", this.state.description);
    fd.append("price", this.state.price);
    fd.append("categoryId", this.state.categoryId);
    fd.append("image", this.state.image, this.state.image.name);
    return fd;
  };

  onSubmitHandler = e => {
    e.preventDefault();
    const fd = this.createFormData();
    axios.post("http://localhost:8888/sushi-store/products/add", fd);
    this.props.history.push("/products/");
    window.location.reload();
  };
  render() {
    const { categories, formValid } = this.state;
    return (
      <Fragment>
        <form
          action='#'
          onSubmit={this.onSubmitHandler}
          encType='multipart/form-data'
        >
          <h2>Добавить товар</h2>
          <input
            name='title'
            onChange={this.onChangeHandler}
            type='text'
            placeholder='Название'
          />
          <input
            name='description'
            onChange={this.onChangeHandler}
            type='text'
            placeholder='Описание'
          />
          <input
            name='price'
            onChange={this.onChangeHandler}
            type='text'
            placeholder='Цена'
          />
          <select name='categoryId' onChange={this.onChangeHandler}>
            {categories &&
              categories.map(category => {
                return (
                  <option key={category.id} value={category.id}>
                    {category["title"]}
                  </option>
                );
              })}
          </select>
          <input
            id='file'
            name='image'
            onChange={this.onImageHandler}
            type='file'
          />
          <label for='file'>Загрузить изображение</label>
          <button type='submit' disabled={!formValid}>
            Добавить
          </button>
        </form>
      </Fragment>
    );
  }
}

export default withRouter(withSushiService(AdminAddProduct));
