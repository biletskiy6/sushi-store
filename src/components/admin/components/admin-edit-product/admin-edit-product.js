import React, { Component, Fragment } from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import withSushiService from "../../../hoc";
class AdminEditProduct extends Component {
  state = {
    categories: null,
    product: null,
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

  fetchCategories = () => {
    this.props.sushiService
      .getCategories()
      .then(categories => this.setState({ categories }));
  };

  fetchProduct = () => {
    const productId = this.props.match.params.id;
    this.props.sushiService.getProduct(productId).then(product =>
      this.setState({
        title: product.title,
        description: product.description,
        price: product.price,
        image: product.image,
        titleValid: true,
        descriptionValid: true,
        priceValid: true,
        categoryId: product.categoryId
      })
    );
  };
  componentDidMount = () => {
    this.fetchCategories();
    this.fetchProduct();
  };
  componentDidUpdate = prevProps => {
    if (this.props.match.params.id !== prevProps.match.params.id) {
      this.fetchProduct();
    }
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
    const idProductToEdit = this.props.match.params.id;
    const fd = this.createFormData();
    axios.post(
      `http://localhost:8888/sushi-store/products/edit/${idProductToEdit}`,
      fd
    );
    this.props.history.push("/products/");
    window.location.reload();
  };
  render() {
    const { categories, formValid } = this.state;
    // console.log(this.state.title);
    console.log(this.state.image);
    return (
      <Fragment>
        <form
          action='#'
          onSubmit={this.onSubmitHandler}
          encType='multipart/form-data'
        >
          <h2>Редактирование товара</h2>
          <input
            name='title'
            onChange={this.onChangeHandler}
            type='text'
            value={this.state.title}
            placeholder='Название'
          />
          <input
            name='description'
            onChange={this.onChangeHandler}
            type='text'
            value={this.state.description}
            placeholder='Описание'
          />
          <input
            name='price'
            onChange={this.onChangeHandler}
            type='text'
            value={this.state.price}
            placeholder='Цена'
          />
          <select name='categoryId' onChange={this.onChangeHandler}>
            {categories &&
              categories.map(category => {
                return (
                  <option
                    key={category.id}
                    value={category.id}
                    selected={category.id === this.state.categoryId}
                  >
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
            Обновить
          </button>
        </form>
      </Fragment>
    );
  }
}

export default connect()(withRouter(withSushiService(AdminEditProduct)));
