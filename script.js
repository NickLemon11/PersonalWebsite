let button = document.getElementById("sbutton");
let socialImages = document.querySelectorAll(".socials img");

button.onclick = () => {
    socialImages.forEach((img) => {
        if (img.classList.contains("show")) {  //checks if image is hidden or visible, if it has access to show class it is removed and becomes invisible otherwise it becomes visible
            img.classList.remove("show");  
            setTimeout(() => {
                img.style.display = "none"; }, 500);  //hides image
        } else {
            img.style.display = "block"; //shows image
            setTimeout(() => {
                img.classList.add("show"); }, 10); // adds to show class
        }
    });
}