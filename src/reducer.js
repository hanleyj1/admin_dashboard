import article from './reducers/article';
import articleList from './reducers/articleList';
import user from './reducers/user';
import userList from './reducers/userList';
import product from './reducers/product';
import productList from './reducers/productList';


import auth from './reducers/auth';
import { combineReducers } from 'redux';
import common from './reducers/common';
import editor from './reducers/editor';
import home from './reducers/home';
import profile from './reducers/profile';
import settings from './reducers/settings';
import { routerReducer } from 'react-router-redux';

export default combineReducers({
  article,
  articleList,
  userList,
  user,
  auth,
  common,
  editor,
  product,
  productList,
  home,
  profile,
  settings,
  router: routerReducer
});
