fetch("./movies.json")
  .then((response) => {
    console.log(response);
    return response.json();
  })
  .then((data) => {
    console.log(data);
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
  })
  .catch((error) => {
    console.error(error);
  });
