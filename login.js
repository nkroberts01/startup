function login() {
    const lUsernameEl = document.querySelector("#login_username");
    const lPasswordEl = document.querySelector("#login_password");

    localStorage.setItem("username", lUsernameEl.value);
    localStorage.setItem("password", lPasswordEl.value);

    window.location.href = "index.html";
}