const { log } = require('console')
const os = require ('os')
const { uptime } = require('process')

// info about current user 
const user = os.userInfo()
console.log(user)


// method returns the system up time in second
const time = os.uptime()
console.log(`The system up time is: ${os.uptime()}seconds`)

//current OS 

const currentos = {
    name: os.type(),
    release: os.release(),
    memory: os.freemem(),
    total: os.totalmem(),
    version: os.version(),
}

console.log(currentos)

