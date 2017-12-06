import Usercontent from './Usercontent';
import React from 'react';
import agent from '../../../agent';
import { connect } from 'react-redux';
import {
  USERLIST_PAGE_LOADED,
  USERLIST_PAGE_UNLOADED,
  APPLY_TAG_FILTER
} from '../../../constants/actionTypes';

const Promise = global.Promise;

const mapStateToProps = state => ({
  ...state.home,
  appName: state.common.appName,
  token: state.common.token,
  currentUser: state.common.currentUser
});

const mapDispatchToProps = dispatch => ({
  	onClickTag: (tag, pager, payload) =>
    	dispatch({ type: APPLY_TAG_FILTER, tag, pager, payload }),
	onLoad: payload => dispatch({ type: USERLIST_PAGE_LOADED, payload }),
	onUnload: () =>
  		dispatch({  type: USERLIST_PAGE_UNLOADED })
});

class Users extends React.Component {
  componentWillMount() {
    this.props.onLoad(Promise.all([
      agent.UserAdmin.userlist()
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
        	{this.props.usersCount}
            	<Usercontent appName={this.props.appName}
            currentUser={this.props.currentUser}/>
            </div>
        </div>

      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users);
