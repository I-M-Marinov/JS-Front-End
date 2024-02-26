function solve(num1, num2, operator) {
    let total = 0;
    switch (operator) {
        case "-":
            total = num1 - num2
            break;
        case "+":
            total = num1 + num2
            break;
        case "*":
            total = num1 * num2
            break;
        case "/":
            total = num1 / num2
            break;
        case "%":
            total = num1 % num2
            break;
        case "**":
            total = num1 ** num2
            break;
    }
    console.log(total);
}