/* 
Write a function that reads the text inside an input field and appends the specified text to a list inside an HTML page.
*/

function addItem() {

    const listOfItemsElements = document.querySelector('#items'); // Get the list of elements with id "items"
    const inputElement = document.getElementById('newItemText'); // Get the element newItemText input field with id "newItemText"
    let li = document.createElement("li"); // Create list item
    listOfItemsElements.appendChild(li); // Append it to the ul list of elements
    li.textContent = inputElement.value; // Add the text from the input field to the new element textContent
    inputElement.value = ''; // Clear the value of the input element after it is added to the DOM

}