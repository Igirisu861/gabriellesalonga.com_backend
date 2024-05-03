const asyncHandler = require('express-async-handler');
const Contacto = require('../models/contactsModel');

const getContactos = asyncHandler(async(req,res)=>{
    const contactos = await Contacto.find();
    res.status(200).json(contactos);
})

const crearContactos = asyncHandler(async(req,res) =>{
    const{full_name,email,subject,message} = req.body;
    if(!full_name || !email || !subject || !message){
        res.status(400);
        throw new Error('Please insert all your data');
    }
    const contacto = await Contacto.create({
        full_name,
        email,
        subject,
        message
    })
    res.status(201).json(contacto);
})

const updateContactos = asyncHandler(async (req,res) => {
    const contacto = await Contacto.findById(req.params.id);

    if(!contacto){
        res.status(404);
        throw new Error('The contact does not exist');
    }

    const contactoUpdated = await Contacto.findByIdAndUpdate(req.params.id, req.body, {new: true})
    res.status(200).json({contactoUpdated});
})

const deleteContactos =asyncHandler(async (req,res) => {

    const contacto = await Contacto.findById(req.params.id);

    if(!contacto){
        res.status(404);
        throw new Error('The contact does not exist');
    }
    await Contacto.deleteOne(contacto)
    res.status(200).json({id:req.params.id});
})

module.exports={
    getContactos,
    crearContactos,
    updateContactos,
    deleteContactos
}