import React, { PureComponent } from 'react';

import { Link } from "react-router-dom";

import { Redirect } from 'react-router';

import './styles.scss';
import logoImg from '../../../assets/Logo_ML.png';
import searchIcon from '../../../assets/ic_Search.png';

class BaseComponent extends PureComponent {
  render() {
    const { getValues, query, onKeyDown, redirect } = this.props;
    if (redirect) {
      return <Redirect push to={`/items/search/${query}`} />;
    }
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
              <Link to={query !== '' ? `/items/search/${query}` : '/'}>
                <button className="search-btn full-height" type="button">
                  <img src={searchIcon} alt="search" />
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="base-container bg-light-gray">
        </div>
      </div>
    );
  }
}

export default BaseComponent;
