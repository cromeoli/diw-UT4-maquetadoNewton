let burgerButton = document.getElementById("burger")
let logInButton = document.getElementById("logInButton")
let signUpButton = document.getElementById("signUpButton")
let formSignUp = document.getElementById("formSignUp")
let formLogIn = document.getElementById("formLogIn")
let overlayCloseArea = document.querySelector('.overlayCloseArea')


function openHome(){
    let homeOverlay = document.querySelector('.homeOverlay')
    let overlayClose = document.querySelector('.overlayCloseArea')
    let registerOverlay = document.querySelector('.registerOverlay')
    let loginOverlay = document.querySelector('.loginOverlay')

    homeOverlay.style.display = "flex"
    overlayClose.style.display = "flex"
    registerOverlay.style.display = "none"
    loginOverlay.style.display = "none"
}

function openGuest(){
    let guestOverlay = document.querySelector('.guestOverlay')
    let overlayArea = document.querySelector('.overlayCloseArea')

    guestOverlay.style.display = 'flex'
    overlayArea.style.display = 'flex'
}

function openRegister(){
    let registerOverlay = document.querySelector('.registerOverlay')
    let overlayArea = document.querySelector('.overlayCloseArea')
    let guestOverlay = document.querySelector('.guestOverlay')

    registerOverlay.style.display = 'flex'
    overlayArea.style.display = 'flex'
    guestOverlay.style.display = 'none'
}

function openLogin(){
    let loginOverlay = document.querySelector('.loginOverlay')
    let overlayArea = document.querySelector('.overlayCloseArea')
    let guestOverlay = document.querySelector('.guestOverlay')

    loginOverlay.style.display = 'flex'
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
    menuOverlay.style.display = "none"
    guestOverlay.style.display = "none"
    registerOverlay.style.display = "none"
    loginOverlay.style.display = "none"
}

overlayCloseArea.addEventListener("click", closeOverlay)
burgerButton.addEventListener("click", openGuest)
logInButton.addEventListener('click', openLogin)
signUpButton.addEventListener('click', openRegister)
formSignUp.addEventListener('click', openHome)
formLogIn.addEventListener('click', openHome)
