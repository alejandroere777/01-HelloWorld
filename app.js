// const app = require('express')();
const express = require('express')
const app = express()
app.use(express.json())

app.get('/', (req, res) => {
    // res.send('Hola mundo desde express')
    res.status(200)
    res.json({
        hola: 'mundo'
    })
})

app.post('/', (req, res) => {
    const data = req.body
    res.json({
        msj: `Hola ${data.user}`
    })

})

app.listen(3000, () => {
    console.log('Express server started at port 3000')
})