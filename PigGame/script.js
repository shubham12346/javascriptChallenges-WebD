var val=0;
const player=1;
const  random =()=>{
   val = Math.floor(Math.random() * 6 + 1);
} 



const player1 = document.querySelector('#player1')
const player2 = document.querySelector('#player2')
const rolldice = document.querySelector('#rolldice');
const diece = document.querySelector('#diece');

const player1Current =document.querySelector('#pc1');
const player2Current = document.querySelector('#pc2');
var player1Val =0;
var player2Val=0;

function start() {
    player1.textContent = 0;
    player2.textContent = 0;

}

rolldice.addEventListener('click',function(){
    random();
    diece.src= `dice-${val}.png`
    if (player1Val <= 10 && player2Val <= 10) {
        switch (player) {
            case 1:
                let cur1 = 0;
           if (val !== 1) {
                    cur1 += val;
                    player1Current.textContent = cur1;

                }
                player++;
                break;

            case 2:
                let cur2 = 0;
           if (val !== 1) {
                    cur2 += val;
                    player1Current.textContent = cur;

                }
                player--;
                break;
        }
    } else {
        (player1Val > player2Val) ? player1.textContent = 'you  win ' : player2.textContent = 'you won';
    }

})


