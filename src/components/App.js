import agent from '../agent';
import Header from './Header';
import MainHeader from './MainHeader';
import InnerNav from './InnerNav';
import React from 'react';
import { connect } from 'react-redux';
import { APP_LOAD, REDIRECT } from '../constants/actionTypes';
import { Route, Switch } from 'react-router-dom';

import Home from '../components/pages/Home';
import Login from '../components/pages/Login';
import Register from '../components/Register';
import Users from '../components/pages/User/Index';
import User from '../components/pages/User/User';
import UserEdit from '../components/pages/User/Edit';
import Orders from '../components/pages/Orders/Index';
import Catalog from '../components/pages/Catalog/Index';
import Product from '../components/pages/Catalog/Product';
import ProductEdit from '../components/pages/Catalog/Edit';
import AddProduct from '../components/pages/Catalog/AddProduct';

import Editor from '../components/Editor';


import Profile from '../components/Profile';
import ProfileFavorites from '../components/ProfileFavorites';

import Settings from '../components/Settings';
import { store } from '../store';
import { push } from 'react-router-redux';

const mapStateToProps = state => {
  return {
    appLoaded: state.common.appLoaded,
    appName: state.common.appName,
    currentUser: state.common.currentUser,
    redirectTo: state.common.redirectTo
  }};

const mapDispatchToProps = dispatch => ({
  onLoad: (payload, token) =>
    dispatch({ type: APP_LOAD, payload, token, skipTracking: true }),
  onRedirect: () =>
    dispatch({ type: REDIRECT })
});

class App extends React.Component {
  componentWillReceiveProps(nextProps) {
    if (nextProps.redirectTo) {
      // this.context.router.replace(nextProps.redirectTo);
      store.dispatch(push(nextProps.redirectTo));
      this.props.onRedirect();
    }
  }

  componentWillMount() {
    const token = window.localStorage.getItem('jwt');
    if (token) {
      agent.setToken(token);
    }

    this.props.onLoad(token ? agent.Auth.current() : null, token);
  }

  render() {
    if (this.props.appLoaded) {
      return (
        <div>
        	
        	<div className="demo-wrapper">
        		<div className="demo-container">
          <Header
            appName={this.props.appName}
            currentUser={this.props.currentUser} />
            <InnerNav currentUser={this.props.currentUser} />
            <Switch>
            <Route exact path="/demos/admin/" component={Home}/>
            <Route path="/demos/admin/login" component={Login} />
            <Route path="/demos/admin/register" component={Register} />
            <Route path="/demos/admin/editor/:slug" component={Editor} />
            <Route path="/demos/admin/editor" component={Editor} />
            <Route path="/demos/admin/users" component={Users} />
			<Route path="/demos/admin/user/:id" component={User} />
			<Route path="/demos/admin/useredit/edit/:id" component={UserEdit} />
            <Route path="/demos/admin/settings" component={Settings} />
            <Route path="/demos/admin/@:username/favorites" component={ProfileFavorites} />
            <Route path="/demos/admin/@:username" component={Profile} />
            <Route path="/demos/admin/addproduct" component={AddProduct} />
            <Route path="/demos/admin/catalog" component={Catalog} />
			<Route path="/demos/admin/product/:id" component={Product} />
			<Route path="/demos/admin/catalog/productedit/:id" component={ProductEdit} />
	

            
            </Switch>
            </div>
            </div>
        </div>
      );
    }
    return (
      <div>
        <Header
          appName={this.props.appName}
          currentUser={this.props.currentUser} />
      </div>
    );
  }
}

// App.contextTypes = {
//   router: PropTypes.object.isRequired
// };

export default connect(mapStateToProps, mapDispatchToProps)(App);
