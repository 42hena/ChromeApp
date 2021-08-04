// const loginForm = document.querySelector("#login-form");
const loginForm = document.getElementById("login-form");
const loginInput = loginForm.querySelector("input")
// const loginInput = document.querySelector("#login-form input")
const loginButton = loginForm.querySelector("button")
// const loginInput = document.querySelector("#login-form button")

function onLoginBtnClick(){
    console.log("hello", loginInput.value)
}

loginButton.addEventListener("click", onLoginBtnClick)