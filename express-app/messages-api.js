const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000

//Middelware
app.use(bodyParser.json())

//POST endpoint
app.post('/messages', (req, res) => {
    console.log("This is the post req.body.text:", req.body.text)
    res.json({
        message: "Message received loud and clear"
    })
});

app.listen(port, () =>
    console.log(`Messages App listening on port: ${port}`)
);