var express = require('express');
var router = express.Router();

const ingredientController = require('../controllers/ingredientController');

router.get('/ingredients', ingredientController.apiIngredientsIndex);
router.get('/ingredients/:id', ingredientController.apiIngredientsShow);
router.post('/ingredients/new', ingredientController.apiIngredientsNew);
module.exports = router;
