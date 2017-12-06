import React from 'react';
import agent from '../../../agent';
import ListErrors from '../../ListErrors';
import ProductSales from './ProductSales';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { 
	ADD_TAG,
  PRODUCT_EDIT_PAGE_LOADED,
  REMOVE_TAG,
  ASYNC_START,
  PRODUCT_EDIT_SUBMITTED,
  PRODUCT_EDIT_PAGE_UNLOADED,
  UPDATE_FIELD_PRODUCT_EDIT
   } from '../../../constants/actionTypes';
const Promise = global.Promise;
const mapStateToProps = state => ({
  ...state.product,
  currentUser: state.common.currentUser
});

const mapDispatchToProps = dispatch => ({
  onAddTag: () =>
    dispatch({ type: ADD_TAG }),
  onLoad: payload =>
    dispatch({ type: PRODUCT_EDIT_PAGE_LOADED, payload }),
  onRemoveTag: tag =>
    dispatch({ type: REMOVE_TAG, tag }),
  onSubmit: payload =>
    dispatch({ type: PRODUCT_EDIT_SUBMITTED, payload }),
  onUnload: payload =>
    dispatch({ type: PRODUCT_EDIT_PAGE_UNLOADED }),
  onUpdateField: (key, value) =>
    dispatch({ type: UPDATE_FIELD_PRODUCT_EDIT, key, value })
});

class Product extends React.Component {
	constructor() {
    super();

    const updateFieldEvent =
      key => ev => this.props.onUpdateField(key, ev.target.value);
    this.changeName = updateFieldEvent('name');
    this.changeDescription = updateFieldEvent('description');
    this.changePrice = updateFieldEvent('price');
    this.changeStock = updateFieldEvent('stock');
    this.changeStatus = updateFieldEvent('status');
    this.changeCategory= updateFieldEvent('category');

    this.watchForEnter = ev => {
      if (ev.keyCode === 13) {
        ev.preventDefault();
        this.props.onAddTag();
      }
    };

    this.removeTagHandler = tag => () => {
      this.props.onRemoveTag(tag);
    };

    this.submitForm = ev => {
      ev.preventDefault();
      const product = {
	    _id: this.props.productid,
        name: this.props.name,
        description: this.props.description,
        price: this.props.price,
        category: this.props.category,
        stock: this.props.stock,
        status: this.props.status
      };

	  console.log(product);
      const productid = { id: this.props.productid };
      const promise = 
        agent.ProductAdmin.modifyproduct(product);

      this.props.onSubmit(promise);
    };
  }
  componentWillMount() {
    this.props.onLoad(Promise.all([
      agent.ProductAdmin.getproduct(this.props.match.params.id)
    ]));
  }
  

  componentWillUnmount() {
    this.props.onUnload();
  }

  render() {
	
    if (!this.props.productid) {
      return <div className="user-preview"><h3>Loading Product Data...</h3></div>;
    }
    


    return (
		<div className="item-page">
			<div className="container page">
				<div className="row">
					<div className="col-md-2 item-nav">
						<ul className="nav nav-pills">
							<li className="active"><a className="admin-sub-menu" data-toggle="pill" href="#productoverview">Account Overview</a></li>
							<li><a className="admin-sub-menu" data-toggle="pill" href="#productedit">Product Edit</a></li>
						</ul>
					
					</div>
					<div className="item-header col-md-10">
						<h2>{this.props.name} - {this.props.sku}</h2>
					</div>
					<div className="item-content col-md-10">
						<div className="tab-content">
							<div id="productoverview" className="tab-pane fade in active row">
								
								<div className="product-info col-md-12">
									<h3>Product Overview</h3>
									<table>
										<tbody>
											<tr>
												<td>Product Name:</td><td>{this.props.name}</td>
											</tr>
											<tr>
												<td>Description:</td><td>{this.props.description}</td>
											</tr>
											<tr>
												<td>Price:</td><td>{this.props.price}</td>
											</tr>
											<tr>
												<td>Category:</td><td>{this.props.category}</td>
											</tr>
											<tr>
												<td>Stock:</td><td>{this.props.stock}</td>
											</tr>
											<tr>
												<td>Status</td><td>{this.props.status}</td>
											</tr>
										</tbody>
									</table>	
								</div>
								<div className="Product Sales col-md-12">
									<h3>Product Sales</h3>
										<ProductSales />
								</div>
							</div>
							<div id="productedit" className="tab-pane fade">
								<h3>Product Edit</h3>
								<div className="row">
					            <div className="col-md-10 offset-md-1 col-xs-12">
					
					              <ListErrors errors={this.props.errors}></ListErrors>
					
					              <form>
					                <fieldset>
										<div className="row">
											<div className="col-md-2">
												Name:
											</div>
											<div className="col-md-4">
												<fieldset className="form-group">
													<input
													className="form-control form-control-lg"
													type="text"
													placeholder="Article Title"
													value={this.props.name}
													onChange={this.changeName} />
												</fieldset>
											</div>
										</div>
										<div className="row">
											<div className="col-md-2">
												Description:
											</div>
											<div className="col-md-4">
												<fieldset className="form-group">
													<input
													  className="form-control"
													  type="text"
													  placeholder="What's this article about?"
													  value={this.props.description}
													  onChange={this.changeDescription} />
												</fieldset>
									  		</div>
									  	</div>
									  	<div className="row">
											<div className="col-md-2">
												Price:
											</div>
											<div className="col-md-4">
												<fieldset className="form-group">
													<input
													  className="form-control"
													  type="text"
													  placeholder="What's this article about?"
													  value={this.props.price}
													  onChange={this.changePrice} />
												</fieldset>
									  		</div>
									  	</div>
									  	<div className="row">
											<div className="col-md-2">
												Category:
											</div>
											<div className="col-md-4">
												<fieldset className="form-group">
													<input
													  className="form-control"
													  type="text"
													  placeholder="What's this article about?"
													  value={this.props.category}
													  onChange={this.changeCategory} />
												</fieldset>
									  		</div>
									  	</div>
									  	<div className="row">
											<div className="col-md-2">
												Stock:
											</div>
											<div className="col-md-4">
												<fieldset className="form-group">
													<input
													  className="form-control"
													  type="text"
													  placeholder="What's this article about?"
													  value={this.props.stock}
													  onChange={this.changeStock} />
												</fieldset>
									  		</div>
									  	</div>
									  	<div className="row">
											<div className="col-md-2">
												Status:
											</div>
											<div className="col-md-4">
												<fieldset className="form-group">
													<input
													  className="form-control"
													  type="text"
													  placeholder="What's this article about?"
													  value={this.props.status}
													  onChange={this.changeStatus} />
												</fieldset>
									  		</div>
									  	</div>

					                 
					
					                  <button
					                    className="btn btn-lg pull-xs-right btn-primary"
					                    type="button"
					                    disabled={this.props.inProgress}
					                    onClick={this.submitForm}>
					                    Update Product
					                  </button>
					
					                </fieldset>
					              </form>
					
					            </div>
					          </div>
								
							</div>
							
						</div>
					</div>
			
			    	
			    </div>
			</div>     
        </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Product);
