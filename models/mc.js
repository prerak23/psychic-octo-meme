var MongoClient = require( 'mongodb' ).MongoClient;

var _db;

module.exports =function()
{
  abcd: MongoClient.connect('mongodb://rachna1711:rachna1711@ds153392.mlab.com:53392/tbc',function(err,client){
  if(err)throw err;
  var db=client.db('Login');
  console.login("Succesfully Connected");
  return db;
})
};
