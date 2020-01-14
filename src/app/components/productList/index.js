import React, { PureComponent } from 'react';

import ProductsList from './layout';
import axios from 'axios';

class ProductsListContainer extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { 
      products: [],
      query: "",
      loading: false,
      breadcumbs: []  
    };
    this.searchProducts = this.searchProducts.bind(this);
  };

  componentDidMount() {
    const { match } = this.props;
    axios.get(`/api/product_search/?search=${match.params.search}`)
      .then((response) => {
        if(response.statusText === "OK") {
          const productsObject = JSON.parse(response.data.response.body);
          this.setState({ 
            products: productsObject.results.splice(0, 4),
            breadcumbs: productsObject.filters
          });
        }
      });
  }

  searchProducts = params => {
    axios.get(`/api/product_search/?search=${params}`)
      .then((response) => {
        if(response.statusText === "OK") {
          const productsObject = JSON.parse(response.data.response.body);
          this.setState({ 
            products: productsObject.results.splice(0, 4),
            breadcumbs: productsObject.filters
          });
        }
      });
  }

  onKeyDown = async e => {
    if (e.key === 'Enter') {
      await axios.get(`/api/product_search/?search=${e.target.value}`)
      .then((response) => {
        if(response.statusText === "OK") {
          const productsObject = JSON.parse(response.data.response.body);
          this.setState({ 
            products: productsObject.results.splice(0, 4),
            breadcumbs: productsObject.filters
          });
        }
      });
    }
  }

  getValues = params => {
    this.setState({query: params.target.value});
  }

  render() {
    const { query, products, breadcumbs } = this.state;
    return (
      <ProductsList 
        query={query}
        getValues={this.getValues} 
        searchProducts={this.searchProducts}
        products={products}
        breadcumbs={breadcumbs}
        onKeyDown={this.onKeyDown}
      />
    );
  }
}

export default ProductsListContainer;
