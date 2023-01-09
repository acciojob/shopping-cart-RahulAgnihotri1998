      const itemInput = document.getElementById("item-name-input");
      const priceInput = document.getElementById("item-price-input");
      const addButton = document.getElementById("add");
      const shoppingList = document.getElementById("shopping-list");
      const grandTotal = document.getElementById("grand-total");
      const totalLabel = document.getElementById("total");

      addButton.addEventListener("click", () => {
        const itemName = itemInput.value;
        const itemPrice = priceInput.value;

        if (!itemName || !itemPrice) {
          alert("Please enter a valid item name and price.");
          return;
        }

        const row = document.createElement("tr");
        const itemColumn = document.createElement("td");
        const priceColumn = document.createElement("td");

        itemColumn.innerText = itemName;
        priceColumn.innerText = "$" + itemPrice;

        row.appendChild(itemColumn);
        row.appendChild(priceColumn);

        shoppingList.insertBefore(row, grandTotal.parentElement.parentElement);

        const currentTotal = parseFloat(grandTotal.innerText.substring(1));
        grandTotal.innerText = "$" + (currentTotal + parseFloat(itemPrice)).toFixed(2);
        totalLabel.innerText = "Grand Total: " + grandTotal.innerText;

        itemInput.value = "";
        priceInput.value = "";
      });
