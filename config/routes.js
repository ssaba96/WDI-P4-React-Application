const router = require('express').Router();
const talents = require('../controllers/talents');
const auth = require('../controllers/auth');
const secureRoute = require('../lib/secureroute');

router.route('/talents')
  .get(talents.index)
  .post(secureRoute, talents.create);

router.route('/talents/:id')
  .get(talents.show)
  .put(secureRoute, talents.update)
  .delete(secureRoute, talents.delete);

router.post('/register', auth.register);
router.post('/login', auth.login);


module.exports = router;
