import Productcontent from './Productcontent';
import React from 'react';
import agent from '../../../agent';
import { connect } from 'react-redux';
import {
  PRODUCTLIST_PAGE_LOADED,
  PRODUCTLIST_PAGE_UNLOADED

} from '../../../constants/actionTypes';

const Promise = global.Promise;

const mapStateToProps = state => ({
  ...state.catalog,
  appName: state.common.appName,
  token: state.common.token,
  currentUser: state.common.currentUser
});

const mapDispatchToProps = dispatch => ({

	onLoad: payload => dispatch({ type: PRODUCTLIST_PAGE_LOADED, payload }),
	onUnload: () =>
  		dispatch({  type: PRODUCTLIST_PAGE_UNLOADED })
});

class Products extends React.Component {
  componentWillMount() {
    this.props.onLoad(Promise.all([
      agent.ProductAdmin.productlist()
    ]));
  }
 
  componentWillUnmount() {
    this.props.onUnload();
  }

  render() {
    return (
      <div className="home-page">

        <div className="container page">
        	<div className="row">
            	<Productcontent appName={this.props.appName}
            currentUser={this.props.currentUser}/>
            </div>
        </div>

      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Products);
