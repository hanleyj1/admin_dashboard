import UserPreview from './UserPreview';
import ListPagination from '../ListPagination';
import React from 'react';

const UserList = props => {
  if (!props.users) {
    return (
      <div className="user-preview">Loading Users...</div>
    );
  }

  if (props.users.length === 0) {
    return (
      <div className="user-preview">
        No users for display.
      </div>
    );
  }

  return (
    <div className="userlist-wrapper container">
    	<div className="row">
	    	<div className="column-header userid col-md-2 col-sm-3 col-xs-4">
				User ID
			</div>
	    	<div className="column-header username col-md-2 col-sm-3 col-xs-4">
				Username
			</div>
			<div className="column-header email col-md-2 col-sm-3 col-xs-4">
				User Email
			</div>
			<div className="column-header last-login col-md-2 col-sm-3 hidden-xs">
				Last Login
			</div>
			<div className="column-header createdAt col-md-2 col-sm-3 hidden-xs hidden-sm">
				Created At
			</div>
			
		 
	           
	    </div>
      {
        props.users.map(user => {
          return (
            <UserPreview user={user} key={user.id}/>
          );
        })
      }

      <ListPagination
        pager={props.pager}
        usersCount={props.usersCount}
        currentPage={props.currentPage} />
    </div>
  );
};

export default UserList;
