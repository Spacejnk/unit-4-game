var compChoice = Math.floor((Math.random() * 102) + 19);
//document.getElementById("randNumber").innerHTML = x;
var userChoice = Math.floor((Math.random() * 102) + 19);
var userChoice2 = Math.floor((Math.random() * 102) + 19);
var userChoice3 = Math.floor((Math.random() * 102) + 19);
var userChoice4 = Math.floor((Math.random() * 102) + 19);


$(document).ready(function(){
    $("#randNumber").append( compChoice );
    $("#randNumber").css("background-color", "green");
    $("#winLoss").css("background-color", "red");
    $("#winLoss").append("<p>Win: </p><p>Losses: </p>");
    $("#scoreInfo").css("background-color", "yellow");
    $("#scoreInfo").append("<p>Your total score is:</p>");
    $("#scoreBoard").css("background-color", "blue");
    $("#scoreBoard").append("<p>score: 0</p>");


    $("#emerald1").append("<p>Your total score is:</p>");

    $("#emerald1").click(function() {
           
        alert(userChoice); 
    });
    $(" #emerald2").click(function() {
           
        alert(userChoice2); 
    });
    $(" #emerald3").click(function() {
           
        alert(userChoice3).load(); 
    });
    $("  #emerald4").click(function() {
           
        alert(uuserChoice4); 
    });
  
    

    

   
    
    

    









});