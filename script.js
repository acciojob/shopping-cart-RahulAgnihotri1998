//your code here
const shoppingList = {
    itemNameInput: document.querySelector('#item-name-input'),
    itemPriceInput: document.querySelector('#item-price-input'),
    addButton: document.querySelector('#add'),
    shoppingTable: document.querySelector('table'),
    total: document.querySelector('#total'),
  };
  
  shoppingList.addButton.addEventListener('click', () => {
    const itemName = shoppingList.itemNameInput.value;
    const itemPrice = parseFloat(shoppingList.itemPriceInput.value);
  
    if (itemName === '' || isNaN(itemPrice) || itemPrice < 0) {
      return;
    }
  
    const row = document.createElement('tr');
    const itemColumn = document.createElement('td');
    itemColumn.textContent = itemName;
    const priceColumn = document.createElement('td');
    priceColumn.textContent = itemPrice;
  
    row.appendChild(itemColumn);
    row.appendChild(priceColumn);
    shoppingList.shoppingTable.lastElementChild.prepend(row);
  
    shoppingList.total.textContent = (parseFloat(shoppingList.total.textContent) + itemPrice).toFixed(2);
  
    shoppingList.itemNameInput.value = '';
    shoppingList.itemPriceInput.value = '';
  });
  