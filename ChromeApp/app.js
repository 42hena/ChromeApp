const h1 = document.querySelector("div.hello:first-child h1");
// const title = document.getElementById("title")

//console.dir(title)
function handleCilckTitle(){
    h1.style.color = "blue"
}
function handleMouseEnter(){
    h1.innerText = "Mouse Enter";
}

function handleMouseLeave(){
    h1.innerText = "Mouse Leave";
}

function handleWindowResize(){
    document.body.style.backgroundColor = "tomato";
}

function handleWindowCopy(){
    alert("copier")
}

function handleWindowOffline(){
    alert("SOS no WIFI")
}
function handleWindowOnline(){
    alert("WoW")
}
//h1.addEventListener("click", handleCilckTitle);
h1.onclick = handleCilckTitle;//위와 동일
h1.addEventListener("mouseenter", handleMouseEnter);
h1.addEventListener("mouseleave", handleMouseLeave);

window.addEventListener("resize", handleWindowResize)
window.addEventListener("copy", handleWindowCopy)
window.addEventListener("offline", handleWindowOffline)
window.addEventListener("online", handleWindowOnline)