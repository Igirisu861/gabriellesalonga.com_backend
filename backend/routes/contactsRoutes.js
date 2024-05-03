const express = require('express');
const router = express.Router();

const {getContactos,crearContactos,updateContactos,deleteContactos} = require('../controllers/contactsController');

router.route('/').get(getContactos).post(crearContactos);
router.route('/:id').put(updateContactos).delete(deleteContactos);

module.exports = router;