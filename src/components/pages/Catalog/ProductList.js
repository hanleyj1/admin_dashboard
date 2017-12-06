import ProductPreview from './ProductPreview';
import ListPagination from '../../ListPagination';
import React from 'react';

const ProductList = props => {
  if (!props.products) {
    return (
      <div className="user-preview">Loading Products...</div>
    );
  }

  if (props.products.length === 0) {
    return (
      <div className="user-preview">
        No users for display.
      </div>
    );
  }

  return (
    <div className="userlist-wrapper container">
    	<div className="row column-header">
	    	<div className="col-md-2 col-sm-3 col-xs-4">
				Product Name
			</div>
	    	<div className="col-md-2 col-sm-3 col-xs-4">
				SKU
			</div>
			<div className="col-md-2 col-sm-3 col-xs-4">
				Price
			</div>
			<div className=" col-md-2 col-sm-3 hidden-xs">
				Stock
			</div>
			<div className="col-md-2 col-sm-3 hidden-xs hidden-sm">
				Status
			</div>
			
		 
	           
	    </div>
      {
        props.products.map(product => {
          return (
            <ProductPreview product={product} key={product.id}/>
          );
        })
      }

      <ListPagination
        pager={props.pager}
        productsCount={props.productsCount}
        currentPage={props.currentPage} />
    </div>
  );
};

export default ProductList;
