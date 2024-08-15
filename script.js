let button = document.getElementById("credit");
let socialImages = document.querySelectorAll(".socials img");
let header = document.getElementById("header");
let about = document.getElementById("about");
let img1 = document.getElementById("img1");
let img2 = document.getElementById("img2");

button.onclick = () => {
    socialImages.forEach((img) => {
        if (img.classList.contains("show")) {  //checks if image is hidden or visible, if it has access to show class it is removed and becomes invisible otherwise it becomes visible
            img.classList.remove("show");  
            setTimeout(() => {
            img.style.display = "none"; }, 500);  //hides content
            header.innerHTML = "Welcome to Dimitrov's Website."
            button.style.backgroundColor = "#2b2b2b";
            button.style.color = "#f1f0f0";
            about.style.visibility = "hidden";
            img1.style.opacity = 0;
            
        } else {
            img.style.display = "block"; //shows content
            header.innerHTML = "About me.";
            button.style.backgroundColor = "#8e8e8e";
            button.style.color = "#2b2b2b";
            about.style.visibility = "visible";
            setTimeout(() => {
            img.classList.add("show");  }, 10); 
           
        }
    });
}
//sorry to whoever reads this code in the future

const desc1 = document.getElementById('desc1');
const desc2 = document.getElementById('desc2');
const desc3 = document.getElementById('desc3');
const desc4 = document.getElementById('desc4');
const desc5 = document.getElementById('desc5');
const desc6 = document.getElementById('desc6');

//1
desc1.addEventListener('mouseover', () => {
    img1.style.opacity = 1;
});

desc1.addEventListener('mouseout', () => {
    img1.style.opacity = 0;
});

//2
desc2.addEventListener('mouseover', () => {
    img2.style.opacity = 1;
});

desc2.addEventListener('mouseout', () => {
    img2.style.opacity = 0;
});

//3
desc3.addEventListener('mouseover', () => {
    img3.style.opacity = 1;
});

desc3.addEventListener('mouseout', () => {
    img3.style.opacity = 0;
});

//4
desc4.addEventListener('mouseover', () => {
    img4.style.opacity = 1;
});

desc4.addEventListener('mouseout', () => {
    img4.style.opacity = 0;
});

//5
desc5.addEventListener('mouseover', () => {
    img5.style.opacity = 1;
});

desc5.addEventListener('mouseout', () => {
    img5.style.opacity = 0;
});

//6
desc6.addEventListener('mouseover', () => {
    img6.style.opacity = 1;
});

desc6.addEventListener('mouseout', () => {
    img6.style.opacity = 0;
});


