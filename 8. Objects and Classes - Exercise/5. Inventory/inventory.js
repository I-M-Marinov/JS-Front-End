/* 
Create a function, which creates a register for heroes, with their names, level, and items (if they have such). 
The input comes as an array of strings. Each element holds data for a hero, in the following format:

"{heroName} / {heroLevel} / {item1}, {item2}, {item3}..." 

You must store the data about every hero. The name is a string, a level is a number and the items are all strings.
The output is all of the data for all the heroes you’ve stored sorted ascending by level. The data must be in the following format for each hero:

Hero: {heroName}
level => {heroLevel}
Items => {item1}, {item2}, {item3}

*/

function solve(arrayOfString) {

    const heroes = [];
    let hero = {};

    for (const row of arrayOfString) {
        let tokens = row.split(" / ");
        let name = tokens[0];
        let level = Number(tokens[1]);
        let weapons = tokens[2];

        hero = {
            heroName: name,
            heroLevel: level,
            items: weapons,
        };

        heroes.push(hero);
        heroes.sort((a, b) => a.heroLevel - b.heroLevel);

    }
        heroes.forEach(hero => {
            console.log(`Hero: ${hero.heroName}`);
            console.log(`level => ${hero.heroLevel}`);
            console.log(`items => ${hero.items}`);
        });
}




solve([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
]
);

solve([
    'Batman / 2 / Banana, Gun',
    'Superman / 18 / Sword',
    'Poppy / 28 / Sentinel, Antara'
]
); 


