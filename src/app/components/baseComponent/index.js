import React, { PureComponent } from 'react';

import BaseComponent from './layout';

class BaseComponentContainer extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { 
      query: "",
      loading: false,
      breadcumbs: [],
      redirect: false 
    };
  };

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

  render() {
    const { query, redirect } = this.state;
    return (
      <BaseComponent 
        query={query}
        getValues={this.getValues}
        onKeyDown={this.onKeyDown}
        redirect={redirect}
      />
    );
  }
}

export default BaseComponentContainer;
