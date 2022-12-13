const navToggle = document.querySelector(".nav-toggle")
const primaryNavigation = document.querySelector(".header__nav")
const hamburgerIcon = document.querySelector("#icon-hamburger")
const closeIcon = document.querySelector("#icon-close")

navToggle.addEventListener("click", () => {
	hamburgerIcon.classList.toggle("display-none")
	closeIcon.classList.toggle("display-none")
	primaryNavigation.hasAttribute("aria-expanded", true)
		? navToggle.setAttribute("aria-expanded", false)
		: navToggle.setAttribute("aria-expanded", true)
	primaryNavigation.classList.toggle("header__nav--closed")
})
