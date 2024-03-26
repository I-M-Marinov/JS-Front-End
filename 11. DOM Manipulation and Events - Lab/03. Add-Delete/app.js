/* 
Extend the previous problem to display a [Delete] link after each list item. 
Clicking it should delete the item with no confirmation. You have to add href="#" to the link element.
*/

function addItem() {
    
    const inputItemElement = document.getElementById('newItemText'); // Get the element newItemText input field with id "newItemText"
    const itemListElement = document.getElementById('items'); // Get the list of elements with id "items"
    
    const newInputItemElement = document.createElement('li'); // Create list item
    newInputItemElement.textContent = inputItemElement.value; // Add the text from the input field to the new element textContent

    const deleteLinkElement = document.createElement('a'); // Create link element 
    deleteLinkElement.textContent = "[Delete]";
    deleteLinkElement.href ='#';

    deleteLinkElement.addEventListener('click', () => {
        newInputItemElement.remove();
    });
    newInputItemElement.appendChild(deleteLinkElement);
    itemListElement.appendChild(newInputItemElement); // Append it to the ul list of elements
    inputItemElement.value = ''; // Clear the value of the input element after it is added to the DOM

}