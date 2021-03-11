async function getMovies(path) {
  const response = await fetch(path);
  const data = await response.json();
  data.forEach((movie) => {
    let newDiv = document.createElement("div");
    newDiv.classList.add("movie-item");
    let movieImage = document.createElement("img");
    movieImage.setAttribute("src", "./img/" + movie.img);
    newDiv.append(movieImage);
    let movieTitle = document.createElement("h2");
    movieTitle.innerText = movie.title;
    newDiv.append(movieTitle);
    let movieDirector = document.createElement("h3");
    movieDirector.innerText = "Director: " + movie.director;
    newDiv.append(movieDirector);
    let rating = document.createElement("p");
    let numRating = parseInt(movie.rating);
    for (let i = 0; i < numRating; i++) {
      rating.innerText += "💀";
    }
    newDiv.append(rating);
    document.querySelector("#app-root").append(newDiv);
  });
}

getMovies("./movies.json");
