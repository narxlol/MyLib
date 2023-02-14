const express = require('express');
const router = express.Router();

// All routes will start with /index
router.get('/', (req, res) => {
    res.render('index');
});

module.exports = router;