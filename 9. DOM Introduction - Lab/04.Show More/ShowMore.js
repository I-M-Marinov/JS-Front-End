/* 
Write a JS function that expands a hidden section of text when a link is clicked. The link should disappear as the rest of the text shows up.

Input/Output

There will be no input/output, your program should instead modify the DOM of the given HTML document.
*/

function showText() {
    const hiddenString = document.getElementById('text');
    const moreButton = document.getElementById('more');

    moreButton.style.display = 'none';
    hiddenString.style.display = 'inline';
}