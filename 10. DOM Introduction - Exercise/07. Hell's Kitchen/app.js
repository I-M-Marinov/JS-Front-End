/* 
You will be given an array of strings, which represents a list of all the restaurants with their workers.

When the [Send] button is clicked:
•	Display the best restaurant of all the added restaurants with its average salary and best salary. 
•	If there is a restaurant in the input array that is added more than once, you need to add new workers to the old ones and update the values of the average salary and the best salary.
•	The best restaurant is the restaurant with the highest average salary. If two restaurants have the same average salary the best restaurant is the first one added.
•	Display all workers in the best restaurant with their salaries.
The best restaurant's workers should be sorted by their salaries in descending order.

Input
The input will be received from the given textarea in the form of an array of strings. 
Each string represents a restaurant with its workers: ["Mikes - Steve 1000, Ivan 200, Paul 800", "Fleet - Maria 850, Janet 650"]

Output
•	The output contains two strings
o	The first one is the best restaurant in the format:
`Name: {restaurant name} Average Salary: {restaurant avgSalary} Best Salary: {restaurant bestSalary}`
avgSalary and bestSalary must be formatted to the second decimal point.
o	The second one is all the workers in that restaurant in the following format:
`Name: {worker name} With Salary: {worker salary} Name: {worker2 name} With Salary: {worker2 salary} Name: {worker3 name} With Salary: {worker3 salary}…`

Output strings must be set like text content in the following elements:

Constraints
•	The workers will be always unique


*/

function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   function onClick () {
         
      
   }
}