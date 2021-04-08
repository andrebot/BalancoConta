const express = require('express');
const helmet = require('helmet');
const serverConfig = require('./config/server');
const logger = require('./helpers/logger');
const app = express();

app.use(helmet());
app.use(express.static(`${__dirname}/public`));
app.listen(serverConfig.PORT, () => {
  logger.info(`Listening to port ${serverConfig.PORT}`);
});
