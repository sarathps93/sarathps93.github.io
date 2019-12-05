import React from 'react';

import { NavLink } from 'react-router-dom';

const Card = (props) => {
  const { label, content, link } = props;
  const createMarkup = (htmlText) => ({ __html: htmlText });
  return (
    <div className="app--card">
      <div className="app-card--label">
        <span>{label}</span>
      </div>
      <div
        className="app-card--contents"
        dangerouslySetInnerHTML={createMarkup(content)}
      />
      <NavLink to="/">Find out more</NavLink>
    </div>
  );
};

export default Card;
