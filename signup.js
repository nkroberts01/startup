const { doc } = require("prettier");

function register() {
    const rUsernameEl = document.querySelector("#register_username");
    const rPasswordEl = document.querySelector("#register_password");
    const rConfirmPasswordEl = document.querySelector("#register_confirm_password");

    if (rPasswordEl.value === rConfirmPasswordEl.value) {
        localStorage.setItem("username", rUsernameEl.value);
        localStorage.setItem("password", rPasswordEl.value);
        
        window.location.href="index.html";
    }
}