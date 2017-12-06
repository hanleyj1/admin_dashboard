import React from 'react';
import { Link } from 'react-router-dom';

const LoggedOutView = props => {
  if (!props.currentUser) {
    return (
	    <ul className="nav navbar-nav navbar-right">
			<li className="nav-item">
	          <Link to="/demos/admin/" className="nav-link">
	            Home
	          </Link>
	        </li>
	
	        <li className="nav-item">
	          <Link to="/demos/admin/login" className="nav-link">
	            Sign in
	          </Link>
	        </li>
	
	        <li className="nav-item">
	          <Link to="/demos/admin/register" className="nav-link">
	            Sign up
	          </Link>
	        </li>
		</ul>
    );
  }
  return null;
};

const LoggedInView = props => {
  if (props.currentUser) {
	   var header='';
	if(props.currentUser.firstname && props.currentUser.lastname){
	    header = props.currentUser.firstname + ' ' + props.currentUser.lastname;
	}
	else{
	    header = props.currentUser.username;
	}
    return (
      <ul className="nav navbar-nav navbar-right">

        <li className="nav-item">
          <h5>Logged in as: {header}</h5>
        </li>
      </ul>
    );
  }

  return null;
};

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
		      <a className="navbar-brand" href="/demos/admin/">Admin Dashboard</a>
		    </div>

		    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
				<LoggedOutView currentUser={this.props.currentUser} />

				<LoggedInView currentUser={this.props.currentUser} />
		    </div>
		  </div>
		</nav>
      </header>
    );
  }
}

export default Header;
