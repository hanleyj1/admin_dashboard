import React from 'react';
import { Link } from 'react-router-dom';
import agent from '../agent';
import { connect } from 'react-redux';
import { ARTICLE_FAVORITED, ARTICLE_UNFAVORITED } from '../constants/actionTypes';

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

const ArticlePreview = props => {
  const article = props.article;
  const favoriteButtonClass = article.favorited ?
    FAVORITED_CLASS :
    NOT_FAVORITED_CLASS;

  const handleClick = ev => {
    ev.preventDefault();
    if (article.favorited) {
      props.unfavorite(article.slug);
    } else {
      props.favorite(article.slug);
    }
  };

  return (
    <div className="article-preview">
      

      <Link to={`/demos/admin/article/${article.slug}`} className="preview-link">
        <h1>{article.title}</h1>
      </Link>
      <div className="article-meta">
        

        <div className="info">
        	<span>By: </span> 
          <Link className="author" to={`/demos/admin/@${article.author.username}`}>
            {article.author.username}
          </Link>
          <br />
          <span className="date">
            Published: {new Date(article.createdAt).toDateString()}
          </span>
        </div>

       
      </div>
        <p className="blurb">{article.description}</p>
        <Link to={`/article/${article.slug}`} className="preview-link">
        <span>Read more...</span>
        </Link>
        <ul className="tag-list">
          {
            article.tagList.map(tag => {
              return (
                <li className="tag-default tag-pill tag-outline" key={tag}>
                  {tag}
                </li>
              )
            })
          }
        </ul>
     
    </div>
  );
}

export default connect(() => ({}), mapDispatchToProps)(ArticlePreview);
