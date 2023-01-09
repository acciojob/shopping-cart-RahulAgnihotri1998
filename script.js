const itemNameInput = document.getElementById('item-name-input');
const itemPriceInput = document.getElementById('item-price-input');
const addButton = document.getElementById('add');
const itemsTable = document.getElementById('items');
const total = document.getElementById('total');

let grandTotal = 0;

addButton.addEventListener('click', () => {
  // Get the input values
  const itemName = itemNameInput.value;
  const itemPrice = itemPriceInput.value;

  // Validate input
  if (itemName === '' || itemPrice === '' || isNaN(itemPrice)) {
    return;
  }

  // Update the grand total
  grandTotal += parseFloat(itemPrice);

  // Clear the input fields
  itemNameInput.value = '';
  itemPriceInput.value = '';

  // Add a new row to the table
  const newRow = document.createElement('tr');
  newRow.innerHTML = `
    <td aria-role="gridcell">${itemName}</td>
    <td aria-role="gridcell">${itemPrice}</td>
  `;
  itemsTable.insertBefore(newRow, total.parentElement);

  // Update the grand total display
  total.textContent = grandTotal.toFixed(2);
});