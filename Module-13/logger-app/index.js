console.log(process.argv);

const inputArguments = process.argv.slice(2);
const text = inputArguments.join(' ');

if(!text){
    console.log('Plese provide a message to log');
    console.log('Example: node index.js Hello World!');

    process.exit(1)
}

const filepath = __dirname + "/log.txt"

console.log(filepath);