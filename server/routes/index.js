var express = require('express');
var router = express.Router();
const controller = require('../controllers/index')

router.get('/title', controller.changeTitle)
router.get('/skills', controller.changeFromUrl)
router.get('/meals', controller.changeFromMeals)

module.exports = router;
