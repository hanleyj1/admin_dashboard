import React from 'react';
import agent from '../../../agent';
import ListErrors from '../../ListErrors';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { 
	ADD_TAG,
  USER_EDIT_PAGE_LOADED,
  REMOVE_TAG,
  ASYNC_START,
  USER_EDIT_SUBMITTED,
  USER_EDIT_PAGE_UNLOADED,
  UPDATE_FIELD_USER_EDIT
   } from '../../../constants/actionTypes';
const Promise = global.Promise;
const mapStateToProps = state => ({
  ...state.user,
  currentUser: state.common.currentUser
});

const mapDispatchToProps = dispatch => ({
  onAddTag: () =>
    dispatch({ type: ADD_TAG }),
  onLoad: payload =>
    dispatch({ type: USER_EDIT_PAGE_LOADED, payload }),
  onRemoveTag: tag =>
    dispatch({ type: REMOVE_TAG, tag }),
  onSubmit: payload =>
    dispatch({ type: USER_EDIT_SUBMITTED, payload }),
  onUnload: payload =>
    dispatch({ type: USER_EDIT_PAGE_UNLOADED }),
  onUpdateField: (key, value) =>
    dispatch({ type: UPDATE_FIELD_USER_EDIT, key, value })
});

class User extends React.Component {
	constructor() {
    super();

    const updateFieldEvent =
      key => ev => this.props.onUpdateField(key, ev.target.value);
    this.changeFirstname = updateFieldEvent('firstname');
    this.changeLastname = updateFieldEvent('lastname');
    this.changeEmail = updateFieldEvent('email');
    this.changeUsername = updateFieldEvent('username');

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
      const user = {
	    _id: this.props.userid,
        firstname: this.props.firstname,
        lastname: this.props.lastname,
        email: this.props.email,
        username: this.props.username
      };

	  
      const userid = { id: this.props.userid };
      const promise = 
        agent.UserAdmin.modifyuser(user);

		console.log(user._id);
      this.props.onSubmit(promise);
    };
  }
  componentWillMount() {
    this.props.onLoad(Promise.all([
      agent.UserAdmin.getuser(this.props.match.params.id)
    ]));
  }
  

  componentWillUnmount() {
    this.props.onUnload();
  }

  render() {
	
    if (!this.props.userid) {
    return (
      <div className="user-preview"><h3>Loading User Data...</h3></div>
    );
  }

      
    var header='';
    if(this.props.firstname && this.props.lastname){
	    header = this.props.firstname + ' ' + this.props.lastname;
    }
    else{
	    header = this.props.username;
    }

    return (
		<div className="item-page">
			<div className="container page">
				<div className="row">
					<div className="col-md-2 item-nav">
						<ul className="nav nav-pills">
							<li className="active"><a className="admin-sub-menu" data-toggle="pill" href="#accountoverview">Account Overview</a></li>
							<li><a className="admin-sub-menu" data-toggle="pill" href="#accountedit">Account Edit</a></li>
							<li><a className="admin-sub-menu" data-toggle="pill" href="#accountorders">Orders</a></li>
							<li><a className="admin-sub-menu" data-toggle="pill" href="#wishlist">Wishlist</a></li>
						</ul>
					
					</div>
					<div className="item-header col-md-10">
						<h2>{header}</h2>
					</div>
					<div className="col-md-10 item-content">
						<div className="tab-content">
							<div id="accountoverview" className="tab-pane fade in active row">
								<div className="col-md-12">
									<h3>Account Overview</h3>
								</div>
								<div className="user-info col-md-6">
									<table>
										<tbody>
											<tr>
												<td>First Name:</td><td>{this.props.firstname}</td>
											</tr>
											<tr>
												<td>Last Name:</td><td>{this.props.lastname}</td>
											</tr>
											<tr>
												<td>Email:</td><td>{this.props.email}</td>
											</tr>
											<tr>
												<td>Username:</td><td>{this.props.username}</td>
											</tr>
											<tr>
												<td>Account Created On:</td><td>{this.props.createdAt}</td>
											</tr>
											<tr>
												<td>Last login</td><td>{this.props.firstname}</td>
											</tr>
										</tbody>
									</table>	
								</div>
								
							</div>
							<div id="accountedit" className="tab-pane fade">
								<h3>Account Edit</h3>
								<div className="row">
					            <div className="col-md-10 offset-md-1 col-xs-12">
					
					              <ListErrors errors={this.props.errors}></ListErrors>
					
					              <form>
					                <fieldset>
										<div className="row">
											<div className="col-md-2">
												First Name:
											</div>
											<div className="col-md-4">
												<fieldset className="form-group">
													<input
													className="form-control form-control-lg"
													type="text"
													placeholder=""
													value={this.props.firstname}
													onChange={this.changeFirstname} />
												</fieldset>
											</div>
										</div>
										<div className="row">
											<div className="col-md-2">
												Last Name:
											</div>
											<div className="col-md-4">
												<fieldset className="form-group">
													<input
													  className="form-control"
													  type="text"
													  placeholder=""
													  value={this.props.lastname}
													  onChange={this.changeLastname} />
												</fieldset>
									  		</div>
									  	</div>
									  	<div className="row">
											<div className="col-md-2">
												Email:
											</div>
											<div className="col-md-4">
												<fieldset className="form-group">
													<input
													  className="form-control"
													  type="text"
													  placeholder=""
													  value={this.props.email}
													  onChange={this.changeEmail} />
												</fieldset>
									  		</div>
									  	</div>
									  	<div className="row">
											<div className="col-md-2">
												Username:
											</div>
											<div className="col-md-4">
												<fieldset className="form-group">
													<input
													  className="form-control"
													  type="text"
													  placeholder=""
													  value={this.props.username}
													  onChange={this.changeUsername} />
												</fieldset>
									  		</div>
									  	</div>

					                 
					
					                  <button
					                    className="btn btn-lg pull-xs-right btn-primary"
					                    type="button"
					                    disabled={this.props.inProgress}
					                    onClick={this.submitForm}>
					                    Update Account
					                  </button>
					
					                </fieldset>
					              </form>
					
					            </div>
					          </div>
								
							</div>
							<div id="accountorders" className="tab-pane fade">
								<h3>Orders</h3>
								<p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.</p>
							</div>
							<div id="wishlist" className="tab-pane fade">
								<h3>Wishlist</h3>
								<p>Eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
							</div>
						</div>
					</div>
								    	
			    </div>
			</div>     
        </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(User);
