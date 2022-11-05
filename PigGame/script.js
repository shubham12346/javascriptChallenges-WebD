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
const winner = document.querySelector('#winner');

const player1Current =document.querySelector('#pc1');
const player2Current = document.querySelector('#pc2');
var player1Val =0;
var player2Val=0;
var playerCurrentVal=0;
var player1Chances =0;
var player2chances=0;

function start() {
   location.reload();

}

const left = document.querySelector('.left')
const right = document.querySelector('.right');
console.log(left,right)





    // rolling dice button 
    rolldice.addEventListener('click', function () {
    
        

        if ((player1Chances>0)&&  (player1Chances=== player2chances) &&  (player1Val >= 20 || player2Val >= 20) ) {
            console.log(player1Val)
            winner.classList.remove('hidden');
            if (player1Val > player2Val) {
                winner.textContent = "Player 1 won start new game  "


            } else {
                winner.textContent = "Player 2 won  start new game "
            
            }
        }else{
            random();
            diece.src = `dice-${val}.png`

            if (player === 1) {
                left.classList.add('bg-green-400');


            }

            if (player === 2) {

                right.classList.add('bg-green-400');
                console.log("player 2");
            }


            switch (player) {
                case 1:
                    playerCurrentVal += val;
                    player1Current.textContent = playerCurrentVal;

                    activePlayer[player].classList.add('border-')
                    if (val === 1) {
                        player1Chances++;
                        player++;
                        player1Val += playerCurrentVal;
                        player1.textContent = player1Val;
                        playerCurrentVal = 0;
                        player1Current.textContent = playerCurrentVal;
                        left.classList.remove('bg-green-400');


                    }
                    break;

                case 2:

                    playerCurrentVal += val;
                    player2Current.textContent = playerCurrentVal

                    if (val === 1) {
                            player2chances++;
                        player2Val += playerCurrentVal;
                        player2.textContent = player2Val;
                        playerCurrentVal = 0;
                        player2Current.textContent = playerCurrentVal;
                        right.classList.remove('bg-green-400')
                        player--;

                    }
                    break;
            }

            
        }

       
          


        
    
       
    })


    //hold button 
    hold.addEventListener('click', function () {

        if (player === 1) {

            player1Val += playerCurrentVal;
            player1.textContent = player1Val;
            playerCurrentVal = 0;
            left.classList.remove('bg-green-400');

        } else {

            player2Val += playerCurrentVal;
            player2.textContent = player2Val;
            playerCurrentVal = 0;
            right.classList.remove('bg-green-400');
        }
        (player > 1) ? player-- : player++;
    })

    









