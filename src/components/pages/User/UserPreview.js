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

const UserPreview = props => {
  const user = props.user;
  
  return (
    <div className="item-preview row">
    	<div className="column userid col-md-2 col-sm-3 col-xs-4">
			<Link className="user-link" to={`/demos/admin/user/${user.id}`}>{user.id}</Link>
		</div>
    	<div className="column username col-md-2 col-sm-3 col-xs-4">
			<Link className="user-link" to={`/demos/admin/user/${user.id}`}>{user.username}</Link>
		</div>
		<div className="column email col-md-2 col-sm-3 col-xs-4">
			<Link className="user-link" to={`/demos/admin/user/${user.id}`}>{user.email}</Link>
		</div>
		<div className="column last-login col-md-2 col-sm-3 hidden-xs">
			{user.lastLogin}
		</div>
		<div className="column createdAt col-md-2 hidden-sm hidden-xs">
			{user.createdAt}
		</div>
		
	 
           
    </div>
  );
}

export default connect(() => ({}), mapDispatchToProps)(UserPreview);
