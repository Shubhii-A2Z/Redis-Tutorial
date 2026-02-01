const client = require("./client");

// Proper syntax to set values:  set <entity>:<id> <value>

async function init(){

    // inserting/setting key:value inside cache
    await client.set('mssg:4','Hey from node');

    // getting/finding value for corresponding key
    const res1=await client.get('mssg:4');
    console.log(res1);

    // SET iff the key doesnt exists
    const res2=await client.set('mssg:4','Hey from node again!','nx');
    console.log(res2); // null

    // set multiple keys in a single command
    await client.mset({
        'mssg:5': 'Heya',
        'mssg:6': 'Wassup',
        'mssg:7': 'Hella'
    });

    // GET the value of multiple keys in a single command
    const res3=await client.mget(['mssg:1','mssg:2','mssg:3']);
    console.log(res3);

}

init();