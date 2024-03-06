/* 
You will receive a single number. You have to write a function, that returns the sum of all even and all odd digits from that number. 
*/

function oddAndEvenSum(number) {

    let oddSum = 0;
    let evenSum = 0;

    while (number > 0) {

        let lastDigit = number % 10;

        if (lastDigit % 2 === 0) {
            evenSum += lastDigit;
        } else {
            oddSum += lastDigit;
        }
        number = Math.floor(number / 10);
    }
    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
}

oddAndEvenSum(1000435);
oddAndEvenSum(3495892137259234);