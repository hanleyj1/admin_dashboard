import React from 'react';
import { Link } from 'react-router-dom';
import agent from '../../../agent';
import { connect } from 'react-redux';
import { ARTICLE_FAVORITED, ARTICLE_UNFAVORITED } from '../../../constants/actionTypes';

const FAVORITED_CLASS = 'btn btn-sm btn-primary';
const NOT_FAVORITED_CLASS = 'btn btn-sm btn-outline-primary';

const mapDispatchToProps = dispatch => ({
  favorite: slug => dispatch({
    type: ARTICLE_FAVORITED,
    payload: agent.Articles.favorite(slug)
  }),
  unfavorite: slug => dispatch({
    type: ARTICLE_UNFAVORITED,
    payload: agent.Articles.unfavorite(slug)
  })
});

const ProductPreview = props => {
  const product = props.product;
  
  return (
    <div className="item-preview row">
    	<div className="column userid col-md-2 col-sm-3 col-xs-4">
			<Link className="product-link" to={`/demos/admin/product/${product.id}`}>{product.name}</Link>
		</div>
    	<div className="column username col-md-2 col-sm-3 col-xs-4">
			<Link className="product-link" to={`/demos/admin/product/${product.id}`}>{product.sku}</Link>
		</div>
		<div className="column email col-md-2 col-sm-3 hidden-xs">
			<Link className="product-link" to={`/demos/admin/product/${product.id}`}>{product.price}</Link>
		</div>
		<div className="column email col-md-2 col-sm-3 hidden-xs">
			<Link className="product-link" to={`/demos/admin/product/${product.id}`}>{product.stock}</Link>
		</div>
		<div className="column email col-md-2 hidden-sm hidden-xs">
			<Link className="product-link" to={`/demos/admin/product/${product.id}`}>{product.status}</Link>
		</div>
	 
           
    </div>
  );
}

export default connect(() => ({}), mapDispatchToProps)(ProductPreview);
