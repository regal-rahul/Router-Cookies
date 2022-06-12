const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('All dogs')
})
router.get('/:id', (req, res) => {
    res.send('vioewing one ')
})
router.get('/:id/edit', (req, res) => {
    res.send('editing one dog')
})

module.exports = router;