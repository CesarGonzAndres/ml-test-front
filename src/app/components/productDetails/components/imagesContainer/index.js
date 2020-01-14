import React, { PureComponent, Fragment } from 'react';
import Slider from "react-slick";

class ImagesContainer extends PureComponent {

  constructor(props) {
    super(props);
    this.state = {
      nav1: null,
      nav2: null
    };
  }

  async componentDidMount() {
    this.setState({ 
      nav1: this.slider1, 
      nav2: this.slider2
    });
  }

  render() {
    const { settings, images } = this.props;
    const { nav1, nav2 } = this.state;

    return (
      <Fragment>
        <Slider 
          asNavFor={nav2}
          slidesToShow={images.length}
          vertical={true}
          swipeToSlide={true}
          focusOnSelect={true}
          className="smSlide"
        >
          {images.map((image, index) => 
            <div key={index} className="item pointer">
              <img src={`http:${image}`} width="52px" height="45px" alt="preview" />
            </div>
          )}
        </Slider>
        <Slider 
          ref={slider => (this.slider2 = slider)} 
          asNavFor={nav1} className="bgSlide" 
          {...settings}
        >
          {images.map((image, index) => 
          <div key={index} className="item">
            <img className="bgSlide img-fluid" src={`http:${image}`} alt="preview" />
          </div>
          )}
        </Slider>
      </Fragment>
    );
  }
}

export default ImagesContainer;
