const express = require('express');
const router = express.Router();

const {getPrints,crearPrints,updatePrints,deletePrints} = require('../controllers/printsController');

router.route('/').get(getPrints).post(crearPrints);
router.route('/:id').put(updatePrints).delete(deletePrints);

module.exports = router;