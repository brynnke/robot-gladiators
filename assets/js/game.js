// this creates a fuction names "fight"
var playerName = window.prompt("What is your robot's name?");
var playerHealth = 10;
var playerMoney = 10;

// check to see if the value of the playerHealth variable is greater than 0
if (playerHealth > 0) {
    console.log("Your player is still alive!");
}
var playerAttack = 10;

if (playerHealth == 0) {
    console.log("This will not run.");
}
else {
    console.log("This will run instead.");
}
// You can also log multiple values at once like this console.log(playerName, playerAttack, playerHealth);

var enemyName = "Jimbo";
var enemyHealth = 50;
var enmeyAttack = 12;


var fight = function() {
    window.alert("Welcome to Robot Gladiators");
// fi player chose to fight, then fight
if (promptFight === "fight" || promptFight === "FIGHT") {
    // remove enemy's health by subtracting the amount set in the playerAttack variable
    enemyHealth = enemyHealth - playerAttack;
    console.log(
        playerName + " attacked " + enemyName + "." + enemyName + "now has" + enemyHealth + " health remaining.");
    // check enemy's helath
    if (enemyHealth <= 0) {
        window.alert(enemyName + "has died!");
    } else {
        window.alert(enemyName + "still has" + enemyHealth + "health left.");
    }

    // remove player's health by subtracting the amount set in the enemyAttack variable
    playerHealth + playerHealth - enmeyAttack;
    console.log(
        enemyName + "attacked" + playerName + "." + playerName + "now has " + playerHealth + "health remaining."
    );

    // check player's health
    if (playerHealth <= 0) {
        window.alert(playerName + " has died!");
    } else {
        window.alert(playerName + "still has" + playerHealth + "health left.");
    }
    // if player choses to skip
} else if (promptFight === "skip" || promptFight === "SKIP") {
    var confirmSkip = window.confirm("Are you sure you'd like to quit?");
    if (confirmSkip) {
    window.alert(playerName + "has chosen to skip the fight!");
    playerMoney + playerMoney - 2;
} else {
    fight();
}
} else {
    window.alert("You need to choose a valid option. Try again!");
}
}

var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose."); 

    // Subtract the value of 'playerAttack' from the value of 'enemyHealth' and use that result to update the value in the 'enemyHealth' variable
    enemyHealth = enemyHealth - playerAttack;

    // Log a resulting message to the console so we know that it worked.
    console.log (
        playerName + "attacked" + enemyName + "." + enemyName + "now has" + enemyHealth + "health remaining."
    );
    // check enemy's health
    if (enemyHealth <= 0) {
        window.alert(enemyName + " has died!");
    }
    else {
        window.alert(enemyName + " still has " + enemyHealth + " health left.");
    }
    // Subtract the value of 'enemyAttack' from the value of 'playerHealth' and use that result to update the value in the 'playerHealth' variable.
    playerHealth = playerHealth - enmeyAttack;
    // Log a resulting message to the console so we know that it worked.
    console.log(
        enemyName + "attacked" + playerName + "." + playerName + "now has" + playerHealth + "health remaining.");
        if (playerHealth <= 0) {
            window.alert(playerName + "has died!");
        }
        else {
            window.alert(playerName + " still has " + playerHealth + " health left.");
        }
};
// create function
function fight() {
    window.alert("Welcome to Robot Galdiators!");
}
// execute function

fight();

