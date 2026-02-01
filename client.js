
// This client will interact with redis-server
const {Redis} = require('ioredis');

const client=new Redis();

module.exports=client;