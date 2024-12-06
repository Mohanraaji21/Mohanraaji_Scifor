
const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');
const productList = document.getElementById('productList');


const fetchProducts = (query) => {
    fetch(`https://dummyjson.com/products/search?q=${query}`)
        .then(res => {          
            return res.json();
        })
        .then(data => {
            productList.innerHTML = ''; 
            if (data.products.length > 0) {
                data.products.forEach(product => {
                    const listItem = document.createElement('li');
                    listItem.textContent = product.title;
                    productList.appendChild(listItem);
                });
            } else {
                productList.innerHTML = '<li>No products found.</li>';
            }
        })
};


searchButton.addEventListener('click', () => {
    const query = searchInput.value.trim();
    if (query) {
        fetchProducts(query);
    } else {
        productList.innerHTML = '<li>Please enter a search term.</li>';
    }
});
