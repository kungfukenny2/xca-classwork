const card = document.getElementById("box");
const dots = document.getElementById("hidden");
const cardImage = document.getElementById("lofi-image");
const cardVideo = document.getElementById("lofi-video");
const cardAccent = document.getElementById("accent-card");
const hiddenButtons = document.getElementById("hover-buttons");
const cardTitle = document.getElementById("card-title");

card.addEventListener("mouseover", function handleMouseOver(){
    card.style.transition = "width .3s, height .3s";
    card.style.width = "360px";
    card.style.color = "yellow";
    dots.style.visibility = "visible";
    card.style.boxShadow = "0px 0px 10px black";
    cardImage.style.display = "none";
    cardVideo.style.display = "block";
    cardAccent.style.backgroundColor = "#1E1E1E";
    hiddenButtons.style.display = "flex";
    cardTitle.style.fontSize = "18px"; 
});

card.addEventListener("mouseout", function handleMouseOut(){
    cardVideo.style.display = "none";
    cardImage.style.display = "block";
    card.style.boxShadow = "none";
    card.style.width = "320px";
    dots.style.visibility = "hidden";
    cardAccent.style.backgroundColor = "#171717";
    hiddenButtons.style.display = "none";
    cardTitle.style.fontSize = "16px"; 

})