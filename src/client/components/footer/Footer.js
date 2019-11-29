import React from 'react';

import CopyRightSvg from '../../../assets/svg/CopyRight';
import contents from '../../../../contents';

const Footer = () => {
  return (
    <div className="app--footer">
      <div className="app-footer--copyright">
        <CopyRightSvg />
        <div>
          {contents.name}
          <br />
          <span className="app-footer--builtinfo">{contents.copyRight}</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
