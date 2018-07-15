const Talent = require('../models/talent');

function indexRoute(req, res, next) {
  Talent.find()
    .populate('knownAssociates')
    .then(talents => res.json(talents))
    .catch(next);
}

function showRoute(req, res, next) {
  Talent.findById(req.params.id)
    .populate('knownAssociates')
    .then(talent => res.json(talent))
    .catch(next);
}

function createRoute(req, res, next) {
  Talent.create(req.body)
    .then(talent => res.status(201).json(talent))
    .catch(next);
}

function updateRoute(req, res, next) {
  Talent.findById(req.params.id)
    .then(talent => talent.set(req.body))
    .then(talent => talent.save())
    .then(talent => res.json(talent))
    .catch(next);
}

function deleteRoute(req, res, next) {
  Talent.findById(req.params.id)
    .then(talent => talent.remove())
    .then(() => res.sendStatus(204))
    .catch(next);
}

module.exports = {
  index: indexRoute,
  show: showRoute,
  create: createRoute,
  update: updateRoute,
  delete: deleteRoute
};
