const express = require('express');
const router = express.Router();

// Import the burger model to use its db functions
const burger = require('../models/burger.js');

// To get all burgers from the db and send the object to handlebars
router.get('/index', async (req, res) => {
    try {
        const handleBarsObj = { burgers: await burger.all() };
        res.render("index", handleBarsObj);
    } catch(err) {
        console.log(err);
        res.Status(500);
    }
});

router.post('/index/api/burgers', async (req, res) => {
    try {
        const result = await burger.create(["burger_name"], [req.body.burger_name]);
        res.json({ id: result.insertId})
    } catch(err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// router.put('index/api/burgers/:id'), async (req, res) => {
//     const condition = req.params.id;
//     console.log(condition)
// }

module.exports = router;