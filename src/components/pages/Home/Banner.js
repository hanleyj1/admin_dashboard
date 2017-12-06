import React from 'react';

const Banner = ({ appName, token }) => {
  if (token) {
    return null;
  }
  return (
    <div className="banner">
      <div className="container">
        <h1 className="logo-font">
          {appName}
        </h1>
        <p>The frontend for this demo was built on React and Redux, and the backend runs on Node, Express, and MongoDB. This simple web app demostrates user creation and authentication via JWT, account management, and NoSQL. Once an account has been created you can starting making new posts and adding comments to any existing post. You will also be able to edit your account settings by making updates to your account record.</p>
      </div>
    </div>
  );
};

export default Banner;
