import React from 'react';
import { renderToString } from 'react-dom/server';

export default (req) => {
  const content = renderToString(<div>Sarath</div>);
  return `
    <html>
        <head></head>
        <body>
            <div id="root">${content}</div>
            <script src="client.js"></script>
        </body>
    </html>
    `;
};
