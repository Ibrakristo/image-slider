/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
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
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQywwQkFBMEI7QUFDL0QsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQywwQkFBMEI7QUFDL0QsQ0FBQztBQUNEO0FBQ0EsZ0JBQWdCLGdCQUFnQjs7QUFFaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDLEVBQUU7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5Q0FBeUMsMEJBQTBCO0FBQ25FO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGVtcGxhdGUwMDEvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsibGV0IHNsaWRlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuc2xpZGVcIik7XG5sZXQgaW5kZXggPSAwO1xubGV0IHdpZHRoID0gNTAwO1xubGV0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGFpbmVyXCIpO1xubGV0IGJlZm9yZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYmVmb3JlXCIpO1xubGV0IGFmdGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZnRlclwiKTtcbmxldCBjaXJjbGVDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNpcmNsZXMtY29udGFpbmVyXCIpO1xubGV0IHByZXY7XG5iZWZvcmUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsKGUpPT57XG4gICAgaWYoaW5kZXggPT0gMCl7XG4gICAgICAgIGluZGV4ID0gc2xpZGVzLmxlbmd0aDtcbiAgICB9XG4gICAgcHJldi5jbGFzc0xpc3QudG9nZ2xlKFwiY2lyY2xlbmFibGVkXCIpO1xuICAgIHNsaWRlc1tpbmRleCVzbGlkZXMubGVuZ3RoXS5jbGFzc0xpc3QudG9nZ2xlKFwic2xpZGVkaXNhYmxlZFwiKTtcbiAgICBpbmRleC0tO1xuICAgIHByZXYgPSBjaXJjbGVDb250YWluZXIuY2hpbGROb2Rlc1tpbmRleF07XG4gICAgcHJldi5jbGFzc0xpc3QudG9nZ2xlKFwiY2lyY2xlbmFibGVkXCIpO1xuICAgIHNsaWRlc1tpbmRleCVzbGlkZXMubGVuZ3RoXS5jbGFzc0xpc3QudG9nZ2xlKFwic2xpZGVkaXNhYmxlZFwiKTtcbiAgICBjb250YWluZXIuc2V0QXR0cmlidXRlKFwibGVmdFwiLGAke2luZGV4JXNsaWRlcy5sZW5ndGgqd2lkdGh9cHhgKTtcbn0pXG5cbmFmdGVyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLChlKT0+e1xuICAgIHNsaWRlc1tpbmRleCVzbGlkZXMubGVuZ3RoXS5jbGFzc0xpc3QudG9nZ2xlKFwic2xpZGVkaXNhYmxlZFwiKTtcbiAgICBwcmV2LmNsYXNzTGlzdC50b2dnbGUoXCJjaXJjbGVuYWJsZWRcIik7XG4gICAgaW5kZXgrKztcbiAgICBwcmV2ID0gY2lyY2xlQ29udGFpbmVyLmNoaWxkTm9kZXNbaW5kZXhdO1xuICAgIHByZXYuY2xhc3NMaXN0LnRvZ2dsZShcImNpcmNsZW5hYmxlZFwiKTtcbiAgICBzbGlkZXNbaW5kZXglc2xpZGVzLmxlbmd0aF0uY2xhc3NMaXN0LnRvZ2dsZShcInNsaWRlZGlzYWJsZWRcIik7XG4gICAgY29udGFpbmVyLnNldEF0dHJpYnV0ZShcImxlZnRcIixgJHtpbmRleCVzbGlkZXMubGVuZ3RoKndpZHRofXB4YCk7XG59KVxuICAgIFxuZm9yKGxldCBpID0gMCA7IGk8c2xpZGVzLmxlbmd0aDtpKyspe1xuXG4gICAgbGV0IHggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGlmKGkgPT0gMCl7XG4gICAgICAgIHByZXYgPSB4O1xuICAgICAgICBwcmV2LmNsYXNzTGlzdC50b2dnbGUoXCJjaXJjbGVuYWJsZWRcIik7XG4gICAgfVxuICAgIHguY2xhc3NMaXN0LmFkZChcImNpcmNsZVwiKTtcbiAgICB4LnNldEF0dHJpYnV0ZShcImRhdGEta2V5XCIsYCR7aX1gKTtcbiAgICB4LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLChlKT0+e1xuICAgICAgICBwcmV2LmNsYXNzTGlzdC50b2dnbGUoXCJjaXJjbGVuYWJsZWRcIik7XG4gICAgICAgIHByZXYgPSBlLnRhcmdldDtcbiAgICAgICAgbGV0IGRhdGEgPSBlLnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJkYXRhLWtleVwiKTtcbiAgICAgICAgc2xpZGVzW2luZGV4JXNsaWRlcy5sZW5ndGhdLmNsYXNzTGlzdC50b2dnbGUoXCJzbGlkZWRpc2FibGVkXCIpO1xuICAgICAgICBpbmRleCA9IGRhdGE7XG4gICAgICAgIHNsaWRlc1tpbmRleCVzbGlkZXMubGVuZ3RoXS5jbGFzc0xpc3QudG9nZ2xlKFwic2xpZGVkaXNhYmxlZFwiKTtcbiAgICAgICAgY29udGFpbmVyLnNldEF0dHJpYnV0ZShcImxlZnRcIixgJHtpbmRleCVzbGlkZXMubGVuZ3RoKndpZHRofXB4YCk7XG4gICAgICAgIHByZXYuY2xhc3NMaXN0LnRvZ2dsZShcImNpcmNsZW5hYmxlZFwiKTtcbiAgICB9KVxuICAgIGNpcmNsZUNvbnRhaW5lci5hcHBlbmRDaGlsZCh4KTtcbiAgICBcbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=