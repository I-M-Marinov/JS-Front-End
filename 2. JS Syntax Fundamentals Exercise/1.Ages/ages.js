/* 
Write a function that determines whether based on the given age a person is: baby, child, teenager, adult, elder.
The input comes as a single number parameter. The bounders are:
·	0-2 (age) – is a baby;   
·	3-13 (age) – is a child; 
·	14-19 (age) – is a teenager;
·	20-65 (age) – is an adult;
·	>=66 (age) – is an elder; 
·	In all other cases print – "out of bounds";
The output should be printed to the console.
*/

function determineAge(number){
    if (number >= 0 && number <=2){
        console.log("baby");
    } else if (number >=3 && number <=13){
        console.log("child");
    } else if (number >=14 && number <=19){
        console.log("teenager");
    } else if (number >=20 && number <=65){
        console.log("adult");
    } else if (number >=66){
        console.log("elder");
    } else {
        console.log("out of bounds");
    }
    }

    determineAge(20);
    determineAge(19);
    determineAge(65);
    determineAge(2);
    determineAge(44);
    determineAge(65);