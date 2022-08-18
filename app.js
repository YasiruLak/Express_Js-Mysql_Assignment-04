const express = require('express')
const user = require('./routes/user')
const item = require('./routes/item')
const customer = require('./routes/customer')
const order = require('./routes/order')
const orderDetail = require('./routes/orderDetail')

const app = express()
const port = 4000

app.use(express.json())

app.use('/customer', customer)
app.use('/item',  item)
app.use('/users', user)
app.use('/order', order)
app.use('/orderDetail', orderDetail)


app.listen(port, () => {
    console.log(`app starting on ${port}`);
})