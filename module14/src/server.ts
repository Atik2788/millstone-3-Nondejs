import app from "./app";
import { client } from "./config/mongodb";
const port = 5000
const { MongoClient, ServerApiVersion } = require('mongodb');


let server;


const bootstrap = async () =>{
    await client.connect();
    // console.log('connect mngdb');

    server = app.listen(port, () => {       
  console.log(`Example app listening on port ${port}`)
})

}



bootstrap()