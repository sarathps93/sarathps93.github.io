import React from 'react';

import Tabs from '../../components/tabs/Tabs';
import contents from '../../../../contents';

const Skills = () => {
  return (
    <>
      <div className="app-skills-image--container">
        {
          contents.skillsImages.map((path) => (
            <img key={path} width="30px" height="30px" src={path} alt="skills" />
          ))
        }
      </div>
      <Tabs>
        {contents.skills.map((skill) => {
          return (
            <div key={skill.label} label={skill.label}>
              {skill.contents.map((content) => (
                <div key={content.label}>
                  <h4>{content.label}</h4>
                </div>
              ))}
            </div>
          );
        })}
      </Tabs>
    </>
  );
};

export default Skills;
