
let people = ["Anna", "Marta", "Erik", "Andre", "Nikolka", "Alexandr"];

export function initSearch(people) { 

  const searchInput = document.getElementById("searchInput");
  const htmlResultDisplay = document.getElementById("resultDisplay");
  const searchBtn = document.getElementById("searchBtn");
  
  searchBtn.addEventListener("click",() => {

    const name = searchInput.value; 
    let found = false; 

    for (let peopleName of people) {
      if (peopleName === name) {
        found = true;
      }
    }

    if (found) {
      htmlResultDisplay.innerHTML = "Namn hittades: " + name;
    } else {
      htmlResultDisplay.innerHTML = "Namn hittades inte.";
    }
    
    });
}


// rör ej dessa rader
document.addEventListener("DOMContentLoaded", () => {
  initSearch(people);
});