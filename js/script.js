let slideOne = document.querySelector('.slider__first-slide');
let slideTwo = document.querySelector('.slider__second-slide');
let leftArrow = document.querySelector('.yellow-rectangle__nav-forward');
let rightArrow = document.querySelector('.yellow-rectangle__nav-back');

let changeSlides = () => {
  slideOne.classList.toggle('second-image');
  slideTwo.classList.toggle('first-image');
  slideOne.classList.toggle('first-image');
};

let removeClickHandlers = () => {
  leftArrow.removeEventListener('click', handleClick);
  rightArrow.removeEventListener('click', handleClick);
};

let addClickHandlers = () => {
  leftArrow.addEventListener('click', handleClick);
  rightArrow.addEventListener('click', handleClick);
};

let clearAnimationClasses = () => {
  let classes = ['animated', 'bounceOutLeft', 'bounceOutRight', 'bounceInLeft', 'bounceInRight'];
  slideOne.classList.remove(...classes);
  slideTwo.classList.remove(...classes);
};

let handleClasses = () => {
  clearAnimationClasses();
};

let handleLeft = () => {
  clearAnimationClasses();
  changeSlides();
  slideOne.removeEventListener('animationend', handleLeft);
  slideOne.addEventListener('animationend', handleClasses);
  slideOne.classList.add('animated', 'bounceInRight');
  slideTwo.classList.add('animated', 'bounceInLeft');
  slideOne.removeEventListener('animationend', handleClasses);
  addClickHandlers();
};

let handleRight = () => {
  clearAnimationClasses();
  changeSlides();
  slideOne.classList.add('animated', 'bounceInLeft');
  slideTwo.classList.add('animated', 'bounceInRight');
  slideOne.removeEventListener('animationend', handleRight);
  addClickHandlers();
};

let handleClick = (evt) => {
  removeClickHandlers();
  const targetID = evt.target.id;
  if (targetID === 'leftArrow') {
    slideOne.classList.add('animated', 'bounceOutLeft');
    slideTwo.classList.add('animated', 'bounceOutRight');
    slideOne.addEventListener('animationend', handleLeft);
  } else {
    slideOne.classList.add('animated', 'bounceOutRight');
    slideTwo.classList.add('animated', 'bounceOutLeft');
    slideOne.addEventListener('animationend', handleRight);
  }
};

addClickHandlers();