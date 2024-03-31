const { createLogger, format, transports } = require('winston');
const morgan = require('morgan');

// Setup logger
const logger = createLogger({
  format: format.simple(),
  transports: [new transports.Console()],
});

module.exports = logger;
