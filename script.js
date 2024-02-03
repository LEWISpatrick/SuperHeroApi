const SUPERHERO_TOKEN = '918387703296420';
const BASE_URL = `https://superheroapi.com/api.php/${SUPERHERO_TOKEN}`;
let newHero = document.getElementById('newImage');
let deleteHero = document.getElementById('deletImage');



newHero.addEventListener('click', function() {
  let radomSupperHero = Math.floor(Math.random() * 731)+1 ;
  getSuperHero(radomSupperHero);
  console.log("Error")
});





deleteHero.addEventListener('click', function () {
  let imageElement = document.querySelector('img');
  console.log('ERRO')
  if (imageElement) {
    imageElement.remove();
  }
});




const getSuperHero = (id) => {
    fetch(`${BASE_URL}/${id}`)
    .then(response => response.json())
    .then(json => {
        console.log(json.image);
        // Create a new image element
        const newImage = document.createElement('img');
        newImage.src = json.image.url;
        // Append the new image to the body
      
        document.querySelector('body').appendChild(newImage);
    })
}



deleteHero.onclick = () => console.log("deleteHero was clicked!")

