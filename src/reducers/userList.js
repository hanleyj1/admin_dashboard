import {
  ARTICLE_FAVORITED,
  ARTICLE_UNFAVORITED,
  SET_PAGE,
  APPLY_TAG_FILTER,
  USERLIST_PAGE_LOADED,
  USERLIST_PAGE_UNLOADED,
  CHANGE_TAB,
  PROFILE_PAGE_LOADED,
  PROFILE_PAGE_UNLOADED,
  PROFILE_FAVORITES_PAGE_LOADED,
  PROFILE_FAVORITES_PAGE_UNLOADED
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
    case USERLIST_PAGE_LOADED:
      return {
        ...state,
        pager: action.pager,
        users: action.payload[0].users,
        usersCount: action.payload[0].usersCount,
        currentPage: 0,
        tab: action.tab
      };
    case USERLIST_PAGE_UNLOADED:
      return {};
    case CHANGE_TAB:
      return {
        ...state,
        pager: action.pager,
        users: action.payload.users,
        usersCount: action.payload.usersCount,
        tab: action.tab,
        currentPage: 0,
        tag: null
      };
    case PROFILE_PAGE_LOADED:
    case PROFILE_FAVORITES_PAGE_LOADED:
      return {
        ...state,
        pager: action.pager,
        users: action.payload[1].users,
        usersCount: action.payload[1].usersCount,
        currentPage: 0
      };
    case PROFILE_PAGE_UNLOADED:
    case PROFILE_FAVORITES_PAGE_UNLOADED:
      return {};
    default:
      return state;
  }
};
