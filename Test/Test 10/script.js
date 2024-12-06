    
    async function fetchProducts() {
      
          const response = await fetch('https://dummyjson.com/products');
          const data = await response.json();
          displayProducts(data.products);
       
      }
  
   
      async function searchProducts() {
        const query = document.getElementById('search-input').value.trim();
        if (!query) {
          alert('Please enter a search term!');
          return;
        }
  
        
          const response = await fetch(`https://dummyjson.com/products/search?q=${query}`);
          const data = await response.json();
          if (data.products.length === 0) {
            document.getElementById('product-container').innerHTML = '<p>No products found.</p>';
          } else {
            displayProducts(data.products);
          }
        
      }
  

      function displayProducts(products) {
        const container = document.getElementById('product-container');
        container.innerHTML = ''; 

        
  
        products.forEach(product => {
          const productDiv = document.createElement('div');
          productDiv.className = 'product';

        //   products.for(product => {
        //     const productDiv = document.createElement('div');
        //     productDiv.class = 'product';
  
          productDiv.innerHTML = `
            <img src="${product.thumbnail}" alt="${product.title}">
            <h3>${product.title}</h3>
            <p>Price: $${product.price}</p>
            <p>${product.description}</p>
          `;
  
          container.appendChild(productDiv);
        });
      }
  
    
      function searchItem(event) {
        if (event.key === 'Enter') {
          searchProducts();
        }
      }
  
  
      fetchProducts();