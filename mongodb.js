
const {MongoClient} = require('mongodb');
const mongourl = 'mongodb://127.0.0.1:27017'

client = new MongoClient(mongourl);

async function dbConnect()
{
    let result = await client.connect();
    let db = result.db('e-com')

    return db.collection('products')

}

module.exports = dbConnect
