const title = document.querySelector("div.hello:first-child h1");
// const title = document.getElementById("title")

//console.dir(title)
function handleCilckTitle(){
    title.style.color = "blue"
}
function handleMouseEnter(){
    title.innerText = "Mouse Enter";
}

function handleMouseLeave(){
    title.innerText = "Mouse Leave";
}
title.addEventListener("click", handleCilckTitle);
title.addEventListener("mouseenter", handleMouseEnter);
title.addEventListener("mouseleave", handleMouseLeave);