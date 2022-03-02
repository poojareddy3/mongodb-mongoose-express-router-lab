const { Router } = require('express');
const controllers = require('../controllers');
const router = Router();

router.get('/', (req, res) => {
    res.send('This is the root!');
})

router.post('/recipes', controllers.createRecipe);

router.get('/recipes', controllers.getAllRecipes);

router.get('/recipes/:id', controllers.getRecipeById);

router.put('/recipes/:id', controllers.updateRecipes);

router.delete('/recipes/:id', controllers.deleteRecipes);

module.exports = router;