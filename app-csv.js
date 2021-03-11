fetch("./data.csv")
  .then((response) => {
    return response.text();
  })
  .then((data) => {
    let table = document.createElement("table");
    let rows = data.split("\n");
    for (let r = 0; r < rows.length; r++) {
      let rowElement = document.createElement("tr");
      let columns = rows[r].split(",");
      for (let c = 0; c < columns.length; c++) {
        let colElement;
        if (r === 0) {
          colElement = document.createElement("th");
        } else {
          colElement = document.createElement("td");
        }
        colElement.innerText = columns[c];
        rowElement.append(colElement);
      }
      table.append(rowElement);
    }
    document.querySelector("#app-root").append(table);
  })
  .catch((error) => {
    console.error(error);
  });
