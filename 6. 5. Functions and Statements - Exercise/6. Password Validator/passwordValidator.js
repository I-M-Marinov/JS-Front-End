/* 
Write a function that checks if a given password is valid. Password validations are:

•	The length should be 6 - 10 characters (inclusive)
•	It should consist only of letters and digits
•	It should have at least 2 digits 

If a password is a valid print: "Password is valid".
If it is NOT valid, for every unfulfilled rule print a message:

•	"Password must be between 6 and 10 characters"
•	"Password must consist only of letters and digits"
•	"Password must have at least 2 digits"
*/

function validatePassword(password) {

    let isValid = true;

    function onlyLettersAndNumbers(string) { // nested function that would test if the text has only letters and numbers
        return /^[A-Za-z0-9]*$/.test(string);
    }
    function twoNumbersOrMore(string) { // nested function that would test if the text has at least 2 numbers or more
       return /^(?=.*\d.*\d).*$/.test(string);
    }

    let charArray = String(password).split("").map((char) => { return String(char) });

    if (charArray.length < 6 || charArray.length > 10) {
        console.log("Password must be between 6 and 10 characters");
        isValid = false;
    } 
    if (!onlyLettersAndNumbers(password)) {
        console.log("Password must consist only of letters and digits");
        isValid = false;
    } 
    if (!twoNumbersOrMore(password)) {
        console.log("Password must have at least 2 digits");
        isValid = false;
    } 
    if (isValid){
        console.log("Password is valid");
    }

}

validatePassword('logIn');
validatePassword('MyPass123');
validatePassword('Pa$s$s');
validatePassword('WhoTheHLikesRegEx');
validatePassword('RegEx666');
