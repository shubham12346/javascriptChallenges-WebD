   var ran1 = Math.floor(1+Math.random()*6);
var ran2= Math.floor(1+Math.random()*6);

var dice1 = "images/dice"+ran1+".png";
var dice2 = "images/dice"+ran2+".png";
document.getElementById("im1").src=dice1;
document.getElementById("im2").src=dice2;


  console.log(dice1+"   "+dice2);
  if(ran1>ran2)
  {
      var x= document.getElementById("winner");
      document.getElementById("winner").innerText="Player 1 Won ......"
      x.style.textAlign="center";
      
  }else{
       var y= document.getElementById("winner");
       document.getElementById("winner").innerText="Player 2 Won ......"
         y.style.textAlign="center";

  }
