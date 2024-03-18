/* 
Write a JS function that finds the first table in a document and sums the values in the last column. The result is then displayed in an element with ID "sum".

Input/Output
There will be no input/output, your program should instead modify the DOM of the given HTML document.

*/

function sumTable() {

    const tdCostElements = document.querySelectorAll('tr td:last-child:not(#sum)');
    const tdSumElement = document.getElementById('sum');


    tdSumElement.textContent = Array.from(tdCostElements)
    .reduce((sum, element) => sum + Number(element.textContent), 0);
 }