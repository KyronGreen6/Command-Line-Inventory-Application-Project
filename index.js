const fs = require("fs");
const { nanoid } = require("nanoid");

const {
  createMovies,
  listMovies,
  viewMovies,
  updateMovies,
  deleteMovie,
  loadMovies,
  getMovies,
  createPurchase,
  listPurchases,
  viewPurchases,
  deletePurchase,
  updatePurchase,
  cancelCart,
  calculateTotalPrice,
  calculateTotalinStock
} = require("./src/moviesAndPurchases.js");

  
  function processInput() {
    expectedCommand = process.argv[2]

    if(expectedCommand === "createMovies") {

      const [id, title, priceInCents, inStock]   = process.argv.slice(3)
      const result = createMovies(id, title, priceInCents, inStock)
      console.log(result)
    }
    
    else if(expectedCommand === "listMovies") {
      const result = listMovies()
      console.log(result)
    }

    else if(expectedCommand === "viewMovies") {
      const result = viewMovies(process.argv[3])
      console.log(result)
    }

    else if(expectedCommand === "updateMovies") {
      const [id, title, priceInCents, inStock]   = process.argv.slice(3)
      const result = updateMovies(process.argv[3], {title, priceInCents, inStock} )
      console.log(result)
    }

    else if(expectedCommand === "deleteMovie") {
      const result = deleteMovie(process.argv[3] )
      console.log(result)
    }

    else if(expectedCommand === "calculateTotalPrice") {

    }

    else if(expectedCommand === "createPurchase") {

      const [title, priceInCents, quantity]   = process.argv.slice(3)
      const result = createPurchase(title, priceInCents, quantity)
      console.log(result)
    }
    else {
      console.log(`error`)
    }

 }

 processInput()