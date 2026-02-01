const express=require('express');
const axios=require('axios');

const client = require('./client');

const app=express();

app.get('/',async (req,resp)=>{

    // first checking if data is present in cache
    const cacheValue=await client.get('todos');
    if(cacheValue) return resp.json(JSON.parse(cacheValue));

    const {data}=await axios.get('https://jsonplaceholder.typicode.com/todos/');

    // SET the data into the cache
    await client.set('todos',JSON.stringify(data));

    // Setting time-to-live, preventing Cache to return outdated data
    await client.expire('todos',30);

    return resp.json(data);
});

app.listen(8000,()=>{
    console.log('Server Started');
});