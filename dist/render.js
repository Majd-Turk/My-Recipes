const source = $('#recipe-template').html()
const recipeTemplate = Handlebars.compile(source)

function displayRecipes(recipes) {
  const $recipes = $('#recipes')
  let newHtml = recipeTemplate({ data: recipes })

  $recipes.empty()

  $recipes.append(newHtml)

}

