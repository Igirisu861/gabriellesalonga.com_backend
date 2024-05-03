const express = require('express');
const router = express.Router();

const {getPurchases,addArticles,crearPurchases,deletePurchases} = require('../controllers/purchasesController');

router.route('/').get(getPurchases).post(crearPurchases);
router.route('/:id').put(addArticles).delete(deletePurchases);

module.exports = router;