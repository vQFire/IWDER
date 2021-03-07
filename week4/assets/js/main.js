const filters = document.getElementsByClassName("filter__button");

let activeCategories = []

for (let x = 0; x < filters.length; x++) {
    const filter = filters[x]

    filter.addEventListener("click", e => {
        const category = filter.parentNode.dataset.category

        filter.classList.toggle("filter__button--active")

        if (activeCategories.includes(category)) {
            activeCategories.splice(activeCategories.indexOf(category), 1)
        } else {
            activeCategories.push(category)
        }
    })
}

const favorite_icons = document.getElementsByClassName("product__button--favorite_icon")

for (let x = 0; x < favorite_icons.length; x++) {
    const favorite_icon = favorite_icons[x]

    favorite_icon.addEventListener("click", e => {
        const parent = e.target.parentNode.parentNode
        const favorite = parent.dataset.favorite

        if (favorite === "true") {
            parent.setAttribute("data-favorite", "false")
        } else {
            parent.setAttribute("data-favorite", "true")
        }
    })
}
