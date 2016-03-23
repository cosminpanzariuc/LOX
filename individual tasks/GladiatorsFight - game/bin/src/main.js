var arena = []
var intervalID = null;
var currentIndex = -1;

function rollDice(howMany, whatType) { // functioneaza ca un joc de zaruri unde HowMany este numarul de zaruri si whatType este numarul de fete ale zarului. Astfel se genereaza un numar random care poate avea un minim = howMany si un maxim = howMany * whatType
    var result = 0;
    for (var i = 0; i < howMany; i++) {
        result += Math.floor(Math.random() * whatType + 1);
    }
    return result;
}

function didHit(attacker, defender) { // daca rollDice > diferenta dintre atacul atacatorului si apararea aparatorului - atunci se returneaza "true", in caz contrar, se returneaza "false"
    var toHitNumber = defender.defense - attacker.attack;
    var roll = rollDice(1, 20);
    if (roll >= toHitNumber) {
        return true;
    } else {
        return false;
    }
}

function calculateDamage(attacker) { // returneaza damage-ul provocat de atacator bazandu-se pe functia rollDice()
    var damageRoll = attacker.weapon.getDamage();
    return damageRoll;
}

function handleAttack(attacker, defender) { // daca functia didHit() returneaza true se calculeaza punctele ramase pentru gladiatorul lovit iar in caz contrar, se considera lovitura ratata
    d(attacker.name + " is attacking " + defender.name);
    var didTheyHit = didHit(attacker, defender);
    if (didTheyHit == true) {
        var howMuchDamage = calculateDamage(attacker);
        defender.hitPoints -= howMuchDamage;
        d(attacker.name + " hit for " + howMuchDamage + " points of damge, " + defender.name + " has " + defender.hitPoints + " hit points left.");
        if (defender.hitPoints <= 0) { // daca gladiatorul are >=hitPoints se considera mort si va iesi din arena
            gameOverMan(defender);
        }
    } else {
        d("missed...");
    }
}

function calculateTarget(attacker, arena) { // functie ce returneaza gladiatorul cel mai slab din punct de vedere al proprietatii hitPoints   
    var copyArena = arena.concat(); // de asemenea se creaza un duplicate pentru arena..
    var myIndex = copyArena.indexOf(attacker);
    copyArena.splice(myIndex, 1); // ..din care se scoate gladiatorul care ataca (nu se poate ataca pe el insusi)
    var sortByLowestHitPoints = function (a, b) { //dupa care se sorteaza gladiatorii ramasi din noul array in ordine crescatoare a valorii proprietatii hitPoints
        if (a.hitPoints > b.hitPoints) {
            return 1;
        } else if (a.hitPoints < b.hitPoints) {
            return -1;
        } else {
            return 0;
        }
    };
    copyArena.sort(sortByLowestHitPoints);
    return copyArena[0]; //returneaza gladiatorul cu cel mai mic hitPoints
}

function startGame() { // functie de initializare in care sunt declararti gladiatorii si damage-ul produs de fiecare arma in parte
    var dagger = {
        getDamage: function () {
            return rollDice(1, 4);
        }
    };

    var claw = {
        getDamage: function () {
            return rollDice(1, 3);
        }
    };
    var stick = {
        getDamage: function () {
            return rollDice(1, 12);
        }
    };

    var boomStick = {
        getDamage: function () {
            return rollDice(3, 4);
        }
    };

    var gladiator1 = {
        name: "Anthony",
        attack: 15,
        defense: 20,
        hitPoints: 10,
        weapon: dagger
    };
    var gladiator2 = {
        name: "Tom",
        attack: 13,
        defense: 7,
        hitPoints: 10,
        weapon: claw
    };
    var gladiator3 = {
        name: "Dom",
        attack: 10,
        defense: 6,
        hitPoints: 7,
        weapon: stick
    };
    var gladiator4 = {
        name: "Tim",
        attack: 12,
        defense: 11,
        hitPoints: 9,
        weapon: boomStick
    };

    arena.push(gladiator1, gladiator2, gladiator3, gladiator4);

    currentIndex = -1;
    intervalID = setInterval(nextAttack, 3000); // va repeta blocul de cod nextAttack pana cand in arena va ramane un singur gladiator
}

function gameOverMan(defender) { // functie ce scoate din scena fiecare gladiator mort - adica cu hitPoints <= 0
    var defendersIndex = arena.indexOf(defender);
    arena.splice(defendersIndex, 1);

    d("-------------" + defender.name + "Died!");
    d(arena)

    if (arena.length <= 1) {
        clearInterval(intervalID);
        intervalID = null;
        d("THE END. Survivor = " + arena[0].name)
    }
}

function nextAttack() { // functie ce calculeaza urmatorul atac in functie de variabila currentIndex
    if (arena.length == 1) {
        d("THE END. Survivor = " + arena[0].name)
    };

    if (currentIndex < arena.length - 1) {
        currentIndex++;
    } else {
        currentIndex = 0;
    }

    var currentGladiator = arena[currentIndex];
    d(currentGladiator.name + " 's turn." + currentGladiator.hitPoints);
    var currentDefender = calculateTarget(currentGladiator, arena);
    handleAttack(currentGladiator, currentDefender);
}

function d(o) {
        console.log(o);
    } // consola
function initInteractivity() {
    d("LET THE GAME BEGIN !!!")
};
startGame();