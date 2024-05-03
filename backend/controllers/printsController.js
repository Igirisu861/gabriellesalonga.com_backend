const asyncHandler = require('express-async-handler');
const Print = require('../models/printsModel');

const getPrints = asyncHandler(async(req,res)=>{
    const print = await Print.find();
    res.status(200).json(print);
})

const crearPrints = asyncHandler(async(req,res) =>{
    const{title,price,size} = req.body;
    if(!title || !price || !size){
        res.status(400);
        throw new Error('Please insert all the data');
    }
    const print = await Print.create({
        title,
        price,
        size
    })
    res.status(201).json(print);
})

const updatePrints = asyncHandler(async (req,res) => {
    const print= await Print.findById(req.params.id);

    if(!print){
        res.status(404);
        throw new Error('The print does not exist');
    }

    const printUpdated = await Print.findByIdAndUpdate(req.params.id, req.body, {new: true})
    res.status(200).json({printUpdated});
})

const deletePrints =asyncHandler(async (req,res) => {

    const print = await Print.findById(req.params.id);

    if(!print){
        res.status(404);
        throw new Error('The print does not exist');
    }
    await Print.deleteOne(print)
    res.status(200).json({id:req.params.id});
})

module.exports={
    getPrints,
    crearPrints,
    updatePrints,
    deletePrints
}