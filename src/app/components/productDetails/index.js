import React, { PureComponent } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router';

import ProductDetails from './layout';

class ProductDetailsContainer extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      productSelected: [],
      productDescription: ''
    };
  }

  componentDidMount = async () => {
    await this.getProductData();
    return this.getProductDescription();
  };

  getProductDescription = async () => {
    const { match: { params } } = this.props;
    await axios.get(`/api/product/description?id=${params.id}`)
      .then((response) => {
        const data = JSON.parse(response.data.response.body);
        this.setState({ 
          productDescription: data
        });
    });
  }

  onKeyDown = async e => {
    if (e.key === 'Enter') {
      this.setState({
        redirect: true
      });
    }
  }
  
  getValues = params => {
    this.setState({
      query: params.target.value
    });
  }

  async getProductData() {
    const { match: { params } } = this.props;
    await axios.get(`/api/product?id=${params.id}`)
      .then((response) => {
        const data = response.data.response.body;
        this.setState({ 
          productSelected: JSON.parse(data), 
          loading: false
        });
    });
  }

  render() {
    const { productSelected, redirect, query, productDescription, breadcumbs } = this.state;
    if (redirect) {
      return <Redirect push to={`/items/search/${query}`} />;
    }
    return (
      <ProductDetails 
        productSelected={productSelected} 
        redirect={redirect} 
        query={query} 
        productDescription={productDescription} 
        breadcumbs={breadcumbs} 
        getValues={this.getValues}
        onKeyDown={this.onKeyDown}
      />
    );
  }
}

export default ProductDetailsContainer;
