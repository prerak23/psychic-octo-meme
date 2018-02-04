var express=require('express');
var router=express.Router();
var MongoClient=require('mongodb').MongoClient;
var bcrypt=require('bcrypt');
var jwt=require('jsonwebtoken');
var Customer=require('../models/registerproviders.js');
var SaltRounds=10;
router.post('/',function(req,res,next){
  var hashedpass;
  if(req.body.pass!=null)
  {
  bcrypt.hash(req.body.pass,SaltRounds,function(err,hashed){

  var array=req.body.content;
  console.log(array);
  var Custmerreg=new Customer({
    name:req.body.name,
    Password:hashed,
    location:{type:"Point",coordinates:[req.body.longi,req.body.lati]},
    Phone:req.body.phn,
    Email:req.body.email,
    Speciality:req.body.content
  });

  Custmerreg.save(function(err,user){
    if(err)
    {
      console.log(err);

    }
    console.log(user);

  });
  MongoClient.connect('mongodb://rachna1711:rachna1711@ds153392.mlab.com:53392/tbc',function(err,client){
    if(err)throw err;
    var db=client.db('tbc');
    db.collection('User').createIndex({location:"2dsphere"},function(result){
      console.log(result);
    });
  })


  });
}
else
{
  res.json("Provide Password");
}
});

module.exports=router;
