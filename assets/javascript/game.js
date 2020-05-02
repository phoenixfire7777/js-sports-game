//initializing variables
let resetButton = document.querySelector("#reset-button");
let numResets = document.querySelector("#num-resets");
let teamoneShootButton = document.querySelector("#teamone-shoot-button");
let teamoneNumshots = document.querySelector("#teamone-numshots");
let teamoneNumgoals = document.querySelector("#teamone-numgoals");
let teamtwoShootButton = document.querySelector("#teamtwo-shoot-button");
let teamtwoNumshots = document.querySelector("#teamtwo-numshots");
let teamtwoNumgoals = document.querySelector("#teamtwo-numgoals");

teamoneShootButton.addEventListener("click", function () {

    let teamoneShots = Number(teamoneNumshots.innerHTML) + 1;
    teamoneNumshots.innerHTML = teamoneShots;

    //randomize number
    let chanceOne = Math.floor(Math.random() * 10) + 1;
    if (chanceOne > 5) {
        console.log("#teamone-shoot-button clicked");
        let teamoneGoals = Number(teamoneNumgoals.innerHTML) + 1;
        teamoneNumgoals.innerHTML = teamoneGoals;
    }
})

teamtwoShootButton.addEventListener("click", function () {
    console.log("#teamtwo-shoot-button");
    let teamtwoShots = Number(teamtwoNumshots.innerHTML) + 1;
    teamtwoNumshots.innerHTML = teamtwoShots;

    //randomize number
    let chanceTwo = Math.floor(Math.random() * 10) + 1;
    if (chanceTwo > 5) {
        console.log("#teamtwo-shoot-button clicked");
        let teamtwoGoals = Number(teamtwoNumgoals.innerHTML) + 1;
        teamtwoNumgoals.innerHTML = teamtwoGoals;
    }
})

resetButton.addEventListener("click", function () {
    console.log("#reset-button")
    let teamoneGoals = Number(teamoneNumgoals.innerHTML);
    let teamtwoGoals = Number(teamtwoNumgoals.innerHTML);
    if (teamoneGoals > teamtwoGoals) {
        alert("TEAM ONE WINS!!!!!");
    }
    else if (teamoneGoals < teamtwoGoals) {
        alert("TEAM TWO WINS!!!!!");
    }
    else {
        alert("ITS A TIE!!!!!");
    }
    let resetCount = Number(numResets.innerHTML) + 1;
    numResets.innerHTML = resetCount;
    teamoneNumshots.innerHTML = 0;
    teamtwoNumshots.innerHTML = 0;
    teamoneNumgoals.innerHTML = 0;
    teamtwoNumgoals.innerHTML = 0;



})
