const router = require('express').Router();

router.route('/products').get((req, res, next) =>
  res.json({
    message: 'GET all products',
  })
);

module.exports = router;
