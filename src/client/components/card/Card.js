import React from 'react';

const Card = (props) => {
  const { label, content } = props;
  return (
    <div className="app--card">
      <div className="app-card--label">
        <span>{label}</span>
      </div>
      <div className="app-card--contents">
        <ul>
          {content.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Card;
