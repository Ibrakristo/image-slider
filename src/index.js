let slides = document.querySelectorAll(".slide");
let index = 0;
let width = 500;
let container = document.querySelector(".container");
let before = document.querySelector(".before");
let after = document.querySelector(".after");
let circleContainer = document.querySelector(".circles-container");
let prev;
before.addEventListener("click",(e)=>{
    if(index == 0){
        index = slides.length;
    }
    prev.classList.toggle("circlenabled");
    slides[index%slides.length].classList.toggle("slidedisabled");
    index--;
    prev = circleContainer.childNodes[index];
    prev.classList.toggle("circlenabled");
    slides[index%slides.length].classList.toggle("slidedisabled");
    container.setAttribute("left",`${index%slides.length*width}px`);
})

after.addEventListener("click",(e)=>{
    slides[index%slides.length].classList.toggle("slidedisabled");
    prev.classList.toggle("circlenabled");
    index++;
    prev = circleContainer.childNodes[index];
    prev.classList.toggle("circlenabled");
    slides[index%slides.length].classList.toggle("slidedisabled");
    container.setAttribute("left",`${index%slides.length*width}px`);
})
    
for(let i = 0 ; i<slides.length;i++){

    let x = document.createElement("div");
    if(i == 0){
        prev = x;
        prev.classList.toggle("circlenabled");
    }
    x.classList.add("circle");
    x.setAttribute("data-key",`${i}`);
    x.addEventListener("click",(e)=>{
        prev.classList.toggle("circlenabled");
        prev = e.target;
        let data = e.target.getAttribute("data-key");
        slides[index%slides.length].classList.toggle("slidedisabled");
        index = data;
        slides[index%slides.length].classList.toggle("slidedisabled");
        container.setAttribute("left",`${index%slides.length*width}px`);
        prev.classList.toggle("circlenabled");
    })
    circleContainer.appendChild(x);
    
}