import React from 'react';
import { Link } from 'react-router-dom';
const LoggedInView = props => {
  if (props.currentUser) {
    return (
	    <div className="containter">
	    	<div className="row">
	    		<div className="col-md-6 col-sm-12 col-md-offset-3">
	    			<ul className="nav nav-tabs">
						<li><Link className="user-list-link" to={`/demos/admin/`}>Home</Link></li>
						<li><Link className="user-list-link" to={`/demos/admin/users`}>User Accounts</Link></li>
						<li><Link className="product-list-link" to={`/demos/admin/catalog`}>Products</Link></li>
						<li><Link className="order-list-link" to={`/demos/admin/addproduct`}>Add Product</Link></li>
					</ul>
	    		</div>
	    	</div>
	    </div>
      
    );
  }

  return null;
};

class InnerNav extends React.Component {
  render() {
    return (

		<LoggedInView currentUser={this.props.currentUser} />

    );
  }
}

export default InnerNav;
