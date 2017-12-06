import ArticleActions from './ArticleActions';
import { Link } from 'react-router-dom';
import React from 'react';

const ArticleMeta = props => {
  const article = props.article;
  return (
    <div className="article-meta">


      <div className="info">
      <span>By: </span>
        <Link to={`http://charmcityjoe.com/demos/admin/@${article.author.username}`} className="author">
          {article.author.username}
        </Link>
        <br />
        <span className="date">
         Posted:  {new Date(article.createdAt).toDateString()}
        </span>
      </div>

      <ArticleActions canModify={props.canModify} article={article} />
    </div>
  );
};

export default ArticleMeta;
