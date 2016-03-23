

function initInteractivity() 
{}
console.log("sup");
var arena = [];
var intervalID = null;
var currentIndex = -1;

function initInteractivity() {}



function rollDice(howMany, whatType) {
    var result = 0;
    for (var i = 0; i < howMany; i++) {
        result += Math.floor(Math.random() * whatType) + 1;
    }
    return result;
}

function didHit(attacker, defender) {
    console.log("attacker:", attacker);
    console.log("defender:", defender);
    var toHitNumber = defender.defense - attacker.attack;
    var roll = rollDice(1, 20);
    if (roll >= toHitNumber) return true;
    else return false;
}


function calculateDamage(attacker) {
    var damageRoll = attacker.weapon.getDamage();
    return damageRoll;
}

function handleAttack(attacker, defender) {
    var didTheyHit = didHit(attacker, defender);
    if (didTheyHit == true) {
        var howMuchDamage = calculateDamage(attacker);
        defender.hitPoints -= howMuchDamage;
        if (defender.hitPoints <= 0) gameOverMan(defender);
    }
}


function calculateTarget(attacker, arena) {
    var copyArena = arena.concat();
    var myIndex = copyArena.indexOf(attacker);
    copyArena.splice(myIndex, 1);
    var sortByLowestHitPoints = function (a, b) {
        if (a.hitPoints > b.hitPoints) return 1;
        else if (a.hitpoints < b.hitPoints) return -1;
        else return 0;
    };
    copyArena.sort(sortByLowestHitPoints);
    return copyArena[0];
}

function startGame() {
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

    var halberd = {
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
        name: "Jesse",
        attack: 2,
        defense: 10,
        hitPoints: 12,
        weapon: dagger
    };
    var gladiator2 = {
        name: "Toby",
        attack: 4,
        defense: 12,
        hitPoints: 14,
        weapon: claw
    };
    var gladiator3 = {
        name: "Brandy",
        attack: 1,
        defense: 14,
        hitPoints: 10,
        weapon: halberd
    };
    var gladiator4 = {
        name: "Bruce",
        attack: 5,
        defense: 11,
        hitPoints: 12,
        weapon: boomStick
    };

    arena.push(gladiator1, gladiator2, gladiator3, gladiator4);
    currentIndex = -1;
    intervalID = setInterval(nextAttack, 1000);
}




function nextAttack() {
    if (currentIndex < arena.length) {
        currentIndex++;
    } else {
        currentIndex = 0;
    }
    if(currentIndex > arena.length - 1)
    {
        currentIndex = 0;
    }
        

    var currentGladiator = arena[currentIndex];
    console.log("currentGladiator:", currentGladiator);
    console.log("currentIndex:", currentIndex);
    if(currentGladiator == undefined)
    {
        console.error("arena:", arena);
    }
    var currentDefender = calculateTarget(currentGladiator, arena);
    handleAttack(currentGladiator, currentDefender);

}


function gameOverMan(defender) {
    var defendersIndex = arena.indexOf(defender);
    arena.splice(defendersIndex, 1);
    if (arena.length <= 1) {
        clearInterval(intervalID);
        intervalID = null;
    }
}

function d(o) {
    console.log(o);
}

startGame();