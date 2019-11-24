import express from 'express';

import logger from '../utils/logger';

const PORT = process.env.PORT || 8081;
const app = express();

app.listen(PORT, () => {
  logger.info(`Server listening on port ${PORT}`);
});
