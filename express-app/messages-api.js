const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000
let reqCount = 0


//Middelware
app.use(bodyParser.json())

//POST /messages endpoint
app.post('/messages', (req, res) => {
    reqCount++
    if(!req.body.text || req.body.text === '') {
        res.status(400).end()
    }if(reqCount > 5){
        res.status(429).end()
    }else{
        console.log("The value of reqCount", reqCount)
        console.log("This is the post req.body.text:", req.body.text)
        res.json({
            message: "Message received loud and clear"
        })
    }
});

app.listen(port, () =>
    console.log(`Messages App listening on port: ${port}`)
);