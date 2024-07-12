const {MongoClient}= require('mongodb');
const url = 'mongodb://localhost:27017';
const database = 'e-comm';
const client = new MongoClient(url);

async function dbConection(){
    let result = await client.connect();
    let db = result.db(database);
   return db.collection('products');

}

module.exports = dbConection;



// const {MongoClient} = require('mongodb')
// const url= 'mongodb://localhost:27017';
// const databaseName='e-comm'
// const client= new MongoClient(url);

// async function dbConnect()
// {
//     let result = await client.connect();
//     db= result.db(databaseName);
//     return db.collection('products');
  
// }
// module.exports= dbConnect;