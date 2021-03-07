const filters = document.getElementsByClassName("filter__button");
const products = document.getElementsByClassName("product")
const favorite_icons = document.getElementsByClassName("product__button--favorite_icon")
const titles = document.getElementsByClassName("product__list__title")
let activeCategories = []

const updateProducts = () => {
    for (let x = 0; x < products.length; x++) {
        const product = products[x]
        const category = product.dataset.category

        product.classList.remove("product--disabled")

        if (activeCategories.length > 0) {
            if (!activeCategories.includes(category)) {
                if (activeCategories.includes("favorite") && product.dataset.favorite === "true") continue;

                product.classList.add("product--disabled")
            }
        }
    }

    for (let x = 0; x < titles.length; x++) {
        titles[x].classList.remove("product__list__title--disabled")

        if (!activeCategories.includes(titles[x].dataset.category) && activeCategories.length > 0) {
            titles[x].classList.add("product__list__title--disabled")
        }
    }
}

updateProducts()

for (let x = 0; x < filters.length; x++) {
    const filter = filters[x]

    filter.addEventListener("click", () => {
        const category = filter.parentNode.dataset.category

        filter.classList.toggle("filter__button--active")

        if (activeCategories.includes(category)) {
            activeCategories.splice(activeCategories.indexOf(category), 1)
        } else {
            activeCategories.push(category)
        }

        updateProducts()
    })
}

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
