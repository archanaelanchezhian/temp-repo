const {readFileSync,writeFileSync} = require('fs')

const First = readFileSync('./content/first.txt', 'utf8')
const second = readFileSync('./content/second.txt', 'utf8')

console.log('start')

writeFileSync('./content/result-sync', 
`Here is the result : ${First}, ${second}`,
{ flag : 'a'}
)
console.log('done with the task')
console.log('starting the new one')
