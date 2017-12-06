import UserList from '../../Users/UserList';
import React from 'react';
import agent from '../../../agent';
import { connect } from 'react-redux';
import { CHANGE_TAB } from '../../../constants/actionTypes';
import { Link } from 'react-router-dom';


const LoggedOutView = props => {
  if (!props.currentUser) {
    return (
	    <div className="not-loggedin-wrapper">
	    	<div className="not-loggedin-content">
	    		<h3>You must be logged</h3>
	    		<div className="account-access-button">
					<Link to="/demos/admin/login" className="nav-link">
		            	Login
					</Link>
				</div>
				<div className="account-access-button">
					<Link to="/demos/admin/register" className="nav-link">
						Sign up
					</Link>
				</div>

	    	</div>
	    
	    </div>
    );
  }
  return null;
};

const LoggedInView = props => {
  if (props.currentUser) {
    return (
	    <div className="welcome container">
	    	<div className="row">
	    		<div className="col-md-6 col-sm-12 col-md-offset-3">
	    			<h2>Welcome</h2>
	    			<p>You are now logged in as an admin and able to access the other panels within this admin dashboard</p>
	    			<h4>Improvements to be added:</h4>

	    			<ul>
	    				<li>Add Loading Spinners</li>
	    				<li>Add Confirmation and Error Alerts</li>
		    			<li>Track Orders</li>
		    			<li>Add Customer Shipping and Billing Addresses</li>
		    			<li>Create Category Data Table</li>
		    			<li>Use Category table to auto populate as a select for product creation</li>
		    			<li>Add Customer Wish List</li>
		    			<li>Create Store Front</li>
	    			</ul>
	    		</div>
	    	
	    	</div>
	    </div>
	    
	    
    );
  }

  return null;
};



const mapStateToProps = state => ({
  ...state.userList,
  tags: state.home.tags,
  token: state.common.token
});

const mapDispatchToProps = dispatch => ({
  onTabClick: (tab, pager, payload) => dispatch({ type: CHANGE_TAB, tab, pager, payload })
});

const Homecontent = props => {
  return (
	  <div className="homepage-content">
			<LoggedOutView currentUser={props.currentUser} />
			<LoggedInView currentUser={props.currentUser} users={props.users} usersCount={props.usersCount}/>
	    </div>

      
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Homecontent);

