let burgerButton = document.getElementById("burger")
let overlayCloseArea = document.querySelector('.overlayCloseArea')


function openOverlay(){
    let overlayMenu = document.querySelector('.overlay')
    let overlayArea = document.querySelector('.overlayCloseArea')

    overlayArea.style.display = "flex"
    overlayMenu.style.display = "flex"
}

function closeOverlay(){
    let overlayMenu = document.querySelector('.overlay')
    let overlayArea = document.querySelector('.overlayCloseArea')

    overlayArea.style.display = "none"
    overlayMenu.style.display = "none"
}

burgerButton.addEventListener("click", openOverlay)
overlayCloseArea.addEventListener("click",closeOverlay)
