import React, { Component } from 'react';
import {
	Link
} from 'react-router-dom';

class Demos extends Component {
  render() {
    return (
		<div id="demos_section" className="section container">
			<div className="row">
				<div className="col-xs-12">
					<div className="demo-wrapper">
						<h1>Demos</h1>
						<h3>User Signup and Login</h3>
						<p>This user signup and login demo is built on React and Redux, implementing JWT authentication.</p>
						<div className="demo-link">
							<a href="/demos/login/"><img src ="http://localhost:3000/details/img/myImage.png" alt="User signup and Login Demo"/></a>
						</div>
					</div>
				</div>
			</div>
		</div>    
    );
  }
}

export default Demos;
