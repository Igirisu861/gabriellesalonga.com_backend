const asyncHandler = require('express-async-handler');
const Cliente = require('../models/clientsModel');

const getClientes = asyncHandler(async(req,res)=>{
    const clientes = await Cliente.find();
    res.status(200).json(clientes);
})

const crearClientes = asyncHandler(async(req,res) => {
    const { name, last_name, email, phone, address } = req.body;

    if (!name || !last_name || !email || !phone || !address) {
        res.status(400);
        throw new Error('Please insert all your data');
    }
    const existingCliente = await Cliente.findOne({ email });

    if (existingCliente) {
        res.status(400);
        throw new Error('Email already exists');
    }
    const cliente = await Cliente.create({
        name,
        last_name,
        email,
        phone,
        address
    });

    res.status(201).json(cliente);
});

const updateClientes = asyncHandler(async (req,res) => {
    const cliente = await Cliente.findById(req.params.id);

    if(!cliente){
        res.status(404);
        throw new Error('The client does not exist');
    }

    const clientUpdated = await Cliente.findByIdAndUpdate(req.params.id, req.body, {new: true})
    res.status(200).json({clientUpdated});
})

const deleteClientes =asyncHandler( async (req,res) => {

    const cliente = await Cliente.findById(req.params.id);

    if(!cliente){
        res.status(404);
        throw new Error('The client does not exist');
    }
    await Cliente.deleteOne(cliente)
    res.status(200).json({id:req.params.id});
})

module.exports={
    getClientes,
    crearClientes,
    updateClientes,
    deleteClientes
}