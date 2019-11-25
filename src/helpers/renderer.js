import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';

import Routes from '../client/Routes';
import htmltemplate from '../lib/html/template';

export default (req) => {
  const content = renderToString(
    <StaticRouter location={req.path}>
      <Routes />
    </StaticRouter>,
  );
  return htmltemplate(content);
};
