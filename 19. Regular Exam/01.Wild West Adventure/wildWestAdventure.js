function solve(input) {

    const shootersCount = Number(input.shift());
    const shooters = {};

    for (let i = 0; i < shootersCount; i++) {
        let [name, hp, bullets] = input[i].split(' ');

        if (Number(hp) > 100) {
            hp = 100;
        }

        shooters[name] = {
            hp: Number(hp),
            bullets: Number(bullets),
        }

    }

    let commandLine = input.shift();

    while (commandLine != 'Ride Off Into Sunset') {

        const [command, name, firstArg, secondArg] = commandLine.split(' - ');

        let character, characterHP;
        const maxNumberOfBullets = 6;
        switch (command) {

            case 'FireShot':
                character = name;
                const target = firstArg;

                if (shooters[character].bullets > 0) {
                    shooters[character].bullets--;
                    console.log(`${character} has successfully hit ${target} and now has ${shooters[character].bullets} bullets!`);
                } else {
                    console.log(`${character} doesn't have enough bullets to shoot at ${target}!`);
                }
                break;

            case 'TakeHit':
                character = name;
                const damage = Number(firstArg);
                const attacker = secondArg;
                characterHP = Number(shooters[character].hp);

                characterHP -= damage;
                shooters[character].hp = characterHP;

                if (shooters[character].hp > 0) {
                    console.log(`${character} took a hit for ${damage} HP from ${attacker} and now has ${characterHP} HP!`);
                } else {
                    delete shooters[character];
                    console.log(`${character} was gunned down by ${attacker}!`);
                }
                break;

            case 'Reload':
                character = name;

                if ((Number(shooters[character].bullets)) < maxNumberOfBullets) {
                    let difference = parseInt(maxNumberOfBullets) - parseInt(shooters[character].bullets);
                    shooters[character].bullets = maxNumberOfBullets;
                    console.log(`${character} reloaded ${difference} bullets!`);
                } else {
                    console.log(`${character}'s pistol is fully loaded!`);
                }

                break;

            case 'PatchUp':
                character = name;
                const amountHp = Number(firstArg);
                characterHP = Number(shooters[character].hp);

                if (shooters[character].hp < 100) {
                    characterHP += amountHp;
                    shooters[character].hp = characterHP;

                    console.log(`${character} patched up and recovered ${amountHp} HP!`);

                    if (Number(shooters[character].hp) > 100) {
                        shooters[character].hp = 100;
                    }

                } else {
                    console.log(`${character} is in full health!`);
                }

                break;
        }

        commandLine = input.shift();

    }

    for (const shooter in shooters) {

        console.log(`${shooter}`);
        console.log(`  HP: ${shooters[shooter].hp}`);
        console.log(`  Bullets: ${shooters[shooter].bullets}`);
    }

}

solve((["2",
    "Gus 100 4",
    "Walt 100 5",
    "FireShot - Gus - Bandit",
    "TakeHit - Walt - 100 - Bandit",
    "Reload - Gus",
    "Ride Off Into Sunset"])
);