import ProductList from './ProductList';
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
	    <div className="homepage">
	    	<div className="account-list">
	    		<ProductList
			        pager={props.pager}
			        products={props.products}
			        loading={props.loading}
			        productsCount={props.productsCount}
			        currentPage={props.currentPage} />
	    	</div>
	    </div>
	    
	    
    );
  }

  return null;
};



const mapStateToProps = state => ({
  ...state.productList,
  tags: state.home.tags,
  token: state.common.token
});

const mapDispatchToProps = dispatch => ({
  onTabClick: (tab, pager, payload) => dispatch({ type: CHANGE_TAB, tab, pager, payload })
});

const Usercontent = props => {
  return (
	  <div className="homepage-content">
			<LoggedOutView currentUser={props.currentUser} />
			<LoggedInView currentUser={props.currentUser} products={props.products} productsCount={props.productsCount}/>
	    </div>

      
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Usercontent);

