

import { 
  ADD_TAG,
  USER_EDIT_PAGE_LOADED,
  REMOVE_TAG,
  ASYNC_START,
  USER_EDIT_SUBMITTED,
  USER_EDIT_PAGE_UNLOADED,
  UPDATE_FIELD_USER_EDIT,
  USERLIST_PAGE_LOADED,
  USERLIST_PAGE_UNLOADED
} from '../constants/actionTypes';

export default (state = {}, action) => {
  switch (action.type) {
	case USERLIST_PAGE_LOADED:
      return {
        ...state,
        users: action.payload[0]
      };
    case USERLIST_PAGE_UNLOADED:
      return {};
    case USER_EDIT_PAGE_LOADED:
      return {
        ...state,
        userid: action.payload ? action.payload[0].user[0].id : '',
        firstname: action.payload ? action.payload[0].user[0].firstname : '',
        lastname: action.payload ? action.payload[0].user[0].lastname : '',
        username: action.payload ? action.payload[0].user[0].username : '',
        email: action.payload ? action.payload[0].user[0].email : '',
        createdAt: action.payload ? action.payload[0].user[0].createdAt : '',
        updatedAt: action.payload ? action.payload[0].user[0].updatedAt : ''
      };
    case USER_EDIT_PAGE_UNLOADED:
      return {};
    case USER_EDIT_SUBMITTED:
      return {
        ...state,
        inProgress: null,
        errors: action.error ? action.payload.errors : null
      };
    case ASYNC_START:
      if (action.subtype === USER_EDIT_SUBMITTED) {
        return { ...state, inProgress: true };
      }
      break;
    case ADD_TAG:
      return {
        ...state,
        tagList: state.tagList.concat([state.tagInput]),
        tagInput: ''
      };
    case REMOVE_TAG:
      return {
        ...state,
        tagList: state.tagList.filter(tag => tag !== action.tag)
      };
    case UPDATE_FIELD_USER_EDIT:
      return { ...state, [action.key]: action.value };
    default:
      return state;
  }

  return state;
};
