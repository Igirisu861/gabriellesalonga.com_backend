const asyncHandler = require('express-async-handler');
const Purchase = require('../models/purchasesModel');

const getPurchases = asyncHandler(async(req,res)=>{
    const purchases = await Purchase.find();
    res.status(200).json(purchases);
})

const crearPurchases = asyncHandler(async(req,res) =>{
    const{client,article} = req.body;
    if(!client || !article){
        res.status(400);
        throw new Error('Please insert all the data');
    }
    const purchase = await Purchase.create({
        client,
        articles:[article]
    })
    res.status(201).json(purchase);
})

const addArticles = asyncHandler(async (req,res) => {
    const{article} = req.body;
    const purchase= await Purchase.findById(req.params.id);

    if(!purchase){
        res.status(404);
        throw new Error('The purchase does not exist');
    }

    purchase.articles.push(article);
    await purchase.save();
    res.status(200).json(purchase);
})

const deletePurchases =asyncHandler(async (req,res) => {

    const purchase = await Purchase.findById(req.params.id);

    if(!purchase){
        res.status(404);
        throw new Error('The purchase does not exist');
    }
    await Purchase.deleteOne(purchase)
    res.status(200).json({id:req.params.id});
})

module.exports={
    getPurchases,
    crearPurchases,
    addArticles,
    deletePurchases
}
