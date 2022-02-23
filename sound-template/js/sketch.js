


let sounds = new Tone.Players({
  a: 'media/piano/a_note.mp3',
  b: 'media/piano/b_note.mp3',
  c: 'media/piano/c_note.mp3',
  d: 'media/piano/d_note.mp3',
  e: 'media/piano/e_note.mp3',
  f: 'media/piano/f_note.mp3',
  g: 'media/piano/g_note.mp3',

});

let soundNames = [
  'a', 'b', 'c', 'd', 'e', 'f', 'g',
];

let button;

let buttons = [];

let slider;

const delay = new Tone.FeedbackDelay("5n", 0.5).toDestination();


function preload(){

  // player1 = new Tone.Player("media/02-shot.mp3");
  

}

function setup() {
  createCanvas(800, 400);
  sounds.connect(delay);
  delay.toDestination();

  slider = createSlider(0., 1., 0.5, .05);
  slider.mouseReleased( () =>{
    delay.delayTime.value = slider.value();
  })

  

  soundNames.forEach((word, index) => {
    buttons[index] = createButton(word);
    buttons[index].position(index * 70 + 50, 100);
    buttons[index].mousePressed( () => playSound(word)  );
  })

}

function draw() {
  background(255);
  text('Press the buttons to play piano notes', 150, 80);
  text('Adjust Slider to increase/decrease note delay', 0, 380);
}

function keyPressed(){
  if(key === "1"){
    sounds.player('shot').start();

  }
  else if(key === "2"){
    sounds.player('through').start();
  }
  else if(key === "3"){
    sounds.player('theHeart').start();
  }  
}

function playSound(selectedSound = "shot"){
  sounds.player(selectedSound).start();
}