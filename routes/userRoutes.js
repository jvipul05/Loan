const express = require('express');
const router = express.Router();

const{register} = require('../controllers/register');

const { login } = require('../controllers/login');

router.post('/register', register);
router.post('/login', login);
router.get("/", (req, res) => {
    res.send("Welcome to the user routes");
});

module.exports = router;