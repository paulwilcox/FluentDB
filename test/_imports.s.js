let $$$$ = require('./dist/FluentDB.server.js');
let sampleServer = require('./node_modules/sampledb/dist/SampleDB.server.js');
let sampleMongo = require('./node_modules/sampledb/dist/SampleDB.mongo.js');

let sample = stores => 
    sampleServer('./test/_SampleDB.json', stores)
    .data;