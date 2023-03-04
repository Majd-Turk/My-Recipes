const express = require('express')
const router = express.Router()
const axios = require('axios')

const recipesApi = `https://recipes-goodness-elevation.herokuapp.com/recipes/ingredient/`

router.get('/recipes/:ingredient', (req, res) => {
  const ingredient = req.params.ingredient
  const apiUrl = recipesApi + ingredient
  axios.get(apiUrl)
    .then(apiRes => {
      const data = apiRes.data
      const recipes = data.results.map(recipe => ({
        idMeal: recipe.idMeal,
        title: recipe.title,
        thumbnail: recipe.thumbnail,
        href: recipe.href,
        ingredients: recipe.ingredients
      }))
      const dairySensitive = req.query.dairy === 'true'
      const glutenSensitive = req.query.gluten === 'true'

      const dairyIngredients = ["Cream", "Cheese", "Milk", "Butter", "Creme", "Ricotta", "Mozzarella", "Custard", "Cream Cheese"]
      const glutenIngredients = ["Flour", "Bread", "spaghetti", "Biscuits", "Beer", "Plain Flour"]

      const filteredRecipes = recipes.filter(recipe => {
        const containsDairy = dairySensitive && recipe.ingredients.some(ingredient => dairyIngredients.includes(ingredient))
        const containsGluten = glutenSensitive && recipe.ingredients.some(ingredient => glutenIngredients.includes(ingredient))
        return !containsDairy && !containsGluten
      })

      res.send(filteredRecipes)
    })

    .catch(err => {
      console.error(err)
      res.status(500).send('Error fetching recipes')
    })
})


module.exports = router