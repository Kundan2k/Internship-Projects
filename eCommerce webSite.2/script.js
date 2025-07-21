    const products = [
      "iPhone 15",
      "MacBook Pro",
      "Bluetooth Speaker",
      "Leather Jacket",
      "Air Fryer",
      "Sneakers",
      "Smart Watch",
      "Coffee Maker",
      "T-Shirt",
      "Backpack"
    ];

    const searchInput = document.getElementById("searchInput");
    const searchResults = document.getElementById("searchResults");

    searchInput.addEventListener("input", function () {
      const query = this.value.toLowerCase();
      searchResults.innerHTML = "";

      if (query) {
        const filtered = products.filter(item => item.toLowerCase().includes(query));
        if (filtered.length > 0) {
          filtered.forEach(product => {
            const li = document.createElement("li");
            li.textContent = product;
            searchResults.appendChild(li);
          });
        } else {
          const li = document.createElement("li");
          li.textContent = "No results found.";
          searchResults.appendChild(li);
        }
      }
    });

{/* <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script> */}
