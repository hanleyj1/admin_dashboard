import DeleteButton from './DeleteButton';
import { Link } from 'react-router-dom';
import React from 'react';

const Comment = props => {
  const comment = props.comment;
  const show = props.currentUser &&
    props.currentUser.username === comment.author.username;
  return (
    <div className="card article-comment">
      
      <div className="card-footer">
        &nbsp;
        <Link
          to={`http://charmcityjoe.com/demos/admin/@${comment.author.username}`}
          className="comment-author">
          {comment.author.username}
        </Link>
        <span> - </span>
        <span className="date-posted">
          {new Date(comment.createdAt).toDateString()}
        </span>
        <DeleteButton show={show} slug={props.slug} commentId={comment.id} />
      </div>
      <div className="card-block">
        <p className="card-text">{comment.body}</p>
      </div>
    </div>
  );
};

export default Comment;
