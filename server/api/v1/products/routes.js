const router = require('express').Router();
const controller = require('./controller');

router.route('/').post(controller.create).get(controller.all);

router
  .route('/:id')
  .get(controller.read)
  .put(controller.update)
  .delete(controller.delete);

module.exports = router;
