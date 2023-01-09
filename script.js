   
const addButton = document.getElementById('add');
const itemNameInput = document.getElementById('item-name-input');
const itemPriceInput = document.getElementById('item-price-input');
const totalElement = document.getElementById('total');

let total = 0;

addButton.addEventListener('click', () => {
  const itemName = itemNameInput.value;
  const itemPrice = itemPriceInput.value;

  // Add a new row to the table with the item name and price
  const tableBody = document.querySelector('tbody');
  const newRow = document.createElement('tr');
  newRow.innerHTML = `<td>${itemName}</td><td>${itemPrice}</td>`;
  tableBody.appendChild(newRow);

  // Update the grand total
  total += parseFloat(itemPrice);
  totalElement.textContent = total;

  // Clear the input fields
  itemNameInput.value = '';
  itemPriceInput.value = '';
});