const express = require('express');
const router = express.Router();

// Import the burger model to use its db functions
const burger = require('../models/burger.js');

router.get('/', async (req, res) => {
    try {
        const handleBarsObj = { burgers: await burger.all() };
        console.log(handleBarsObj);
        res.render("index", handleBarsObj);
    } catch(err) {
        console.log(err);
        res.setStatus(500);
    }
})

module.exports = router;