import React from 'react';

const Tab = (props) => {
  const { label, onClick, activeTab } = props;
  const handleOnClick = () => {
    onClick(label);
  };
  let className = 'app-tabItem';
  if (activeTab === label) {
    className += ' app-tabItem--active';
  }
  return (
    <li onClick={handleOnClick} role="presentation" className={className}>
      {label}
      <span className="app-tab-active--icon" />
    </li>
  );
};

export default Tab;
