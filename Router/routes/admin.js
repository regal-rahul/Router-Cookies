const { Router } = require('express');
const express = require('express');
const router = express.Router();


router.get('/topsecret', (req, res) => {
    res.send('This is top secret.');
})
router.get('/deleteeverything', (req, res) => {
    res.send('Deleted everything');
})

module.exports = router;