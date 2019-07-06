// create variables for all four crystals
// create variables for wins, losses and totalScore
// create a function with variable for both mathRandom used for game
var compRandomNum = function() {
    return Math.floor((Math.random() * 102) + 19);
};
var userClickRandom = function() {
    return Math.floor(Math.random() * 11 + 1);
};
// create a function variable to check if win or if score go over = lose








// jQuery function for crystal count
$(document).ready(function(){
    $("#randNumber").append( compRandomNum );
    $("#randNumber").css("background-color", "green");
    $("#winLoss").css("background-color", "red");
    $("#winLoss").append("<p>Win: </p><p>Losses: </p>");
    $("#scoreInfo").css("background-color", "yellow");
    $("#scoreInfo").append("<p>Your total score is:</p>");
    $("#scoreBoard").css("background-color", "blue");
    $("#scoreBoard").append(userClickRandom());


                        
           




    
           
                $("#emerald1").click(function() {
                $("#scoreBoard").append(userClickRandom());
                    console.log(userClickRandom() + " em1");
                    alert(userClickRandom()); 
                });

            
                $("#emerald2").click(function() {
                $("#scoreBoard").append(userClickRandom());
                     console.log(userClickRandom() + " em2");
                     alert(userClickRandom()); 
                 });




    
});









                // $(" #emerald3").click(function() {
                        
                //     //alert(userChoice3).load(); 
                // });

                //  $("  #emerald4").click(function() {
                        
                //     //alert(uuserChoice4); 
                // });
            