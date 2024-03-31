const express = require('express');
const morgan = require('morgan');
const api = require('./api');

const logger = require('./config/logger');

// Init App
const app = express();

// Setup middleware

app.use(
  morgan('combined', { stream: { write: (message) => logger.info(message) } })
);

app.get('/', (req, res, next) => res.send('Welcome to the API'));

app.use('/api', api);

// No route fount handler
app.use((req, res, next) => {
  const message = 'Route not fount';
  const statusCode = 404;
  logger.warn(message);
  res.status(statusCode);
  res.json({
    message,
  });
});

// Error handler
app.use((err, req, res, next) => {
  const { statusCode = 500, message } = err;
  logger.error(message);
  res.status(statusCode);
  res.json({
    message,
  });
});

module.exports = app;
