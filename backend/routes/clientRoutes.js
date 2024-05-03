const express = require('express');
const router = express.Router();

const {getClientes,crearClientes,updateClientes,deleteClientes} = require('../controllers/clientsController');

router.route('/').get(getClientes).post(crearClientes);
router.route('/:id').put(updateClientes).delete(deleteClientes);

module.exports = router;