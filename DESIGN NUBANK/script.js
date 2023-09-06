//Minhas tentativas falhas, deixarei aqui para futuras tentativas



const slideContainer = document.querySelector('.antesdascaixas');
const slide = document.querySelector('.slide');
const prevButton = document.querySelector('.arrowa');
const nextButton = document.querySelector('.arrowd');
const slideWidth = slideContainer.clientWidth;
let currentSlide = 0;

nextButton.addEventListener('click', () => {
  currentSlide++;
  if (currentSlide >= slide.childElementCount) {
    currentSlide = 0;
  }
  updateSlidePosition();
});

prevButton.addEventListener('click', () => {
  currentSlide--;
  if (currentSlide < 0) {
    currentSlide = slide.childElementCount - 1;
  }
  updateSlidePosition();
});

function updateSlidePosition() {
  const translateX = -currentSlide * slideWidth;
  slide.style.transform = `translateX(${translateX}px)`;
}
   
