var fullImgBox = document.getElementById("fullImgBox");
var fullImg = document.getElementById("fullImg");
    
function openFullImg(pic) {
    fullImgBox.style.display = "flex";
    fullImg.src = pic;
} 
function closeFullImg() {
    fullImgBox.style.display = "none";
}

let imgGallery = document.querySelector(".img-gallery");
imgGallery.addEventListener("click", (event) => {
    if (event.target.tagName === "IMG") {
        openFullImg(event.target.src);
    }
});
