const router = require('express').Router();

router.get('/', (req, res) =>{
    res.send("Welcome to CSE341!")
})

router.use('/users', require('./users'));


module.exports = router;