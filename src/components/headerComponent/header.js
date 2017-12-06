import React, { Component } from 'react';
import {
	Link
} from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <header>
      	<nav className="navbar navbar-default" >
		  <div className="container-fluid">

		    <div className="navbar-header">
		      <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
		        <span className="sr-only">Toggle navigation</span>
		        <span className="icon-bar"></span>
		        <span className="icon-bar"></span>
		        <span className="icon-bar"></span>
		      </button>
		      <a className="navbar-brand" href="#">Charm City Joe</a>
		    </div>

		    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
		      <ul className="nav navbar-nav navbar-right">
		        <li className="first">
		        	<a href="#">Home</a>
		        </li>
		        <li>
      				<a href="#">About</a>
      			</li>
      			<li>
      				<a href="#">Demos</a>
      			</li>
      			<li>
      				<Link to="/Resume">Contact</Link>
      			</li>
      			<li className="last">
      				<Link to="/Contact">Contact</Link>
      			</li>

		      </ul>
		    </div>
		  </div>
		</nav>
      </header>
    );
  }
}

export default Header;
