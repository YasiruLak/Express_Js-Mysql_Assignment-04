const express = require('express')
const user = require('./routes/user')
const item = require('./routes/item')
const customer = require('./routes/customer')

const app = express()
const port = 4000

app.use(express.json())

app.use('/customer', customer)
app.use('/item',  item)
app.use('/users', user)


// app.get('/', (req, res) => {
//     console.log('get request comming!');
//     res.send('get req came for / route')
// })

app.listen(port, () => {
    console.log(`app starting on ${port}`);
})