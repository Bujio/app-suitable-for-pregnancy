const express = require('express');
const logger = require('./config/logger');

const app = express();

app.get('/', (req, res, next) => res.send('Welcome to the API'));

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
