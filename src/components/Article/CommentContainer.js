import CommentInput from './CommentInput';
import CommentList from './CommentList';
import { Link } from 'react-router-dom';
import React from 'react';

const CommentContainer = props => {
  if (props.currentUser) {
    return (
      <div className="col-xs-12 col-md-8 offset-md-2">
      <CommentList
          comments={props.comments}
          slug={props.slug}
          currentUser={props.currentUser} />
        <div>
          <list-errors errors={props.errors}></list-errors>
          <CommentInput slug={props.slug} currentUser={props.currentUser} />
        </div>

        
      </div>
    );
  } else {
    return (
      <div className="col-xs-12 col-md-8 offset-md-2">
       

        <CommentList
          comments={props.comments}
          slug={props.slug}
          currentUser={props.currentUser} />
          
          <div className="comment-not-loggedin"><p>
          <Link to="http://charmcityjoe.com/demos/admin/login">Sign in</Link>
          &nbsp;or&nbsp;
          <Link to="http://charmcityjoe.com/demos/admin/register">sign up</Link>
          &nbsp;to add comments on this article.
        </p></div>
      </div>
    );
  }
};

export default CommentContainer;
