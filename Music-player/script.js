console.log("hello");
// initialize the variable 
let songIndex =0;
let audioElement = new Audio('songs/2.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let songItem = Array.from(document.getElementsByClassName('songItem') );


let songs =[
    {  songName: " Song 1 ", filePath: "songs/1.mp3",coverPath:"covers/1.jpg"   },
     {  songName: " Song 2 ", filePath: "songs/2.mp3",coverPath:"covers/2.jpg"   },
     {  songName: " Song 3 ", filePath: "songs/3.mp3",coverPath:"covers/3.jpg"   },
     {  songName: " Song 4 ", filePath: "songs/4.mp3",coverPath:"covers/4.jpg"   },
    {  songName: " Song 5 ", filePath: "songs/5.mp3",coverPath:"covers/5.jpg"   }

]

 songItem.forEach((element,i) => {
     console.log(element,i);
     element.getElementsByTagName('img')[0].src= songs[i].coverPath;
     element.getElementsByClassName('songName')[0].innerText = songs[i].songName;
     
 });
// handle pause /play event 
masterPlay.addEventListener('click',function()
{
    if(audioElement.paused || audioElement.currentTime<=0)
    {
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');

        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity=1;
    }else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-cicle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity=0;
    }
})

// listen to Events 
audioElement.addEventListener('timeupdate',()=>
{
  
    myProgressBar.value  = parseInt((audioElement.currentTime)/(audioElement.duration)*100);
    if(myProgressBar.value==100)
    {
        if(songIndex==5)
            {
                songIndex=0;

            }else{
                songIndex++;

            }
            
                audioElement.src = `songs/${songIndex+1}.mp3`;
                audioElement.currentTime=0;
                audioElement.play();
               
                gif.style.opacity=1;
                document.getElementById("songInfoName").innerText=songs[songIndex].songName;

            }
});
myProgressBar.addEventListener('change',()=>
{
    audioElement.currentTime =myProgressBar.value * audioElement.duration/100 ;
});
 
function makeAllPlay()
{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>
{
   
        
         element.classList.remove('fa-pause-circle');
         element.classList.add('fa-play-circle');
  
   
    
});

}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>
{
    element.addEventListener('click',(e)=>
    {
            makeAllPlay();
            songIndex = parseInt(e.target.id);
         e.target.classList.remove('fa-play-circle');
         e.target.classList.add('fa-pause-circle');
         audioElement.src = `songs/${songIndex}.mp3`;
         audioElement.currentTime=0;
         audioElement.play();
           masterPlay.classList.remove('fa-play-circle');

        masterPlay.classList.add('fa-pause-circle');
          masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity=1;
document.getElementById("songInfoName").innerText=songs[songIndex-1].songName;
    })
   
    
})
document.getElementById("next").addEventListener('click',()=>
{
    if(songIndex>=5)
    {
        songIndex=0;

    }else{
        songIndex++;
    }
    
         audioElement.src = `songs/${songIndex+1}.mp3`;
         audioElement.currentTime=0;
         audioElement.play();
           masterPlay.classList.remove('fa-play-circle');

        masterPlay.classList.add('fa-pause-circle');
          masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity=1;
        document.getElementById("songInfoName").innerText=songs[songIndex].songName;
});

document.getElementById("previous").addEventListener('click',()=>
{
    if(songIndex<=0)
    {
        songIndex=0;

    }else{
        songIndex--;
    }
    
         audioElement.src = `songs/${songIndex+1}.mp3`;
         audioElement.currentTime=0;
         audioElement.play();
           masterPlay.classList.remove('fa-play-circle');

        masterPlay.classList.add('fa-pause-circle');
          masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity=1;
        document.getElementById("songInfoName").innerText=songs[songIndex].songName;
});


