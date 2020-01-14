import React, { PureComponent } from 'react';
import NumberFormat from 'react-number-format';

import { Link } from "react-router-dom";

import './styles.scss';
import logoImg from '../../../assets/Logo_ML.png';
import searchIcon from '../../../assets/ic_Search.png';

class ProductsList extends PureComponent {
  render() {
    const { products, searchProducts, getValues, query, breadcumbs, onKeyDown } = this.props;
    return (
      <div className="full-width full-height">
        <div className="row middle container-header ml-0 mr-0">
          <Link to='/'>
            <span className="col-1">
              <img src={logoImg} alt="logoImg" />
            </span>
          </Link>
          <div className="col-8 input-group search-input-container mw-80 ml-3">
            <input type="text" onKeyDown={e => onKeyDown(e)} onChange={e => getValues(e)} className="form-control" placeholder="Nunca dejes de buscar" />
            <div className="input-group-append">
              <button className="search-btn" onClick={() => searchProducts(query)} type="button">
                <img src={searchIcon} alt="search" />
              </button>
            </div>
          </div>
        </div>
        <div className="base-container bg-light-gray">
          <div className="row">
            <div className="row col-8 offset-md-2 offset-sm-1 p-0 mt-2">
              {
                breadcumbs && breadcumbs.map((item, index) => (
                  <p key={item.id} className="route-description">
                    {`${item.values[0].name} ${index === breadcumbs.length - 1 ? '' : '>'}`}
                  </p>
                ))
              }
            </div>
          </div>
          <div className="row">
            <div className="col-md-8 offset-md-2 bg-white products-container pb-3">
              { products && products.map(i => 
              <div key={i.id}>
                <div className="row mt-3">
                  <div className="col-4 col-md-4 col-lg-3">
                    <Link to={`/items/${i.id}`}>
                      <img height="180px" width="180px" className="br-4 pointer" src={i.thumbnail} alt="preview" />
                    </Link>
                  </div>
                  <div className="col-4 col-md-4 col-lg-3 mt-4">
                    <NumberFormat
                      value={i.price} 
                      displayType={'text'} 
                      thousandSeparator="."
                      decimalSeparator="," 
                      prefix={'$ '}
                    />
                    <Link to={`/items/${i.id}`}>
                      <h6 className="mt-2 pointer color-black">{i.title}</h6>
                    </Link>
                  </div>
                  <div className="col-4 col-md-4 col-lg-6 d-flex align-items-center">
                    <p className="address-style ml-2">{i.address.state_name}</p>
                  </div>
                </div>
                <hr className="interline" />
              </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductsList;
