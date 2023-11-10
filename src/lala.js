/*function buttonClicked() {
  var makeup = document.getElementById("makeup_input").value;
  

  fetch( `http://makeup-api.herokuapp.com/api/v1/products.json?brand=${makeup}`)
    .then((response) => response.json())
    .then((data) => {
      // Check if there is at least one item in the response.
      if (data.length > 0) {
        data.forEach(data => {
          var firstItem = data; // Select the first item in the array.

        var brand = firstItem.brand;
        var name = firstItem.name;
        var itemType = firstItem.product_type;
        var img = firstItem.image_link;
        //var tags = firstItem.tag_list;

        document.getElementById("display").innerHTML += `Brand: ${brand} <br> Name: ${name} <br> Type: ${itemType} <br> Image: <img src='${img}'>` ;
      
          
        });
        } else {
        document.getElementById("display").innerHTML = "No items found.";
      }
    });
}*/

// api1.js
/*
function buttonClicked() {
  var makeup = document.getElementById("makeup_input").value;

  fetch(`http://makeup-api.herokuapp.com/api/v1/products.json?brand=${makeup}`)
    .then((response) => response.json())
    .then((data) => {
      if (data.length > 0) {
        var displayContainer = document.getElementById("display");
        displayContainer.innerHTML = ""; // Clear previous search results

        var gridContainer = document.createElement("div");
        gridContainer.classList.add("grid-container");

        data.forEach((item) => {
          var brand = item.brand;
          var name = item.name;
          var itemType = item.product_type;
          var img = item.image_link;

          var gridItem = document.createElement("div");
          gridItem.classList.add("grid-item");

          gridItem.innerHTML = `
            <img src='${img}' alt='${name}'>
            <p>Brand: ${brand}</p>
            <p>Name: ${name}</p>
            <p>Type: ${itemType}</p>
            
          `;

          gridContainer.appendChild(gridItem);
        });

        displayContainer.appendChild(gridContainer);
      } else {
        document.getElementById("display").innerHTML = "No items found.";
      }
    });
} */

// api1.js

// api1.js

// api1.js

// api1.js

/*document.addEventListener('DOMContentLoaded', function() {
  const makeupBrand = "maybelline"; // Specify the brand you want to display

  // Function to fetch all products for the "maybelline" brand
  function fetchAllMaybellineProducts() {
    fetch(`http://makeup-api.herokuapp.com/api/v1/products.json?brand=${makeupBrand}`)
      .then((response) => response.json())
      .then((data) => displayProducts(data));
  }

  // Function to fetch products based on user input
  document.getElementById("submitBtn").addEventListener("click", function() {
    var type = document.getElementById("type_input").value;

    fetch(`http://makeup-api.herokuapp.com/api/v1/products.json?brand=${makeupBrand}&product_type=${type}`)
      .then((response) => response.json())
      .then((data) => displayProducts(data));
  });

  // Function to display products
  function displayProducts(data) {
    var displayContainer = document.getElementById("display");
    displayContainer.innerHTML = ""; // Clear previous search results

    if (data.length > 0) {
      var gridContainer = document.createElement("div");
      gridContainer.classList.add("grid-container");

      data.forEach((item) => {
        var brand = item.brand;
        var name = item.name;
        var itemType = item.product_type;
        var img = item.image_link;

        var gridItem = document.createElement("div");
        gridItem.classList.add("grid-item");

        gridItem.innerHTML = `
          <img src='${img}' alt='${name}'>
          <p>Brand: ${brand}</p>
          <p>Name: ${name}</p>
          <p>Type: ${itemType}</p>
        `;

        gridContainer.appendChild(gridItem);
      });

      displayContainer.appendChild(gridContainer);
    } else {
      displayContainer.innerHTML = "No items found.";
    }
  }

  // Fetch all products for "maybelline" on page load
  fetchAllMaybellineProducts();
}); */

// api1.js
document.addEventListener("DOMContentLoaded", function () {
    const makeupBrand = "maybelline"; // Specify the brand you want to display
  
    // Function to fetch all products for the "maybelline" brand
    function fetchAllMaybellineProducts() {
      fetch(
        `http://makeup-api.herokuapp.com/api/v1/products.json?brand=${makeupBrand}`
      )
        .then((response) => response.json())
        .then((data) => displayProducts(data));
    }
  
    // Function to fetch products based on user input
    document.getElementById("submitBtn").addEventListener("click", function () {
      var type = document.getElementById("type_input").value;
  
      fetch(
        `http://makeup-api.herokuapp.com/api/v1/products.json?brand=${makeupBrand}&product_type=${type}`
      )
        .then((response) => response.json())
        .then((data) => displayProducts(data));
    });
  
    // Function to display products
    function displayProducts(data) {
      var displayContainer = document.getElementById("display");
      displayContainer.innerHTML = ""; // Clear previous search results
  
      if (data.length > 0) {
        var gridContainer = document.createElement("div");
        gridContainer.classList.add("grid-container");
  
        data.forEach((item) => {
          var brand = item.brand;
          var name = item.name;
          var itemType = item.product_type;
          var img = item.image_link;
  
          var gridItem = document.createElement("div");
          gridItem.classList.add("grid-item");
  
          gridItem.innerHTML = `
            <div class="grid-item-content">
              <img src='${img}' alt='${name}'>
              <p>Brand: ${brand}</p>
              <p>Name: ${name}</p>
              <p>Type: ${itemType}</p>
              <button onclick="addToFavorites('${name}')" class="add-to-favorite-btn">Add to Favorite</button>
            </div>
          `;
  
          gridContainer.appendChild(gridItem);
        });
  
        displayContainer.appendChild(gridContainer);
      } else {
        displayContainer.innerHTML = "No items found.";
      }
    }
  
    // Fetch all products for "maybelline" on page load
    fetchAllMaybellineProducts();
  });
  
  // Function to add the item to favorites
  function addToFavorites(name) {
    fetch('http://localhost:3000/add-to-favorite', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.text();
      })
      .then((data) => console.log(data))
      .catch((error) => console.error('Error:', error));
  }
  
  
  
  
  
  For button add to fav:
  <!DOCTYPE html>
  <html>
    <head>
      <meta charset="UTF-8" />
      <title>Hello World!</title>
      <link rel="stylesheet" href="index.css" />
      <link rel="stylesheet" href="api1.css" />
    </head>
    <body>
      <input type="text" id="type_input" placeholder="Enter makeup type" />
      <button type="button" id="submitBtn">Enter</button>
      <div id="display" class="display-container"></div>
      <a href="favorites.html"><button type="button">Favorites</button></a>
      <a href="index.html"><button type="button">Back</button></a>
      <script src="api1.js"></script>
    </body>
  </html>
  
  server.js:
  // server.js
  const express = require('express');
  const fs = require('fs');
  const app = express();
  const path = require('path');
  
  app.use(express.json());
  app.use(express.static(path.join(__dirname, 'public')));
  
  // Endpoint to handle adding items to favorites
  app.post('/add-to-favorite', (req, res) => {
    const itemName = req.body.name;
    fs.appendFile('favorites.txt', itemName + '\n', (err) => {
      if (err) {
        console.error(err);
        return res.status(500).send('Error writing to favorites');
      }
      res.send('Item added to favorites');
    });
  });
  
  // Endpoint to handle reading the contents of the favorites.txt file
  app.get('/get-favorites', (req, res) => {
    fs.readFile(path.join(__dirname, 'favorites.txt'), 'utf8', (err, data) => {
      if (err) {
        console.error(err);
        return res.status(500).send('Error reading favorites');
      }
      const favorites = data.split('\n').filter(item => item.trim() !== '');
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify(favorites));
    });
  });
  
  // Start the server
  app.listen(3000, () => {
    console.log('Server is running on port 3000');
  });
  
  
  tempat nk display fav item:
  <!DOCTYPE html>
  <html>
    <head>
      <meta charset="UTF-8" />
      <title>Favorite Items</title>
      <link rel="stylesheet" type="text/css" href="index.css">
    </head>
    <body>
      <h1>Favorite Items</h1>
      <ul class="grid-container" id="favorites-list"></ul>
  
      <script>
        fetch('http://localhost:3000/get-favorites')
          .then(response => response.json())
          .then(data => {
            const favoritesList = document.getElementById('favorites-list');
            data.forEach(item => {
              const listItem = document.createElement('li');
              listItem.className = 'grid-item';
  
              const itemText = document.createElement('span');
              itemText.textContent = item;
              listItem.appendChild(itemText);
  
              const buttonContainer = document.createElement('div');
              buttonContainer.style.display = 'flex';
              buttonContainer.style.justifyContent = 'center';
              buttonContainer.style.marginTop = '10px';
  
              const updateButton = document.createElement('button');
              updateButton.textContent = 'Update';
              updateButton.onclick = () => {
                // Add your update functionality here
                console.log('Update item: ', item);
              };
              buttonContainer.appendChild(updateButton);
  
              const deleteButton = document.createElement('button');
              deleteButton.textContent = 'Delete';
              deleteButton.onclick = () => {
                // Add your delete functionality here
                console.log('Delete item: ', item);
              };
              buttonContainer.appendChild(deleteButton);
  
              listItem.appendChild(buttonContainer);
  
              favoritesList.appendChild(listItem);
            });
          })
          .catch(error => console.error('Error:', error));
      </script>
    </body>
  </html>