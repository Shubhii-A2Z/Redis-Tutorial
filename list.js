const client = require("./client");

async function init(){

    // adds a new element to the head of a list
    await client.lpush('messages',1);
    await client.lpush('messages',2);

    // adds to the tail
    await client.rpush('messages',3);
    await client.rpush('messages',4);

    // removes and returns an element from the head of a list
    const res1=await client.lpop('messages');
    console.log(res1);

    // removes and returns an element from the tail of a list
    const res2=await client.rpop('messages');
    console.log(res2);

    // length of list
    const res3=await client.llen('messages');
    console.log(res3);
}

init();