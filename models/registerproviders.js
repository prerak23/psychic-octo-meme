var mongoose=require('mongoose');
var Schema=mongoose.Schema;
var providerSchema=new Schema({
  name:String,
  Password:String,
  location:{type:{type:String},coordinates:[Number]},
  Phone:Number,
  Email:{type:String,unique:true,required:true},
  OrdersCompleted:[{CustomerName:String,Date:Date,Price:String,CustomerEmail:String}],
  OrdersGiven:[{CustomerName:String,Date:Date,Price:String,CustomerEmail:String,Time:String}],
  TotalWalletValue:Number,
  OrderPerDay:Number,
  Speciality:[]
});
var Customer=mongoose.model('Customer',providerSchema);
module.exports=Customer;
