// const loginForm = document.querySelector("#login-form");
const loginForm = document.getElementById("login-form");
const loginInput = loginForm.querySelector("input")
// const loginInput = document.querySelector("#login-form input")
const loginButton = loginForm.querySelector("button")
// const loginInput = document.querySelector("#login-form button")

function onLoginBtnClick(){
    const username = loginInput.value;
    // if (username === ""){
    //     alert("Please write your name");
    // }
    // else if (username.length > 15){
    //     alert("Your name is too long.")
    // }
    console.log(username)
}

loginButton.addEventListener("click", onLoginBtnClick) 