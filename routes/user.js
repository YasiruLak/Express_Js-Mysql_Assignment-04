const express = require('express')
const router = express.Router()
const mysql = require('mysql')
const db = require('../configs/db.configs')

const connection = mysql.createConnection(db.database)

connection.connect(function(err) {
    if(err) {
        console.log(err);
    } else {
        console.log('Connected to the MySQL server');
    }
})


router.get('/',(req, res) =>{
    res.send('user get')
})

router.post('/', (req, res) => {
    res.send('user post method')
})

router.post('/', (req, res) => {
    res.send('user post')
})

router.delete('/:id', (req, res) => {
    res.send('delete user')
})

router.get('/:id', (req, res) => {
    res.send('get user by id')
})

module.exports = router