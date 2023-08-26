const express = require('express')
const app= express()
const {MongoClient, Collection} = require('mongodb');
const mongourl = 'mongodb://127.0.0.1:27017'

const client = new MongoClient(mongourl);

async function getData()
{
    let result = await client.connect();
    let db = result.db('e-com')

     let collection = db.collection('products')
     let response = await collection.find({}).toArray()
     console.log(response)

}

getData()