let burgerButton = document.getElementById("burger")
let logInButton = document.getElementById("logInButton")
let signUpButton = document.getElementById("signUpButton")
let formSignUp = document.getElementById("formSignUp")
let formLogIn = document.getElementById("formLogIn")
let overlayCloseArea = document.querySelector('.overlayCloseArea')

let path = window.location.pathname;


function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
}
function openHome(){
    let homeOverlay = document.querySelector('.homeOverlay')
    let overlayClose = document.querySelector('.overlayCloseArea')
    let registerOverlay = document.querySelector('.registerOverlay')
    let loginOverlay = document.querySelector('.loginOverlay')

    homeOverlay.style.display = "flex"
    delay(30).then(() => homeOverlay.style.opacity =  100)
    overlayClose.style.display = "flex"
    registerOverlay.style.display = "none"
    loginOverlay.style.display = "none"
}

function openGuest(){
    let guestOverlay = document.querySelector('.guestOverlay')
    let homeOverlay = document.querySelector('.homeOverlay')
    let overlayArea = document.querySelector('.overlayCloseArea')

    if(path === "/index.html" || path === "/"){
        guestOverlay.style.display = 'flex'
        delay(30).then(() => guestOverlay.style.opacity =  100)
        overlayArea.style.display = 'flex'
    }else{
        homeOverlay.style.display = "flex"
        delay(30).then(() => homeOverlay.style.opacity =  100)
        overlayArea.style.display = 'flex'
    }
}

function openRegister(){
    let registerOverlay = document.querySelector('.registerOverlay')
    let overlayArea = document.querySelector('.overlayCloseArea')
    let guestOverlay = document.querySelector('.guestOverlay')

    registerOverlay.style.display = 'flex'
    delay(30).then(() => registerOverlay.style.opacity =  100)
    overlayArea.style.display = 'flex'
    guestOverlay.style.display = 'none'
}

function openLogin(){
    let loginOverlay = document.querySelector('.loginOverlay')
    let overlayArea = document.querySelector('.overlayCloseArea')
    let guestOverlay = document.querySelector('.guestOverlay')

    loginOverlay.style.display = 'flex'
    delay(30).then(() => loginOverlay.style.opacity =  100)
    overlayArea.style.display = 'flex'
    guestOverlay.style.display = 'none'
}


function closeOverlay(){
    let overlayClose = document.querySelector('.overlayCloseArea')

    let guestOverlay = document.querySelector('.guestOverlay')
    let registerOverlay = document.querySelector('.registerOverlay')
    let loginOverlay = document.querySelector('.loginOverlay')
    let menuOverlay = document.querySelector('.homeOverlay')

    overlayClose.style.display = "none"

    menuOverlay.style.opacity =  0
    delay(200).then(() => menuOverlay.style.display = "none")

    guestOverlay.style.opacity =  0
    delay(200).then(() => guestOverlay.style.display = "none")

    registerOverlay.style.opacity =  0
    delay(200).then(() => registerOverlay.style.display = "none")

    loginOverlay.style.opacity =  0
    delay(200).then(() => loginOverlay.style.display = "none")
}

overlayCloseArea.addEventListener("click", closeOverlay)
burgerButton.addEventListener("click", openGuest)
logInButton.addEventListener('click', openLogin)
signUpButton.addEventListener('click', openRegister)
formSignUp.addEventListener('click', openHome)
formLogIn.addEventListener('click', openHome)
