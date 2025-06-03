const EventEmitter = require("node:events")

class SchoolBell extends EventEmitter {}


const schoolBell = new SchoolBell

schoolBell.on('ring', () => {
    console.log("class ses!!");
})

schoolBell.on('break', () => {
    console.log("class never end!!");
})

schoolBell.emit('ring')
schoolBell.emit('break')