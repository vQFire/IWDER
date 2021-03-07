window.onload = () => {
  const searchbar = document.getElementById("js--searchbar");
  const cardsList = document.getElementsByClassName("card");

  searchbar.onkeyup = (event) =>{
    let filter = event.target.value.toUpperCase();
    for(let i = 0; i < cardsList.length; i++){
      let innerHTML = cardsList[i].innerHTML.toUpperCase();
      if(innerHTML.indexOf(filter) !== -1){
        cardsList[i].style.display = "";
      }
      else{
        cardsList[i].style.display = "none";
      }
    }
  }

  let activeCategories = []
  const filters = document.getElementsByClassName("filter")

  for (let x = 0; x < filters.length; x++) {
    const filter = filters[x]

    filter.addEventListener("click", e => {
      if (activeCategories.includes(filter.dataset.category)) {
        activeCategories.splice(activeCategories.indexOf(filter.dataset.category), 1)
      } else {
        activeCategories.push(filter.dataset.category)
      }

      updateCards(activeCategories)
    })
  }

  const gerechten = document.getElementsByClassName("card")

  const updateCards = activeCategories => {
    for (let x = 0; x < gerechten.length; x++) {
      const gerecht = gerechten[x]
      gerecht.classList.remove("active")

      if (activeCategories.length === 0 || activeCategories.includes(gerecht.dataset.category)) {
        gerecht.classList.add("active")
      }
    }
  }

  updateCards(activeCategories)
}




