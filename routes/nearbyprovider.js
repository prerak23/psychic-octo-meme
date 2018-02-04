var express=require('express');
var router=express.Router();
var MongoClient=require('mongodb').MongoClient;
var jwt=require('jsonwebtoken');
var Customer=require('../models/registerproviders.js');
var geonearby=require('geo-nearby');
router.post('/',function(req,res,next){

var longitude=req.body.longi;
console.log(longitude);
var latitude=req.body.lati;
var array=req.body.content;

console.log(array);
var dataset;
MongoClient.connect('mongodb://rachna1711:rachna1711@ds153392.mlab.com:53392/tbc',function(err,client)
{
    if(err)throw err;
    var db=client.db('tbc');
    db.collection('Customer').aggregate([
      {$geoNear:{near:{type:"Point",coordinates:[longitude,latitude]},distanceField:"dist.calculated",spherical:true}},
    {$match:{Speciality:array}}],function(err,result){
      if(err) console.log(err);
      res.json({Response:"Providers"});
    });
});


});







module.exports=router;
