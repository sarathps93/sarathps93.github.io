import React, { useState } from 'react';

import Tab from './Tab';

const Tabs = (props) => {
  const [activeTab, setActiveTab] = useState(props.children[0].props.label);

  const handleTabNav = (label) => setActiveTab(label);
  return (
    <>
      <ul className="app-skills--tabs">
        {props.children.map((child) => (
          <Tab
            key={child.props.label}
            label={child.props.label}
            onClick={handleTabNav}
            activeTab={activeTab}
          />
        ))}
      </ul>
      <div className="app-tab--description">
        {props.children.map((child) => {
          if (child.props.label !== activeTab) return undefined;
          return child.props.children;
        })}
      </div>
    </>
  );
};

export default Tabs;
