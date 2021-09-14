var canvas, backgroundImage;

var gameState = 0;
var contestantCount;
var allContestants;
var answer;
var database;

var question, contestant, qz;


function setup(){
  canvas = createCanvas(850,400);
  database = firebase.database();
  qz = new Quizz();
  qz.getState();
  qz.start();
}


function draw(){
  background("pink");
  if(contestantCount === 4){
    qz.update(1);
  }
  if(gameState === 1){
    clear();
    qz.play();
  }
}
