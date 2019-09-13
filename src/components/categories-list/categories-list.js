import React, { Component } from "react";
import withSushiService from "../hoc";
import { connect } from "react-redux";
import { fetchCategories } from "../../actions";
import { Link } from "react-router-dom";

import "./products-menu.scss";

class CategoriesListContainer extends Component {
  componentDidMount = () => {
    this.props.fetchCategories();
  };

  render() {
    return <CategoriesList {...this.props} />;
  }
}

const CategoriesList = props => {
  return (
    <aside className='categories-menu'>
      <ul className='categories-list'>
        {props.itemList &&
          props.itemList.map((item, i) => {
            return (
              <li key={item.id} className='categories-list__item'>
                <Link
                  className='categories-list__link'
                  to={`/categories/${item.id}`}
                >
                  <img
                    src={require(`../../assets/images/categories/${i}.png`)}
                    alt=''
                  />
                  <span>{item.title}</span>
                </Link>
              </li>
            );
          })}
      </ul>
    </aside>
  );
};

const mapStateToProps = ({ categories: { itemList } }) => {
  return { itemList };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchCategories: () => {
      const {
        sushiService: { getCategories }
      } = ownProps;
      getCategories().then(categories => dispatch(fetchCategories(categories)));
    }
  };
};

export default withSushiService(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(CategoriesListContainer)
);
