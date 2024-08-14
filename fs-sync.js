
const {readFile , writeFile} = require('fs')

console.log('strat')
readFile('./content/first.txt','utf8', (err,result) =>{
    
if(err)
{
    console.log(err)
    return
}
const first = result

readFile('./content/second.txt','utf8', (err,result) =>{
    
    if(err){
    
        console.log(err)
        return
    }
    const second= result 
    writeFile('./content/sync.txt', 
    `Here is my result: ${first}, ${second}`, (err, result) => {
        if(err)
        {
        console.log(err)
        return
    }
    console.log('done with the task')

    }
)
})
})
console.log('starting the new one')