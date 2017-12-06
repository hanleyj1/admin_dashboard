import {
  ARTICLE_FAVORITED,
  ARTICLE_UNFAVORITED,
  SET_PAGE,
  APPLY_TAG_FILTER,
  PRODUCTLIST_PAGE_LOADED,
  PRODUCTLIST_PAGE_UNLOADED

} from '../constants/actionTypes';

export default (state = {}, action) => {
  switch (action.type) {
    /*case ARTICLE_FAVORITED:
    case ARTICLE_UNFAVORITED:
      return {
        ...state,
        users: state.users.map(user => {
          if (article.slug === action.payload.article.slug) {
            return {
              ...article,
              favorited: action.payload.article.favorited,
              favoritesCount: action.payload.article.favoritesCount
            };
          }
          return article;
        })
      }; */
    case SET_PAGE:
      return {
        ...state,
        users: action.payload.users,
        usersCount: action.payload.usersCount,
        currentPage: action.page
      };
    case APPLY_TAG_FILTER:
      return {
        ...state,
        pager: action.pager,
        users: action.payload.users,
        usersCount: action.payload.usersCount,
        tab: null,
        tag: action.tag,
        currentPage: 0
      };
    case PRODUCTLIST_PAGE_LOADED:
    //console.log('CATALOG_PAGE_LOADED');
      return {
         ...state,
        pager: action.pager,
        products: action.payload[0].products,
        productsCount: action.payload[0].productsCount,
        currentPage: 0,
        tab: action.tab
      };
    case PRODUCTLIST_PAGE_UNLOADED:
      return {};
        default:
      return state;
  }
};
