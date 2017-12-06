import React from 'react';
import agent from '../../../agent';
import ListErrors from '../../ListErrors';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {
	ASYNC_START,
	PRODUCT_EDIT_PAGE_LOADED,
	PRODUCT_EDIT_SUBMITTED,
	PRODUCT_EDIT_PAGE_UNLOADED,
	UPDATE_FIELD_PRODUCT_EDIT
} from '../../../constants/actionTypes';

const mapStateToProps = state => ({
  ...state.product
});

const mapDispatchToProps = dispatch => ({
  onLoad: payload =>
    dispatch({ type: PRODUCT_EDIT_PAGE_LOADED, payload }),
  onSubmit: payload =>
    dispatch({ type: PRODUCT_EDIT_SUBMITTED, payload }),
  onUnload: payload =>
    dispatch({ type: PRODUCT_EDIT_PAGE_UNLOADED }),
  onUpdateField: (key, value) =>
    dispatch({ type: UPDATE_FIELD_PRODUCT_EDIT, key, value })
});

class AddProduct extends React.Component {
  constructor() {
    super();

    const updateFieldEvent =
      key => ev => this.props.onUpdateField(key, ev.target.value);
    this.changeName = updateFieldEvent('name');
    this.changeDescription = updateFieldEvent('description');
    this.changePrice = updateFieldEvent('price');
    this.changeStock = updateFieldEvent('stock');
    this.changeStatus = updateFieldEvent('status');
	this.changeCategory = updateFieldEvent('category');
	
    this.watchForEnter = ev => {
      if (ev.keyCode === 13) {
        ev.preventDefault();
        this.props.onAddTag();
      }
    };

    this.submitForm = ev => {
      ev.preventDefault();
      const product = {
        name: this.props.name,
        description: this.props.description,
        price: this.props.price,
        stock: this.props.stock,
        status: this.props.status
      };
	  console.log(product);
      const promise = agent.ProductAdmin.addproduct(product);

      this.props.onSubmit(promise);
    };
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.slug !== nextProps.match.params.slug) {
      if (nextProps.match.params.slug) {
        this.props.onUnload();
        return this.props.onLoad(agent.UserAdmin.getproduct(this.props.match.params.productid));
      }
      this.props.onLoad(null);
    }
  }

  componentWillMount() {
    if (this.props.match.params.slug) {
      return this.props.onLoad(agent.UserAdmin.getproduct(this.props.match.params.productid));
    }
    this.props.onLoad(null);
  }

  componentWillUnmount() {
    this.props.onUnload();
  }

  render() {
    return (
      <div className="editor-page">
        <div className="container page">
          <div className="row">
					            <div className="col-md-6 col-md-offset-3 col-sm-6 col-sm-offset-3 col-xs-12">
					
					              <ListErrors errors={this.props.errors}></ListErrors>
					
					              <form>
					                <fieldset>
										<div className="row">
											<div className="">
												Product Name:
											</div>
											<div className="">
												<fieldset className="form-group">
													<input
													className="form-control form-control-lg"
													type="text"
													placeholder=""
													value={this.props.name}
													onChange={this.changeName} />
												</fieldset>
											</div>
										</div>
										<div className="row">
											<div className="">
												Product Description:
											</div>
											<div className="">
												<fieldset className="form-group">
													<input
													  className="form-control"
													  type="text"
													  placeholder=""
													  value={this.props.description}
													  onChange={this.changeDescription} />
												</fieldset>
									  		</div>
									  	</div>
									  	<div className="row">
											<div className="">
												Price:
											</div>
											<div className="">
												<fieldset className="form-group">
													<input
													  className="form-control"
													  type="text"
													  placeholder=""
													  value={this.props.price}
													  onChange={this.changePrice} />
												</fieldset>
									  		</div>
									  	</div>
									  	<div className="row">
											<div className="">
												Product Category:
											</div>
											<div className="">
												<fieldset className="form-group">
													<input
													  className="form-control"
													  type="text"
													  placeholder=""
													  value={this.props.category}
													  onChange={this.changeCategory} />
												</fieldset>
									  		</div>
									  	</div>
									  	<div className="row">
											<div className="">
												How much in stock?:
											</div>
											<div className="">
												<fieldset className="form-group">
													<input
													  className="form-control"
													  type="text"
													  placeholder=""
													  value={this.props.stock}
													  onChange={this.changeStock} />
												</fieldset>
									  		</div>
									  	</div>
									  	<div className="row">
											<div className="">
												Available for sale?:
											</div>
											<div className="">
												<fieldset className="form-group">
													<input
													  className="form-control"
													  type="text"
													  placeholder=""
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
					                    Add Product
					                  </button>
					
					                </fieldset>
					              </form>
					
					            </div>
					          </div>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddProduct);
