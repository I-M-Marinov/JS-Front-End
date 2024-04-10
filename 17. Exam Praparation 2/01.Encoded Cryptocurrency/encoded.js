
function solve(input) {
    let message = input.shift();
    let error = false;

    const takeEven = (message) => {
        error = false;
        return message.split('').filter((_, index) => index % 2 == 0).join(''); /// ====> char = (underscore)"_" ( not going to use this variable )
    };

    const changeAll = (message, substring, replacement) => {
        let result = message;
        error = false;
        while (result.includes(substring)) {
            result = result.replace(substring, replacement);
        }

        return result;
    };
    const reverse = (message, substring) => {
        if (!message.includes(substring)) {
            error = true;
            console.log('error')
            return message;
        }
        error = false;
        let result = message.replace(substring, '');
        result += substring.split('').reverse().join('');

        return result;
    };

    
    let line = input.shift();
    while (line !== "Buy") {

        const [command, substring, replacement] = line.split('?');

        switch (command) {
            case 'TakeEven':
                message = takeEven(message);
                break;
            case 'ChangeAll':
                message = changeAll(message, substring, replacement);
                break;
            case 'Reverse':
                message = reverse(message, substring);
                break;

        }

        if (!error) {
            console.log(message);
        }

        line = input.shift();

    }

    console.log(`The cryptocurrency is: ${message}`);

}

solve((["z2tdsfndoctsB6z7tjc8ojzdngzhtjsyVjek!snfzsafhscs",
    "TakeEven",
    "Reverse?!nzahc",
    "ChangeAll?m?g",
    "Reverse?adshk",
    "ChangeAll?z?i",
    "Buy"])
);