

import { catalogue } from './assets/js/module/catalogue.js';

const playList = () => {
    console.log("Affichage de la playlist");
catalogue.forEach((track) => {
    // variable = créer li dans l'HTML
    const node = document.createElement("li");
      // variable = créer img dans l'Html
    const coverNode = document.createElement("img");
    // source de la variable img qu'on a créé 
    coverNode.src = coverUrl + track.cover;
    // variable = créer le span dans HTML
    const spanNode = document.createElement("span");
    // variable = créer le texte dans le li
    const textNode = document.createTextNode(
      track.titre + " - " + track.artiste
    );

    // ajout des variable qu'on a créé plus haut
    node.append(coverNode);
    spanNode.append(textNode);
    node.append(spanNode);
    trackPlaylist.append(node);
  });
};

slider();
initPlaylist();
audio();
