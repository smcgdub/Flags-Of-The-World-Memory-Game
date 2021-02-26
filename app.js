// VARIABLES 
// let matches = [];
// let flips = 0;
// let time;
// let gameMusic = 

// if (difficulty === "Easy"){
//   time = 90;
// } else if (difficulty === "Medium"){
//   time = 60;
// } else if (difficulty === "Hard"){
//   time = 30;
// }

// GAME MUSIC
class AudioController {
  constructor(){
    this.backgroundMusic = new Audio ("assets/audio/background-music.mp3");
    this.backgroundMusic.volume = 0.7;
    this.backgroundMusic.loop = true;
    this.youWin = new Audio ("assets/audio/you-win.mp3");
    this.youWin.volume = 0.5;
    this.youLose = new Audio ("assets/audio/you-lose.mp3");
    this.youLose.volume = 0.5;
  }

  startMusic(){
    this.backgroundMusic.play();
}

  stopMusic(){
    this.backgroundMusic.pause();
    this.backgroundMusic.currentTime = 0;
}

  youWin(){
    this.stopMusic.pause();
    this.youWin.play();
}

  youLose(){
    this.stopMusic();
    this.youLose.play();
}


}








function ready(){
    let audioController = new AudioController();
    audioController.startMusic();
}


// FUNCTIONS
function darkMode(){
  var element = document.body;
  element.classList.toggle("dark-mode");
}

function flip(){
  
}

