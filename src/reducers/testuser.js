
import {
  USER_PAGE_LOADED, 
  USER_PAGE_UNLOADED
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
        case USER_PAGE_LOADED:
      return {
        ...state,
         user: action.payload[0].user,
        usersCount: action.payload[0].usersCount
      };
        default:
      return state;
  }
};
