// create variables for all all crystals set to undefined for now
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
var allCrystalRandomNum = function () {
    return Math.floor(Math.random() * (12 - 1 + 1)) + 1;
};

// create a function variable inside add if else to check if the player win or if the score goes over randNumToCompareWith ---- if score over then game is lost or over -- restart


var scoreChecker = function(compareAllCrystals) {
    totalScore += compareAllCrystals;
    console.log(mainRandNumToCompareWith);
    console.log(totalScore);
    console.log(compareAllCrystals);

    if (totalScore === mainRandNumToCompareWith) {
        wins++;
        alert('Charlie Sheen!');
        $("#win").text(wins);
         crystal1 = allCrystalRandomNum();
         crystal2 = allCrystalRandomNum();
         crystal3 = allCrystalRandomNum();
         crystal4 = allCrystalRandomNum();
         mainRandNumToCompareWith = randNumToCompareWith();
         
         totalScore = 0;

    } else if  (totalScore > mainRandNumToCompareWith) {
        losses++;
        alert('You Lost!');
        $("#lose").text(losses);
        mainRandNumToCompareWith = randNumToCompareWith();

        totalScore = 0;

        
        
    };


    $("#scoreBoard").text(totalScore);
    return;





};








// jQuery function for crystal count
$(document).ready(function () {
    mainRandNumToCompareWith = randNumToCompareWith();
    $("#randNumber").text(mainRandNumToCompareWith);

     crystal1 = allCrystalRandomNum();
     crystal2 = allCrystalRandomNum();
     crystal3 = allCrystalRandomNum();
     crystal4 = allCrystalRandomNum();

    
    $("#crystal1").click(function () {
        $("#scoreBoard").text(allCrystalRandomNum);

        scoreChecker(crystal1);

        console.log(allCrystalRandomNum() + " em1");
        //alert(allCrystalRandomNum);
    });

    $("#crystal2").click(function () {
        $("#scoreBoard").text(allCrystalRandomNum());

        scoreChecker(crystal2);

        console.log(allCrystalRandomNum() + " em2");
        //alert(allCrystalRandomNum);
    });


    $(" #crystal3").click(function() {
        scoreChecker(crystal3);
        //alert(userChoice3).load(); 
    });

    $("  #crystal4").click(function() {
        scoreChecker(crystal4);
        //alert(uuserChoice4); 
    });





});








