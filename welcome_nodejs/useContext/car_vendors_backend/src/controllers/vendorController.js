const express = require('express');
const router = express.Router();
const { getCars } = require('../controllers/vendorController');

router.get('/', getCars);

module.exports = router;
