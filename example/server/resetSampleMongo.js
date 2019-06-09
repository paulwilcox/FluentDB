let MongoClient = require('mongodb').MongoClient;
let sampleDataSets = require('../sampleDataSetsCjs.js').sampleDataSets;

let url = 'mongodb://localhost:27017/sampleMongo';

module.exports = () =>
    MongoClient.connect(url, { useNewUrlParser: true})
    .then(async client => {

        let db = client.db();

        for (let key of Object.keys(sampleDataSets)) {
            console.log('processing: ' + key);
            if (db.listCollections({name: key}).hasNext()) 
                await db.collection(key).drop();
            await db.createCollection(key); 
            await db.collection(key).insertMany(sampleDataSets[key]);
        }

        return db;

    })
    .catch(err => console.log(err));

