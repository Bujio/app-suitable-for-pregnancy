const router = require('express').Router();

const products = require('./products/routes');

router.use('/products', products);

module.exports = router;
