let currentAccountId = "profile";
let profileArea = document.querySelector(".profileArea");
let securityArea = document.querySelector(".securityArea");
let paymentArea = document.querySelector(".paymentsArea");
let settingsArea = document.querySelector(".settingsArea");
let profileButton = document.getElementById("profile");
let securityButton = document.getElementById("security");
let paymentButton = document.getElementById("payment");
let settingsButton = document.getElementById("settings");
let profileIcon = document.getElementById("accountIcon");
let securityIcon = document.getElementById("securityIcon");
let billingIcon = document.getElementById("billingIcon");
let settingsIcon = document.getElementById("settingsIcon");
let currentView = document.getElementById(currentAccountId);
currentView.style.background = "#E9470C";
function openProfile() {
    securityButton.style.background = "#131317";
    paymentButton.style.background = "#131317";
    settingsButton.style.background = "#131317";
    profileButton.style.background = "#E9470C";
    profileArea.style.display = "flex";
    securityArea.style.display = "none";
    paymentArea.style.display = "none";
    settingsArea.style.display = "none";
}
function openSecurity() {
    profileButton.style.background = "#131317";
    paymentButton.style.background = "#131317";
    settingsButton.style.background = "#131317";
    securityButton.style.background = "#E9470C";
    securityArea.style.display = "flex";
    profileArea.style.display = "none";
    paymentArea.style.display = "none";
    settingsArea.style.display = "none";
}
function openPayment() {
    securityButton.style.background = "#131317";
    profileButton.style.background = "#131317";
    settingsButton.style.background = "#131317";
    paymentButton.style.background = "#E9470C";
    paymentArea.style.display = "flex";
    securityArea.style.display = "none";
    profileArea.style.display = "none";
    settingsArea.style.display = "none";
}
function openSettings() {
    securityButton.style.background = "#131317";
    profileButton.style.background = "#131317";
    paymentButton.style.background = "#131317";
    settingsButton.style.background = "#E9470C";
    settingsArea.style.display = "flex";
    securityArea.style.display = "none";
    paymentArea.style.display = "none";
    profileArea.style.display = "none";
}
profileButton.addEventListener("click", openProfile);
securityButton.addEventListener("click", openSecurity);
paymentButton.addEventListener("click", openPayment);
settingsButton.addEventListener("click", openSettings);
profileIcon.addEventListener("click", openProfile);
securityIcon.addEventListener("click", openSecurity);
billingIcon.addEventListener("click", openPayment);
settingsIcon.addEventListener("click", openSettings);

//# sourceMappingURL=account.e59537f6.js.map
