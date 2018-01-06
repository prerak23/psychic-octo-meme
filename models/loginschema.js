var mongoose=require('mongoose');
var Schema=mongoose.Schema;
var bcrypt=require('bcrypt');
const SaltRounds=10;

var userSchema=new Schema({
  name:String,
  email:{type:String,required:true,unique:true},
  pass:{type:String,required:true},
  location:{type:String},
  Orders:[]
})

var User=mongoose.model('User',userSchema);
module.exports=User;
