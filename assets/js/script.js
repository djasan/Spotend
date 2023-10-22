import { slider } from "./modules/slider.js";
import { audio } from "./modules/audio.js";
import { playlist } from "./modules/playlist.js";
import { catalogue } from "./modules/catalogue.js";

const prevButton = document.querySelector("#prev");
const nextButton = document.querySelector("#next");
const playPause = document.querySelector("#playPause");
let currentTrack = 0;
let isPlaying = false;

const statusButtonPlayPause = () => {
  if (!isPlaying) {
    playPause.innerText = "Play";
  } else {
    playPause.innerText = "Pause";
  }
};

// Gestion du bouton "prev"
prevButton.addEventListener("click", () => {
  currentTrack = (currentTrack - 1 + catalogue.length) % catalogue.length;
  slider("prev");
  audio("pause");
  audio("init", currentTrack);
  audio("play", currentTrack); // Pass the currentTrack argument
  isPlaying = true;
  statusButtonPlayPause();
});

// Gestion du bouton "next"
nextButton.addEventListener("click", () => {
  currentTrack = (currentTrack + 1) % catalogue.length;
  slider("next");
  audio("pause");
  audio("init", currentTrack);
  audio("play", currentTrack); // Pass the currentTrack argument
  isPlaying = true;
  statusButtonPlayPause();
});

// Gestion du bouton "playPause"
playPause.addEventListener("click", () => {
  if (!isPlaying) {
    isPlaying = true;
    audio("play", currentTrack); // Pass the currentTrack argument
  } else {
    isPlaying = false;
    audio("pause");
  }
  statusButtonPlayPause();
});

// Initialisation de la page
slider("init");
audio("init", currentTrack);
playlist();


















