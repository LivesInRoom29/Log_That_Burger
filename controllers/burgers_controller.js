const express = require('express');
const router = express.Router();

// Import the burger model to use its db functions
const burger = require('../models/burger.js');

// To get all burgers from the db and send the object to handlebars
router.get('/', async (req, res) => {
    try {
        const handleBarsObj = { burgers: await burger.all() };
        res.render("index", handleBarsObj);
    } catch(err) {
        console.log(err);
        res.Status(500);
    }
});

// To create add a new burger to the db
router.post('/index/api/burgers', async (req, res) => {
    try {
        const result = await burger.create(["burger_name"], [req.body.burger_name]);
        res.json({ id: result.insertId})
    } catch(err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// To update the burger and change the devoured state to true (using "Devour" button);
router.put('/index/api/burgers/:id', async (req, res) => {
    const condition = req.params.id;
    const colObjValue = "devoured = 1";

    try {
        const result = await burger.update(colObjValue, condition);
        if(result.changedRows === 0) {
            // if no rows are changed, the ID must not exist
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    } catch (err) {
        console.error(err);
        res.status(500).json(err);
    }
});

// To update the burger and change devoured state to false (using "Make again" button)
router.put('/index/api/burgers-make-again/:id', async (req, res) => {
    const condition = req.params.id;
    const colObjValue = "devoured = 0";

    try {
        const result = await burger.update(colObjValue, condition);
        if(result.changedRows === 0) {
            // if no rows are changed, the ID must not exist
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    } catch (err) {
        console.error(err);
        res.status(500).json(err);
    }
});

router.delete('/index/api/burgers/:id', async (req, res) => {
    const condition = req.params.id;
    console.log("delete id ", condition);
    try {
        const result = await burger.delete(condition);

        res.status(200).end();

    } catch(err) {
        console.log(err);
        res.status(500).json(err);
    }
})



module.exports = router;