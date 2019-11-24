import React from 'react';
import { renderToString } from 'react-dom/server';
import htmltemplate from '../lib/html/template';

export default (req) => {
  const content = renderToString(<div className="sarath">Sarath</div>);
  return htmltemplate(content);
};
