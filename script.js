const enterBtn = document.getElementById("enterBtn");
const loveSong = document.getElementById("loveSong");
loveSong.addEventListener("timeupdate", function () {
    sessionStorage.setItem("loveSongTime", loveSong.currentTime);
});

window.addEventListener("beforeunload", function () {
    sessionStorage.setItem("loveSongTime", loveSong.currentTime);
});

enterBtn.addEventListener("click", function () {

    // Start music after user's click
    loveSong.play();

    // Move to our story
    document.getElementById("story").scrollIntoView({
        behavior: "smooth"
    });

});
const openLetterBtn = document.getElementById("openLetterBtn");
const letterCard = document.getElementById("letterCard");

openLetterBtn.addEventListener("click", function () {

    letterCard.classList.add("show");

    openLetterBtn.style.display = "none";

});