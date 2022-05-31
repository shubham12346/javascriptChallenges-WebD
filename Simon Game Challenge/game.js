var gamePattern = [];


var buttonColors =["red","blue","green","yellow"];

var userClickedPatern =[];

// to check if game is started or not 
var started =false;
var level =0;

$(document).keypress(function(e){
    if(!started)
    {
        $("#level-title").text("Label "+ level);
        nextSequence();
        started = true;
    }

});


$(".btn").click(function()
{
    var userChoosenColor = $(this).attr("id");
    userClickedPatern.push(userChoosenColor);
    playSound("sounds/"+userChoosenColor+".mp3");

    animatedPress(userChoosenColor);
    checkAnswer(userClickedPatern.length-1);
    
})


function nextSequence()
{
level++;
  $("#level-title").text("Label "+ level);

 var randomNumber = Math.floor(Math.random()*4);
var randomChoosenColor = buttonColors[randomNumber];
gamePattern.push(randomChoosenColor);
$("#"+randomChoosenColor).fadeIn(100).fadeOut(100).fadeIn(100);
playSound("sounds/"+randomChoosenColor+".mp3");





}


function playSound(name)
{
    var aud = new Audio(name);
    aud.play();
}



function animatedPress(currentColor)
{
    
    $("#"+currentColor).addClass("pressed");
    setTimeout(function()
    {
        $("#"+currentColor).removeClass("pressed");
    },100);


}

function checkAnswer(currentLevel)
{
    if(userClickedPatern[currentLevel] === gamePattern[currentLevel])
    {
        if(userClickedPatern.length=== gamePattern.length)
        {

            console.log("sucess");
        setTimeout( function() { 
          
            nextSequence() },1000);
        }
        
    }
    else{
        playSound("sounds/wrong.mp3");
        $("body").addClass("game-over");
        setTimeout( function()
        {
            $("body").removeClass("game-over");
            $("#level-title").text("Game Over ,Press Any key to Start Game");


        },1000)
        console.log("failed");
    }
    startOver();

}

function startOver()
{
    level=0;
    gamePattern= [];
    userClickedPatern =[];
    started = false;
}


