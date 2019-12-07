const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000
let reqCount = 0


//Middelware

const limitCallsMiddleware = (req, res, next) => {
    if(!req.body.text || req.body.text === '') {
        res.status(400).end()
    }
    if(reqCount > 5){
        res.status(429).end()
    }else{
        reqCount++
        next()
    }
};

app.use(bodyParser.json())
app.use(limitCallsMiddleware)

//POST /messages endpoint
app.post('/messages', (req, res) => {
    if(!req.body.text || req.body.text === '') {
        res.status(400).end()
    }else{
        console.log("The value of reqCount is:", reqCount)
        console.log("This is the post req.body.text:", req.body.text)
        res.json({
            message: "Message received loud and clear"
        })
    }
});

app.listen(port, () =>
    console.log(`Messages App listening on port: ${port}`)
);