const fs = require("fs");

const { nanoid } = require("nanoid");

const path = require("path");
const dataFilePath1 = path.join(__dirname, "../data/movies.json");
const dataFilePath2 = path.join(__dirname, "../data/purchasesCart.json");


let moviesArr = [];
purchases = [];

function loadMovies() {
  try {
    const data = fs.readFileSync(dataFilePath);
     moviesArr= JSON.parse(data);
  } catch (err) {
    moviesArr = [];
  }
}
loadMovies()

function savePurchasesToFile() {
  const dataToWrite2 = JSON.stringify(purchases, null, 2);
  fs.writeFileSync(dataFilePath2, dataToWrite2);
}

function saveMoviesToFile() {
  const dataToWrite = JSON.stringify(moviesArr, null, 2);
  fs.writeFileSync(dataFilePath1, dataToWrite1);
}



function createMovies(title, priceInCents, inStock) {
  const id = nanoid(4);
  const movieName = { id, title, priceInCents, inStock};
  moviesArr.push(movieName);
  saveMoviesToFile();
  return moviesArr;
}

function getMovies() {
    return moviesArr;
  }
  
function listMovies() {
    return moviesArr.map(({ id, title, priceInCents,  }) => ({ id, title, priceInCents }));
  }


  
function viewMovies(id) {
    const movieName = moviesArr.find((m) => m.id === id);
    return movieName
      ? `Id: ${movieName.id}\ntitle: ${movieName.title}\npriceInCents: ${movieName.priceInCents}\ninStock: ${movieName.inStock}  `
      : null;
  }
  
function updateMovies(id, updatedmovieName) {
  // console.log(movieNames, id)
    const movieNameList = moviesArr.findIndex((p) => p.id === id);
    if (movieNameList === -1) {
      return false;
    }
    moviesArr[movieNameList] = {
      ...moviesArr[movieNameList],
      ...updatedmovieName,
    };
    saveMoviesToFile();
    return true;
  }

// function updatemovieName(id, updatedmovieName) {
//     const movieNameList = movieNames.findIndex((p) => p.id === id);
//     if (movieNameList === -1) {
//       return false;
//     }
//     movieNames[movieNameList] = {
//       ...movieNames[movieNameList],
//       ...updatedmovieName,
//       inStock: parseFloat(updatedmovieName.inStock.toFixed(2)),
//     };
//     savemovieNamesToFile();
//     return true;
//   }
  
  function deleteMovie(id) {
    const movieNameList = moviesArr.findIndex((m) => m.id === id);
    if (movieNameList === -1) {
      return false;
    } else {
      moviesArr.splice(movieNameList, 1);
      saveMoviesToFile();
      return true;
    }
  }
  
 
//   sum =0 
//   sum += arr[i]

function loadPurchases() {
  try {
    const data = fs.readFileSync(dataFilePath2);
     purchases= JSON.parse(data);
  } catch (err) {
    console.log(err)
    purchases = [];
  }
  
}
loadPurchases()


  
function createPurchase(title, priceInCents, quantity) {
  // const id = nanoid(4);
  const movieName = { title, priceInCents, quantity};
  purchases.push(movieName);
  savePurchasesToFile();
  return purchases;
}

  function listPurchases() {
    return purchases.map(({ id, title, priceInCents, quantity}) => ({ id, title}));
  }

  function viewPurchases(id) {
    const purchase = purchases.find((p) => p.id === id);
    return purchase
      ? `Id: ${purchase.id}\ntitle: ${purchase.title}\npriceInCents: ${purchase.priceInCents}\ninStock: ${purchase.quantity}  `
      : null;
  }

  function deletePurchase(id) {
    const purchase = purchases.findIndex((p) => p.id === id);
    if (purchase === -1) {
      return false;
    } else {
      purchases.splice(purchase, 1);
      savePurchasesToFile();
      return true;
    }
  }

  function updatePurchase(id, updatedPurchaseName) {
    // console.log(movieNames, id)
      const purchaseIndex = purchases.findIndex((p) => p.id === id);
      if (purchaseIndex === -1) {
        return false;
      }
      purchases[purchaseIndex] = {
        ...purchases[purchaseIndex],
        ...updatedPurchaseName,
      };
      savePurchasesToFile();
      return true;
    }

    function cancelCart() {
        return purchasesCart.length === 0
      }
    
      function calculateTotalPrice() {
        return purchaseCart.reduce((total, { priceInCents }) => total + priceInCents, 0);
      }
    
    
      function calculateTotalinStock() {
        return purchasesCart.reduce((total, {  }) => total + i, 0);
      }
  // movieNames.push(movieName);
  // saveMoviesToFile();
  // return movieName;

  module.exports = {
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
  };




