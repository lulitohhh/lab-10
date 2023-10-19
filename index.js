function renderMoviesRecommended(movies) {
    let container = document.getElementById("recommended")
    container.innerHTML = ""
    for(let i = 0; i < movies.length; i++) {
        const movie = movies[i]
        container.innerHTML += movie.toHtmlCard(i)
    }
}

function renderMoviesTrending(movies) {
    let container = document.getElementById("trending")
    container.innerHTML = ""
    for(let i = 0; i < movies.length; i++) {
        const movie = movies[i]
        container.innerHTML += movie.toHtmlCard(i)
    }
}

function renderBanner (num) {
    let container = document.getElementById("banner")
    container.innerHTML = moviesRecommended[num].toHtmlBanner()
}

function changeBanner (num) {
    renderBanner(num)
}



function movieSelected(num) {
    const movie = movies[num]
    console.log(movie)
}



let moviesRecommended = []
for (let i = 0; i < recommended.length; i++){
    const movieJSON = recommended[i]
    const movie = new Movie(movieJSON.title, movieJSON.description, movieJSON.rating, movieJSON.imgCard, movieJSON.imgBanner)
    moviesRecommended.push(movie)
}

let moviesTrending = []
for (let i = 0; i < trending.length; i++){
    const movieJSON = trending[i]
    const movie = new Movie(movieJSON.title, movieJSON.description, movieJSON.rating, movieJSON.imgCard, movieJSON.imgBanner)
    moviesTrending.push(movie)
}

renderMoviesRecommended(moviesRecommended)
renderMoviesTrending(moviesTrending)
renderBanner(0)


const prevButton = document.getElementById("prevButton");
const nextButton = document.getElementById("nextButton");
const cardContainer = document.getElementById("recommended"); // Cambia el ID al de tu contenedor

const cardWidth = 220; // Ancho de cada tarjeta en píxeles
const cardMargin = 10; // Margen entre tarjetas en píxeles

let currentPosition = 0;

// Función para mover el carrusel hacia la izquierda
prevButton.addEventListener("click", () => {
    if (currentPosition < 0) {
        currentPosition += cardWidth + cardMargin;
        cardContainer.style.transform = `translateX(${currentPosition}px)`;
    }
});

// Función para mover el carrusel hacia la derecha
nextButton.addEventListener("click", () => {
    const containerWidth = cardContainer.offsetWidth;
    const cardsWidth = (cardWidth + cardMargin) * moviesRecommended.length;

    if (currentPosition > containerWidth - cardsWidth) {
        currentPosition -= cardWidth + cardMargin;
        cardContainer.style.transform = `translateX(${currentPosition}px)`;
    }
});

