const express = require('express');
const router = express.Router();

const content_controller = require('../controllers/content.controller');

router.get('/getcontent', content_controller.test);

router.post('/createcontent', content_controller.content_create);

module.exports = router;