import { catalogue } from "./modules/catalogue.js";
import { slider } from "./modules/slider.js";
import { audio } from "./modules/audio.js";

const prevButton = document.querySelector("#prev");
const nextButton = document.querySelector("#next");
const playPause = document.querySelector("#playPause");
globalThis.catalogue = catalogue;
globalThis.track = null;
globalThis.currentTrack = 0;
globalThis.isPlaying = false;
const statusButtonPlayPause = () => {
  if (!isPlaying)
    playPause.innerText = "play";

  else {
    playPause.innerText = "pause";
  }

}
// Gestion du bouton "prev"
prevButton.addEventListener("click", () => {
  if (currentTrack > 0) {
    currentTrack--;
  } else {
    currentTrack = catalogue.length - 1;
  }
  slider("prev");
  audio("pause");
  audio();//"init";
  audio("play");
  isPlaying = true;
  statusButtonPlayPause();

});

// Gestion du bouton "next"
nextButton.addEventListener("click", () => {
  if (currentTrack < catalogue.length - 1) {
    currentTrack++;
  } else {
    currentTrack = 0;
  }
  slider("next");
  audio("pause");
  audio();//"init";
  audio("play");
  console.log(isPlaying);
  isPlaying = true;
  statusButtonPlayPause();

});
// Gestion du bouton "playPause"
playPause.addEventListener("click", () => {
  if (!isPlaying) {
    isPlaying = true;
    audio("play");
  } else {
    isPlaying = false;
  
    audio("pause");


  }
  statusButtonPlayPause();
  // isPlaying = !isPlaying
});





// Initialisation de la page
slider();
audio();
playlist()

