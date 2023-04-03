const { getUserByUsername } = require("../database");

(async () => {
    let authenticated = false;
    const username = localStorage.getItem('username');
    if (username) {
        const nameEl = document.querySelector('#login_username');
        nameEl.value = username;
        const user = await getUserByUsername(nameEl.value);
        authenticated = user?.authenticated;
    }
})();

async function loginUser() {
    loginOrCreate(`/api/auth/login`);
}

async function createUser() {
    loginOrCreate(`/api/auth/create`);
}

async function loginOrCreate(endpoint) {
    const username = document.querySelector('#username')?.value;
    const password = document.querySelector('#password')?.value;
}