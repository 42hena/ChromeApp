const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input")

function onLoginSumbit(tomato){
    tomato.preventDefault();
    // console.log(tomato)
    console.log(loginInput.value)
}

loginForm.addEventListener("submit", onLoginSumbit)