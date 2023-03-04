function searchRecipes(ingredient, dairy, gluten) {
  let apiUrl = `/recipes/${ingredient}`
  if (dairy || gluten) {
    apiUrl += "?"
    if (dairy) {
      apiUrl += "dairy=true&"
    }
    if (gluten) {
      apiUrl += "gluten=true&"
    }

    apiUrl = apiUrl.slice(0, -1)
  }
  return $.get(apiUrl)
}
