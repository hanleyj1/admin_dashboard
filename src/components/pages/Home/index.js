import Banner from './Banner';
import Homecontent from './Homecontent';
import React from 'react';
import Tags from './Tags';
import agent from '../../../agent';
import { connect } from 'react-redux';
import {
  HOME_PAGE_LOADED,
  HOME_PAGE_UNLOADED,
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
	onLoad: payload => dispatch({ type: HOME_PAGE_LOADED, payload }),
	onUnload: () =>
  		dispatch({  type: HOME_PAGE_UNLOADED })
});

class Home extends React.Component {
  componentWillMount() {
    this.props.onLoad(Promise.all([
      agent.Users.feed()
    ]));
  }
 
  componentWillUnmount() {
    this.props.onUnload();
  }

  render() {
    return (
      <div className="home-page">

        <Banner token={this.props.token} appName={this.props.appName} />

        <div className="container page">
        	<div className="row">
            	<Homecontent appName={this.props.appName}
            currentUser={this.props.currentUser}/>
            </div>
        </div>

      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
