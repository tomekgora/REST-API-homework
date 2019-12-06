const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000


//Middelware
app.use(bodyParser.json())

//POST endpoint
app.post('/messages', (req, res) => {
    let reqCount = 0
    if(!req.body.text || req.body.text === '') {
        res.status(400).end()
    }if(reqCount > 5){
        res.status(429).end()
    }else{
        reqCount +=
        console.log("This is the post req.body.text:", req.body.text)
        res.json({
            message: "Message received loud and clear"
        })
    }

});

app.listen(port, () =>
    console.log(`Messages App listening on port: ${port}`)
);