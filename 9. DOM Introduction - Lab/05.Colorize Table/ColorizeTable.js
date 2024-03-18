/* 
Write a JS function that changes the color of all even rows when the user clicks a button. Apply the color "Teal" to the target rows.

Input/Output
There will be no input/output, your program should instead modify the DOM of the given HTML document.
*/

function colorize() {
    
    const evenRowElements = document.querySelectorAll("table tr:nth-child(2n)");

    for (const evenRow of evenRowElements) {
        evenRow.style.backgroundColor = 'teal';
    }
}