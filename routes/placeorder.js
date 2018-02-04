var express=require('express');
var router=express.Router();
var MongoClient=require('mongodb').MongoClient;
var jwt=require('jsonwebtoken');
var Customer=require('../models/registerproviders.js');

router.post('/',function(req,res,next){

var Longi=parseFloat(req.body.longi);
var Lati=parseFloat(req.body.lati);
var content=req.body.content.split("/");
console.log(Longi);
console.log(content);


});
module.exports=router;
