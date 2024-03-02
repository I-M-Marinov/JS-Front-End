/* 
You will receive a single string. 
This string is written in PascalCase format. Your task here is to split this string by every word in it. 
Print them joined by comma and space.
*/


function solve(string) {
    const matches = string.matchAll(/[A-Z][a-z]*/g);
    const words = Array.from(matches).map(match => match[0]);

    console.log(words.join(', '));
  }
  
    solve('SplitMeIfYouCanHaHaYouCantOrYouCan');
    solve('HoldTheDoor');
    solve('ThisIsSoAnnoyingToDo');
