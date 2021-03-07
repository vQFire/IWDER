const nav = document.getElementsByTagName('nav')[0]
const swipe_message = document.getElementById("swipe_message")
let mouseIsDown = false
let active = false;
let startY = 0

nav.addEventListener('mousedown', e => {
    mouseIsDown = true
    startY = e.clientY

    console.log("test")
})

window.addEventListener('mouseup', e => {
    mouseIsDown = false
})

window.addEventListener('mousemove', e => {
    if (mouseIsDown && window.innerWidth < 800) {
        if (!active && e.clientY < (startY - 50)) {
            active = true
            swipe_message.innerText = "Swipe down to close the navigation"
            nav.classList.add("active")
        }

        if (active && e.clientY > (startY + 50)) {
            active = false
            swipe_message.innerText = "Swipe up to open the navigation"
            nav.classList.remove("active")
        }
    }
})
