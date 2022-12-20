let musicFile;
let musicFile2;
let button;
let button2;
let button3;
let button4
var jumpButton;
var t=0;
let amp;
var rB;
let music;
var slider;
var jmp;
var jmp1;
var jmp2;
var jmp3;
var speed;

function setup()
{
    createCanvas(640, 480);       // 캔버스
    soundFormats('mp3', 'ogg');   // 노래 불러오기
    musicFile = loadSound('Island', loadMusic);
    musicFile2 = loadSound('고백', loadMusic);

    //play, stop 버튼 만들기, 버튼 누를 시 실행되는 함수 정하기
    button = createButton("play");
    button.mousePressed(togglePlaying1);

    button2 = createButton("Music1");
    button2.mousePressed(togglePlaying2);
    music = 1;

    amp = new p5.Amplitude();

    //소리 크기 조절 슬라이더 만들기
    slider = createSlider(0,1,0.2,0.2);

    //점프 가능한 버튼 만들기
    jmp = createButton("Jump(20)");
    jmp1 = createButton("Jump(40)");
    jmp2 = createButton("Jump(60)");
    jmp3 = createButton("Jump(80)");
    jmp4 = createButton("Jump(100)");

    //점프 버튼 누를시 실행되는 함수
    jmp.mousePressed(jumpAudio);
    jmp1.mousePressed(jumpAudio1);
    jmp2.mousePressed(jumpAudio2);
    jmp3.mousePressed(jumpAudio3);
    jmp4.mousePressed(jumpAudio4);
    
    //재생 속도 조절 가능 슬라이더 만들기
    speed = createSlider(1,2,1,0.2);



}

//음악 플레이/정지/소리 설정
function togglePlaying1(){
    if(music === 1){
        if(!musicFile.isPlaying()){
            // rB=musicFile.reverseBuffer();
            // 소리의 값을 slider값으로 설정해 볼륨 조절이 가능하도록 함.
            musicFile.setVolume(slider.value());
            musicFile.rate(1);
            musicFile.play();
            button.html('pause');
        }else{
            musicFile.stop();
            button.html('play');
        }
    }
    if(music === 2){
        if(!musicFile2.isPlaying()){
            // rB=musicFile.reverseBuffer();
            musicFile2.setVolume(slider.value());
            musicFile.rate(1);
            musicFile2.play();
            button.html('pause');
        }else{
            musicFile2.stop();
            button.html('play');
        }
    }
 }

 function togglePlaying2(){
    if(music === 1){
        music = 2;
        button2.html('Music2');
    }else{
        music = 1;
        button2.html('Music1');
    }
    console.log(Island);
 }

function loadMusic()
{
    console.log("It's Working");
}


//음악에 따라 배경과, 원이 변화하도록 설정
function draw(){
console.log(amp.getLevel(), musicFile.duration());
console.log(amp.getLevel(), musicFile2.duration());

background(musicFile.currentTime()*10,0,255);

fill(255, 255, 255);
ellipse(musicFile.currentTime()*5,450-amp.getLevel()*1000, 20, 20);

//재생 속도 설정
musicFile.rate(speed.value());
musicFile2.rate(speed.value());

}


//음악 점프 설정 
function jumpAudio() {
 
    
    var len = musicFile.duration();
    musicFile.jump(20);

    var len = musicFile2.duration();
    musicFile2.jump(20);
}



function jumpAudio1() {
 
    var len = musicFile.duration();
    musicFile.jump(40);

    var len = musicFile2.duration();
    musicFile2.jump(40);

}

function jumpAudio2() {
 
    
    var len = musicFile.duration();
    musicFile.jump(60);

    var len = musicFile2.duration();
    musicFile2.jump(60);

}

function jumpAudio3() {
 
    
    var len = musicFile.duration();
    musicFile.jump(80);

    var len = musicFile2.duration();
    musicFile2.jump(80);

}

function jumpAudio4() {
 
    
    var len = musicFile.duration();
    musicFile.jump(100);

    var len = musicFile2.duration();
    musicFile2.jump(100);

}



// function jumpSong() {
//     var len = song.duration();
//     var t = 0; //random(len);
//     console.log(t);
//     song.jump(t);
//     }

    
// function mousePressed(){
//     t=t+10;
//     musicFile.jump(t)
// }