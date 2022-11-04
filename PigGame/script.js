var val=0;
var player=1;
const  random =()=>{
   val = Math.floor(Math.random() * 6 + 1);
} 



const player1 = document.querySelector('#player1')
const player2 = document.querySelector('#player2')
const rolldice = document.querySelector('#rolldice');
const diece = document.querySelector('#diece');
const hold = document.querySelector('#hold');
const activePlayer = document.querySelectorAll('.activePlayer');

const player1Current =document.querySelector('#pc1');
const player2Current = document.querySelector('#pc2');
var player1Val =0;
var player2Val=0;
var playerCurrentVal=0;

function start() {
    player1.textContent = 0;
    player2.textContent = 0;

}





rolldice.addEventListener('click',function(){
    random();
    diece.src= `dice-${val}.png`

   switch(player){
    case 1:
        playerCurrentVal += val;
        player1Current.textContent = playerCurrentVal;
        console.log(player)
        activePlayer[player].classList.add('border-')
        if(val===1)
        {
            player++;
            player1Val+=playerCurrentVal;
            player1.textContent=player1Val;
            playerCurrentVal = 0;
            player1Current.textContent = playerCurrentVal;

            
        }
        break;

        case 2:
            console.log(player)
           playerCurrentVal += val;
           player2Current.textContent = playerCurrentVal
          
           if (val === 1) {
               player--;
                player2Val+=playerCurrentVal;
               player2.textContent = player1Val;
               playerCurrentVal = 0;
               player2Current.textContent = playerCurrentVal;

           }
           break;
   }
    

})

hold.addEventListener('click',function(){
 
    if(player===1)
    {
      
        player1Val+=playerCurrentVal;
        player1.textContent = player1Val;
        playerCurrentVal = 0;

    }else{
     
        player2Val+=playerCurrentVal;
        player2.textContent = player2Val;
        playerCurrentVal = 0;
    }
    (player > 1) ? player-- : player++;
})






