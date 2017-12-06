import React, { Component } from 'react';
import About from '../sections/about';
import Demos from '../sections/demos';

class Homepage extends Component {
  render() {
    return (
		<div className="container-fluid" id="home">
			<About />
			<Demos />      
      
		</div>
    );
  }
}

export default Homepage;
