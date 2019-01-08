const express = require('express');
const router = express.Router();

const content_controller = require('../controllers/content.controller');

router.get('/getcontent', content_controller.test);

module.exports = router;