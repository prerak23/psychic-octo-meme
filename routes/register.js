var express = require('express');
var router = express.Router();
var User=require('../models/loginschema.js');
var MongoClient=require('mongodb').MongoClient;
var bcrypt=require('bcrypt');
var jwt=require('jsonwebtoken');
const SaltRounds=10;


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.post('/',function(req,res,next)
{

  var hashpass;
  bcrypt.hash(req.body.pass,SaltRounds,function(err,hash){
    hashpass=hash;
    console.log(hashpass);
    var NUser=new User({
      name:req.body.name,
      email:req.body.email,
      pass:hashpass,
      location:req.body.loc,

    });
    NUser.save(function(err,user){
      if(err){
        console.log(user);
        console.log(err);
      }
    });
  });

})
router.get('/allusers',function(req,res,next){

    var token=req.headers['x-token'];
    jwt.verify(token,'shhhh',function(err,decoded){;
    if(err) res.json("you are not authorized");
    User.find({},function(err,docs){
      if(err)throw err;
      else {
        res.json(docs);
      }
    })
  });
})
router.post('/orders',function(req,res,next){
  MongoClient.connect('mongodb://localhost:27017',function(err,client){
    if(err)throw err;
    var db=client.db('Login');
    db.collection('User').update({email:req.body.email},{$push:{Orders:{Item:req.body.Item,Date:req.body.Date}}});
  })

})
module.exports = router;
