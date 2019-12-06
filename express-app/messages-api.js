const express = require('express')
const app = express()
const port = 3000

app.post('/messages', (req, res, next) => {
    console.log("This is the post req.body:", req.body)

});
app.listen(port, () => console.log(`Messages App listening on port: ${port}`))