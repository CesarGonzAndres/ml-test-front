import React, { PureComponent } from 'react';
import NumberFormat from 'react-number-format';

import { Link } from "react-router-dom";

import './styles.scss';
import logoImg from '../../../assets/Logo_ML.png';
import searchIcon from '../../../assets/ic_Search.png';

class ProductsList extends PureComponent {
  render() {
    const { productDescription, searchProducts, productSelected, getValues, query, breadcumbs, onKeyDown } = this.props;
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
            <div className="row col-8 offset-md-2 offset-sm-1 p-0">
              {
                breadcumbs && breadcumbs.map(item => (
                  <p key={item.id} className="route-description">
                    { `${item.values[0].name} ${item.id === 'BRAND' ? ' ' : '>'}` }
                  </p>
                ))
              }
            </div>
          </div>
          <div className="row">
            <div className="col-md-8 offset-md-2 bg-white products-container pb-3">
                <div className="row">
                  <div className="col-7 col-md-7">
                    <img height="100%" width="100%" className="br-4 pointer" src={productSelected.thumbnail} alt="preview" />
                  </div>
                  <div className="col-5">
                    <p className="font-sm--14 p-top--32 mb-0">{`${productSelected.condition === 'new' ? 'Nuevo' : 'Usado'} > ${productSelected.sold_quantity} vendidos`}</p>
                    <p className="font-md--24 line-height--1 p-bottom--32 p-top--16 mb-0">{productSelected.title}</p>
                    <NumberFormat
                      value={10000} 
                      className="font-lg--46 p-bottom--32"
                      displayType={'text'}
                      thousandSeparator="."
                      decimalSeparator="," 
                      prefix={'$ '}
                    />
                    <button className="btn btn-primary full-width">
                      Comprar
                    </button>
                  </div>
                </div>
                <div className="row mt-3">
                  <p className="product-description font-md--28 pb-32">
                    Descripción del producto
                  </p>
                  <p className="product-description font-sm--16 pb-32">
                    { productDescription.plain_text }
                  </p>
                </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductsList;
