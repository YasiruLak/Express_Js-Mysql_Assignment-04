const express = require('express')
const router = express.Router()

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