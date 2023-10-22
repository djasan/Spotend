const audio = (status = "init", currentTrack) => {
    const urlAudio = "./assets/audio/";
    let track; // Déclarer la variable track ici
  
    switch (status) {
      case "init":
        console.log('initialisation de l\'audio');
        track = new Audio(urlAudio + catalogue[currentTrack].audio);
        break;
      case "play":
        track.play();
        break;
      case "pause":
        track.pause();
        break;
      default:
        console.log("erreur dans la fonction audio");
        break;
    }
  
    return track; // Renvoyer la piste audio
  };
  
  export { audio };
  