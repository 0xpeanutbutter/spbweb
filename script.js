const buttonsWrap = document.querySelector(".buttons");
const slides = document.querySelector(".inner");

buttonsWrap.addEventListener("click", (e) => {
  const precondition = e.target.classList.contains("btn");

  if (precondition) {
    clearActiveBtn();
    
    if (e.target.classList.contains("first-slide")) {
      slides.style.transform = "translateX(-0%)";
      e.target.classList.add('active');
    } else {
      slides.style.transform = "translateX(-50%)";
      e.target.classList.add('active');
    }
  }
});

const clearActiveBtn = ()=>{
  Array.from(buttonsWrap.children).forEach(item => {
    item.classList.remove('active');
  })
} 