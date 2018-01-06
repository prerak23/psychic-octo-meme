var MongoClient = require( 'mongodb' ).MongoClient;

var _db;

module.exports =function()
{
  abcd: MongoClient.connect('mongodb://localhost:27017',function(err,client){
  if(err)throw err;
  var db=client.db('Login');
  console.login("Succesfully Connected");
  return db;
})
};
