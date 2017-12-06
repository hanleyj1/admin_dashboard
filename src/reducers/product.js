import { 
	ASYNC_START,
	PRODUCT_EDIT_PAGE_LOADED,
	PRODUCT_EDIT_SUBMITTED,
	PRODUCT_EDIT_PAGE_UNLOADED,
	UPDATE_FIELD_PRODUCT_EDIT,
	CATALOG_PAGE_LOADED,
	CATALOG_PAGE_UNLOADED
} from '../constants/actionTypes';

export default (state = {}, action) => {
  switch (action.type) {
	 	  
    case CATALOG_PAGE_UNLOADED:
      return {};
    case PRODUCT_EDIT_PAGE_LOADED:
      return {
        ...state,
        productid: action.payload ? action.payload[0].product[0].id : '',
        name: action.payload ? action.payload[0].product[0].name : '',
        description: action.payload ? action.payload[0].product[0].description : '',
        price: action.payload ? action.payload[0].product[0].price : '',
        category: action.payload ? action.payload[0].product[0].category : '',
        stock: action.payload ? action.payload[0].product[0].stock : '',
        status: action.payload ? action.payload[0].product[0].status : '',
        sku: action.payload ? action.payload[0].product[0].sku : ''
      };
    case PRODUCT_EDIT_PAGE_UNLOADED:
      return {};
    case PRODUCT_EDIT_SUBMITTED:
      return {
        ...state,
        inProgress: null,
        errors: action.error ? action.payload.errors : null
      };
    case ASYNC_START:
      if (action.subtype === PRODUCT_EDIT_SUBMITTED) {
        return { ...state, inProgress: true };
      }
      break;
        case UPDATE_FIELD_PRODUCT_EDIT:
      return { ...state, [action.key]: action.value };
    default:
      return state;
  }

  return state;
};
