var router = require('express').Router();
const instrumentController = require('../controllers/instrument');

router.route('/')
    .get(instrumentController.getInstruments)
    .post(instrumentController.createInstrument);

router.route('/:id')
    .get(instrumentController.getInstrument)
    .patch(instrumentController.updateInstrument)
    .delete(instrumentController.deleteInstrument);

module.exports = router;