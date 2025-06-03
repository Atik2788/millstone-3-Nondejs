const fs = require('fs')


const data = fs.readFile("./hello.txt", {encoding: 'utf-8'}, (err, data) =>{
    if(err){
        console.log('got an error!', err);
        return;
    }
     console.log(data);
})

console.log(data);