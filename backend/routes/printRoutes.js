const express = require('express');
const router = express.Router();

const {getPrints,crearPrints,updatePrints,deletePrints, addSizes} = require('../controllers/printsController');

router.route('/').get(getPrints).post(crearPrints);
router.route('/:id').put(updatePrints).delete(deletePrints).post(addSizes);

module.exports = router;