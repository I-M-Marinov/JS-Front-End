/* 
Write a function that reads the text inside an input field and appends the specified text to a list inside an HTML page.
*/

function addItem() {

    const listOfItemsElements = document.querySelector('#items'); // Get the list of elements with id "items"
    let newItemText = document.getElementById('newItemText').value; // Get the value of the newItemText input field with id "newItemText"

    let li = document.createElement("li"); // Create list item
    li.textContent = newItemText; // Add the text from the newItemText input field
    listOfItemsElements.appendChild(li); // Append it to the ul list of elements
    newItemText = document.getElementById('newItemText').value = ''; // Clear the value of the newItemText

}