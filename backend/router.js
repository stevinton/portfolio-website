const express = require('express');
const router = express.Router();
const { register } = require('./controllers/routerController');

router.get('/', (req, res) => {
    res.json("Main Page");
});

router.post('/register', register);

module.exports = router;
