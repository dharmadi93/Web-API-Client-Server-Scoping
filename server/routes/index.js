var express = require('express');
var router = express.Router();
const controller = require('../controllers/index')

router.get('/title', controller.changeTitle)
router.get('/skills', controller.changeFromUrl)

module.exports = router;
