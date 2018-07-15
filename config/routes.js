const router = require('express').Router();
const talent = require('../controllers/talent');
const auth = require('../controllers/auth');
const secureRoute = require('../lib/secureRoute');

router.route('/talent')
  .get(talent.index)
  .post(secureRoute, talent.create);

router.route('/talent/:id')
  .get(talent.show)
  .put(secureRoute, talent.update)
  .delete(secureRoute, talent.delete);

router.post('/register', auth.register);
router.post('/login', auth.login);

module.exports = router;
