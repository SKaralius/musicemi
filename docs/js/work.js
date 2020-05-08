//Videos in work.html
let currentVideo = 0;
const videos = [
	"https://www.youtube.com/embed/fkCqFkmHrco",
	"https://www.youtube.com/embed/9h9Op4HvZnQ",
	"https://www.youtube.com/embed/eNpAF7qdF6s"
];
const videoBox = document.querySelector(".video");
const nextVideo = document.querySelector(".next-video");
const previousVideo = document.querySelector(".previous-video");

nextVideo.addEventListener("click", () => changeVideo("next"), {
	passive: true
});
previousVideo.addEventListener("click", () => changeVideo("previous"), {
	passive: true
});

function changeVideo(direction) {
	if (direction === "next") {
		if (currentVideo + 1 < videos.length) {
			currentVideo += 1;
			videoBox.src = videos[currentVideo];
		} else {
			currentVideo = 0;
			videoBox.src = videos[currentVideo];
		}
	} else {
		if (currentVideo > 0) {
			currentVideo -= 1;
			videoBox.src = videos[currentVideo];
		} else {
			currentVideo = videos.length - 1;
			videoBox.src = videos[currentVideo];
		}
	}
}
