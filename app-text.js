fetch("./lyrics.txt")
  .then((response) => {
    return response.text();
  })
  .then((text) => {
    document.querySelector("#app-root").innerText = text;
  })
  .catch((error) => {
    console.error(error);
  });
