const express = require('express');
const router = express.Router();

// Import the burger model to use its db functions
const burger = require('../models/burger.js');

router.get('/', async (req, res) => {
    const handleBarsObj = { burgers: await burger.all() };
    console.log(handleBarsObj);
    res.render("index", handleBarsObj);
})

module.exports = router;