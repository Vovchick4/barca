const buttonHumburger = document.getElementsByClassName("nav__humburger")[0]
const sideBar = document.getElementsByClassName("aside")[0]
const sideBarDimmer = document.getElementsByClassName("aside__dimmer")[0]


buttonHumburger.addEventListener("click", () => {
    sideBar.classList.add("active")
    sideBarDimmer.classList.add("active")
})

sideBarDimmer.addEventListener("click", () => {
    sideBar.classList.remove("active")
    sideBarDimmer.classList.remove("active")
})