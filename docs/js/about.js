//About scroll down
const aboutButton = document.querySelector(".about-button");
aboutButton.addEventListener("click", () => godown("biography"));

function godown(elemClass) {
	document.querySelector(`.${elemClass}`).scrollIntoView();
}
