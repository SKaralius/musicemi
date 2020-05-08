let showMenu = false;

//Hamburger
const menuBtn = document.querySelector(".menu-btn");
const navBar = document.querySelector(".navbar");
const navBarFlex = document.querySelector(".navbar-list");
menuBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
	if (!showMenu) {
		menuBtn.classList.add("close");
		navBar.classList.remove("hide");
		navBarFlex.classList.add("mobile-nav");
		//Set Menu state
		showMenu = true;
		godown("navbar");
	} else {
		menuBtn.classList.remove("close");
		navBarFlex.classList.remove("mobile-nav");
		navBar.classList.add("hide");
		//Set Menu state
		showMenu = false;
	}
}

function godown(elemClass) {
	document.querySelector(`.${elemClass}`).scrollIntoView();
}
