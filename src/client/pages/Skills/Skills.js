import React from 'react';
import Card from '../../components/card/Card';
import contents from '../../../../contents';

const Skills = () => {
  return (
    <>
      <div className="app-skills-grid--container">
        {contents.skills.map((skill) => (
          <Card key={skill.label} label={skill.label} content={skill.content} />
        ))}
      </div>
    </>
  );
};

export default Skills;
