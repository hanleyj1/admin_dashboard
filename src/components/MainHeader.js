import React from 'react';
import { Link } from 'react-router-dom';


class Header extends React.Component {
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
		      <a className="navbar-brand" href="http://charmcityjoe.com">Charm City Joe</a>
		    </div>

		    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
		      <ul className="nav navbar-nav navbar-right">
		        <li className="first">
		        	<a href="http://charmcityjoe.com/">Home</a>
		        </li>
		        <li>
      				<a href="http://charmcityjoe.com/#about">About</a>
      			</li>
      			<li>
      				<a href="http://charmcityjoe.com/#demos">Demos</a>
      			</li>
      			<li>
      				<a href="http://charmcityjoe.com/resume">Resume</a>
      			</li>
      			<li className="last">
      				<a href="http://charmcityjoe.com/contact">Contact</a>
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
