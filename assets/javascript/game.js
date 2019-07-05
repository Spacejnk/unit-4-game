// mathRand computer choice
var compChoice = Math.floor((Math.random() * 102) + 19);

//document.getElementById("randNumber").innerHTML = x;

var userChoice = Math.floor((Math.random() * 102) + 19);
var userChoice2 = Math.floor((Math.random() * 102) + 19);
var userChoice3 = Math.floor((Math.random() * 102) + 19);
var userChoice4 = Math.floor((Math.random() * 102) + 19);



// jQuery function for crystal count
$(document).ready(function(){
    $("#randNumber").append( compChoice );
    $("#randNumber").css("background-color", "green");
    $("#winLoss").css("background-color", "red");
    $("#winLoss").append("<p>Win: </p><p>Losses: </p>");
    $("#scoreInfo").css("background-color", "yellow");
    $("#scoreInfo").append("<p>Your total score is:</p>");
    $("#scoreBoard").css("background-color", "blue");
    $("#scoreBoard").append(parseInt($("<p>score: </p")));



    $(".jewel").click(function() { 
            var userChoice = parseInt($("#scoreBoard").text());
           
            $("#scoreBoard").text((userChoice++));
            

        });

    $("#emerald1").click(function() {
            $("#scoreBoard").text(userChoice++);
                //alert(userChoice); 
            });


  



        $(" #emerald2").click(function() {
            
            //alert(userChoice2); 
        });

        $(" #emerald3").click(function() {
            
            //alert(userChoice3).load(); 
        });

        $("  #emerald4").click(function() {
            
            //alert(uuserChoice4); 
        });
  
    

    

   
    
    

    







});