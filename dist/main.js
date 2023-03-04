$(function () {
  $('#searchBtn').on("click", function () {
    const ingredient = $('#ingredient').val()
    const dairySensitive = $('#dairy-free').is(':checked')
    const glutenSensitive = $('#gluten-free').is(':checked')
    searchRecipes(ingredient, dairySensitive, glutenSensitive).then(function (data) {
      if (data.length === 0) {
        $('#recipes').html('<p>No recipes found.</p>')
      } else {
        displayRecipes(data)
      }
    }).catch(function (err) {
      console.error(err)
      alert('Error fetching recipes')
    })
  })
})

$(document).on("click", ".recipe-image", function () {
  let ingredients = $(this).siblings("ul").children("li")
  let firstIngredient = $(ingredients[0]).text()
  alert(firstIngredient)
})
