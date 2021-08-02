const title = document.querySelector(".hello h1");
// const title = document.getElementById("title")

function handleTitleClick(){
    console.log("title was clicked!");
}
title.addEventListener("click", handleTitleClick)