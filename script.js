const button1 = document.getElementById('button1');
let audio1 = new Audio();  //AudioSourceFeatuerLocation1
const audioCtx = new AudioContext(); //Web Audio API
console.log(audioCtx);


//AUDIO SOURCE
audio1.src='Hysteria - Premaster - (-6db).wav';

button1.addEventListener('click', function(){
    if(audio1.paused){
        audio1.play();
    }else{
        audio1.pause();
    }
    audio1.addEventListener('playing', function(){
        console.log("Audio 1 started playing!");
    });
    audio1.addEventListener('ended', function(){
        console.log("Audio 1 ended!");
    })
    audio1.addEventListener('pause', function(){
        console.log("Audio 1 paused!");
    })
})
//Web Audio API
const button2 = document.getElementById('button2');
button2.addEventListener('click', playSound);
function playSound(){
    const oscillator = audioCtx.createOscillator();
    oscillator.connect(audioCtx.destination);
    oscillator.type='triangle';
    oscillator.start();
    setTimeout(function(){
       oscillator.stop()}, 500);
}
