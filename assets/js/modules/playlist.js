const playlist = () => {
  const playlistHTML = document.querySelector("#playlist");
  playlistHTML.innerHTML = "<ul>";

  catalogue.forEach((morceau) => {
    playlistHTML.innerHTML += `
        <li>
            <p>Titre: ${morceau.titre}</p>
            <p>Artiste: ${morceau.artiste}</p>
            <p>Genre: ${morceau.genre.join(', ')}</p>
            <p>Année: ${morceau.année}</p>
            <img src="${morceau.cover}" alt="${morceau.titre} - ${morceau.artiste}">
            <audio controls>
                <source src="./assets/audio/${morceau.audio}" type="audio/mpeg">
                Votre navigateur ne prend pas en charge l'audio HTML5.
            </audio>
        </li>
    `;
  });

  playlistHTML.innerHTML += "</ul>";
};

export { playlist };