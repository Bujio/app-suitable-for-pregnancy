const express = require('express');
const morgan = require('morgan')
const bodyParser = require('body-parser');
const api = require('./api/v1');

const logger = require('./config/logger');

// Init App
const app = express();

// Setup middleware

app.use(
  morgan('combined', { stream: { write: (message) => logger.info(message) } })
);

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.get('/', (req, res, next) => res.send('Welcome to the API'));

app.use('/api/v1', api);

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
