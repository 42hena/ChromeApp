const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input")

const link = document.querySelector('a');

console.log(link)
function onLoginSumbit(event){
    event.preventDefault();
    // console.log(tomato)
    console.log(loginInput.value)
}

function handleListener(event){
    console.log(event)
    event.preventDefault();
    // alert("click")
}

loginForm.addEventListener("submit", onLoginSumbit)
link.addEventListener("click",handleListener)