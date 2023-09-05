let next = document.querySelector('.next');
let prev = document.querySelector('.prev');
let slider = document.querySelectorAll('.slide');

let slideArr = Array.from(slider);

next.addEventListener('click', function(){

    let activeSlider = document.querySelector('.active');
    let currSliderIndx = slideArr.indexOf(activeSlider);
    let nextSlider = (currSliderIndx + 1) % slideArr.length;

    activeSlider.classList.remove('active');
    slideArr[nextSlider].classList.add('active');


});


prev.addEventListener('click', function(){

    let activeSlider = document.querySelector('.active');
    let currSlider = slideArr.indexOf(activeSlider);
    let prevSlider = (currSlider - 1 + slideArr.length) % slideArr.length;


    activeSlider.classList.remove('active');
    slideArr[prevSlider].classList.add('active');

});