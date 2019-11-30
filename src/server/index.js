import express from 'express';

import logger from '../utils/logger';
import renderer from '../helpers/renderer';

const PORT = process.env.PORT || 8081;
const app = express();

app.use(express.static('build'));

app.get('*', (req, res) => {
  if (req.path !== '/') {
    res.redirect('/');
  }
  res.send(renderer(req));
});

app.listen(PORT, () => {
  logger.info(`Server listening on port ${PORT}`);
});
