var express = require('express');
var router = express.Router();
var User=require('../models/loginschema.js');
var MongoClient=require('mongodb').MongoClient;
var bcrypt=require('bcrypt');
var jwt=require('jsonwebtoken');


router.post('/',function(req,res,next){
  var emai=req.body.email;
  var pass=req.body.pass;
  User.find({email:emai},function(err,docs){
    if(err) throw err;
    var cp=docs[0].pass;
    bcrypt.compare(pass, cp, function(err, respond) {

    if(respond)
    {
          var tokenj=jwt.sign({foo:'supersecret'},'shhhh',{expiresIn:'5min'});
          console.log(tokenj);
          res.json({success:true,token:tokenj});
    }
    else
    {
      res.json("Wrong Password");
    }
});

});
});
















module.exports=router;
