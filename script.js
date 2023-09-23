const container = document.getElementById('container');
const canvas = document.getElementById('canvas1');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const ctx = canvas.getContext('2d');
let audioSource;
let analyser;

container.addEventListener('click', function() {
//    let audio1 = new Audio();  //AudioSourceFeatuerLocation1
    //audio1.src = 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3';
    let audio1 = document.getElementById('audio1');
    audio1.src = "Hysteria - Premaster - (-6db).wav";
    const audioCtx = new AudioContext(); //Web Audio API

  audio1.play();
    audioSource = audioCtx.createMediaElementSource(audio1);
    analyser = audioCtx.createAnalyser();
    audioSource.connect(analyser);
    analyser.connect(audioCtx.destination);
    analyser.fftSize = 64;
    const bufferLength = analyser.frequencyBinCount;
    const dataArray = new Uint8Array(bufferLength);


    const barWidth = canvas.width / bufferLength;
    let barHeight;
    let x = 0;
   


    
function animate(){
    x=0
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    analyser.getByteFrequencyData(dataArray);
    for (let i = 0; i < bufferLength; i++) {
        barHeight = dataArray[i];
        ctx.fillStyle= 'white';
        ctx.fillRect(x, canvas.height - barHeight,barWidth, barHeight);
        x += barWidth;
    }
    requestAnimationFrame(animate);
}
animate();

});

