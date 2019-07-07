// create variables for all four crystals set to undefined for now
var crystal1;
var crystal2;
var crystal3;
var crystal4;
// create variables for wins, losses and totalScore set to zero
var wins = 0;
var losses = 0;
var totalScore = 0;

// create a function with variable for both mathRandom used for game
var randNumToCompareWith = function () {
    return Math.floor(Math.random() * (120 - 19 + 1)) + 19;
};
var fourCrystalRandomNum = function () {
    return Math.floor(Math.random() * (12 - 1 + 1)) + 1;
};

// create a function variable inside add if else to check if the player win or if the score goes over randNumToCompareWith ---- if score over then game is lost or over -- restart

// fat Arrow function
var scoreChecker = (compareAllCrystals) => {
    totalScore += compareAllCrystals;
    console.log(mainRandNumToCompareWith);
    console.log(totalScore);
    console.log(compareAllCrystals);

    if (totalScore === mainRandNumToCompareWith) {
        wins++;
        alert('Charlie Sheen!');
         crystal1 = fourCrystalRandomNum();
         crystal2 = fourCrystalRandomNum();
         crystal3 = fourCrystalRandomNum();
         crystal4 = fourCrystalRandomNum();
         mainRandNumToCompareWith = randNumToCompareWith();
         
         totalScore = 0;

    } else if  (totalScore > mainRandNumToCompareWith) {
        losses++;
        alert('You Lost!');
        mainRandNumToCompareWith = randNumToCompareWith();

        totalScore = 0;

        
        
    };








};








// jQuery function for crystal count
$(document).ready(function () {
    mainRandNumToCompareWith = randNumToCompareWith();
    $("#randNumber").text(mainRandNumToCompareWith);

     crystal1 = fourCrystalRandomNum();
     crystal2 = fourCrystalRandomNum();
     crystal3 = fourCrystalRandomNum();
     crystal4 = fourCrystalRandomNum();

    //$("#winLoss").append("<p>Win: </p><p>Losses: </p>");
    $("#crystal1").click(function () {
        $("#scoreBoard").text(fourCrystalRandomNum);

        scoreChecker(fourCrystalRandomNum);

        console.log(fourCrystalRandomNum() + " em1");
        //alert(fourCrystalRandomNum);
    });

    $("#crystal2").click(function () {
        $("#scoreBoard").text(fourCrystalRandomNum());

        scoreChecker(fourCrystalRandomNum);

        console.log(fourCrystalRandomNum() + " em2");
        //alert(fourCrystalRandomNum);
    });





});









// $(" #crystal3").click(function() {

//     //alert(userChoice3).load(); 
// });

//  $("  #crystal4").click(function() {

//     //alert(uuserChoice4); 
// });