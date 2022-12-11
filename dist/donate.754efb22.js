let bizumButton = document.getElementById("bizum");
let cardButton = document.getElementById("card");
let closeBizumButton = document.getElementById("bizumCloseButton");
let checkButton = document.getElementById("checkButton");
function openBizum() {
    let bizumOverlay = document.querySelector(".bizumOverlay");
    bizumOverlay.style.display = "flex";
    delay(200).then(()=>bizumOverlay.style.opacity = 1);
}
function closeBizum() {
    let bizumOverlay = document.querySelector(".bizumOverlay");
    bizumOverlay.style.opacity = 0;
    delay(600).then(()=>bizumOverlay.style.display = "none");
}
function openCard() {
    let cardOverlay = document.querySelector(".cardOverlay");
    cardOverlay.style.display = "flex";
    delay(200).then(()=>cardOverlay.style.opacity = 1);
}
function closeCard() {
    let cardOverlay = document.querySelector(".cardOverlay");
    cardOverlay.style.opacity = 0;
    delay(200).then(()=>cardOverlay.style.display = "none");
}
bizumButton.addEventListener("click", openBizum);
closeBizumButton.addEventListener("click", closeBizum);
cardButton.addEventListener("click", openCard);
checkButton.addEventListener("click", closeCard);

//# sourceMappingURL=donate.754efb22.js.map
