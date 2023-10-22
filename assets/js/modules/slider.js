
const sliderHTML = document.querySelector("#slider");
const coverUrl = "./assets/img/cover/";

const initSlider = () => {
  const coverSlider = document.createElement("img");
  coverSlider.src = coverUrl + catalogue[currentTrack].cover;
  coverSlider.id = "coverSlider";
  sliderHTML.append(coverSlider);

  const imgA = document.createElement("img");
  imgA.src = coverUrl + catalogue[currentTrack].cover; // Utilisez le chemin correct
  imgA.alt = `${catalogue[currentTrack].titre} - ${catalogue[currentTrack].artiste}`;
  imgA.id = "imgA";
  sliderHTML.append(imgA);
}
const nextSlider = () => {
  currentTrack = (currentTrack + 1) % catalogue.length; // Mettez à jour l'indice
  document.querySelector("#coverSlider").src = coverUrl + catalogue[currentTrack].cover;
  document.querySelector("#imgA").classList.add("transSlider");
  document.querySelector("#imgA").classList.add("slideRight");
  setTimeout(() => {
      document.querySelector("#imgA").src = coverUrl + catalogue[currentTrack].cover; // Mettez à jour la source
      document.querySelector("#imgA").alt = `${catalogue[currentTrack].titre} - ${catalogue[currentTrack].artiste}`;
      document.querySelector("#imgA").classList.remove("transSlider");
      document.querySelector("#imgA").classList.remove("slideRight");
  }, 500);
};



const slider = (status = "init") => {
    console.log("initialisation du slider");
    /* console.dir(catalogue);
    console.log(catalogue[0].cover); */
    //console.log(catalogue[0]["cover"]);



    switch (status) {
        case "init":
            initSlider();

            break;
        case "next":
            nextSlider();




            break;
        case "prev":
            document.querySelector("#coverSlider").src =
                coverUrl + catalogue[currentTrack].cover;
            break;
        default:
            break;
    }



};

export { slider };


