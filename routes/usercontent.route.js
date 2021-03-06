const express = require('express');
const router = express.Router();

const content_controller = require('../controllers/content.controller');

router.get('/getcontent', content_controller.test);
router.get('/:id', content_controller.content_read);
router.post('/createcontent', content_controller.content_create);
router.put('/:id/contentupdate', content_controller.content_update);
router.delete('/:id/contentdelete', content_controller.content_delete);

module.exports = router;