
//////////////////////////Carousal Slide//////////////////////////////

const track = document.querySelector('.carousal_track');
const slides = Array.from(track.children);
const nextButton = document.querySelector('.carousal_button--right');
const prevButton = document.querySelector('.carousal_button--left');
const dotsNav = document.querySelector('.carousal_nav');
const dots = Array.from(dotsNav.children);
const slideWidth  = slides[0].getBoundingClientRect().width;
//arrange slide next to one another
//slides[0].style.left = slideWidth * 0 + 'px';
//slides[1].style.left = slideWidth * 1 + 'px';
//slides[2].style.left = slideWidth * 2 + 'px';
//Shortcut for this is:
const setSlidePosition = (slide,index) =>{
slide.style.left = slideWidth * index +'px';}

slides.forEach(setSlidePosition);

//Add a function of below this code nextButton.addEventlistener one for ease:
const moveToSlide = (track,currentSlide,targetSlide)=>{
    track.style.transform = 'translateX(-' +targetSlide.style.left+')';
    currentSlide.classList.remove('current_slide');
    targetSlide.classList.add('current_slide');
} 

const updateDots = (currentDot,targetDot) =>{
    currentDot.classList.remove('current_slide');
    targetDot.classList.add('current_slide');
}

const hideShowArrows = (slides,prevButton,nextButton,targetIndex)=>{
     if(targetIndex===0){
        prevButton.classList.add('is-hidden');
        nextButton.classList.remove('is-hidden');
    }
    else if(targetIndex=== slides.length-1){
        prevButton.classList.remove('is-hidden');
        nextButton.classList.add('is-hidden');
    }
    else{
        prevButton.classList.remove('is-hidden');
        nextButton.classList.remove('is-hidden');
    }
}

prevButton.addEventListener('click', e=>{
    const currentSlide = track.querySelector('.current_slide');
    const prevSlide = currentSlide.previousElementSibling;
    const amountToMove = prevSlide.style.left;
    const currentDot  = dotsNav.querySelector('.current_slide');
    const prevDot = currentDot.previousElementSibling;
    const prevIndex = slides.findIndex(slide => slide===prevSlide); 
    moveToSlide(track,currentSlide,prevSlide);
    updateDots(currentDot,prevDot);
    hideShowArrows(slides,prevButton,nextButton,prevIndex);

})

nextButton.addEventListener('click',e=>{
    const currentSlide = track.querySelector('.current_slide');
    const nextSlide = currentSlide.nextElementSibling;
    const amountToMove = nextSlide.style.left;
    const currentDot  = dotsNav.querySelector('.current_slide');
    const nextDot = currentDot.nextElementSibling;
    const nextIndex = slides.findIndex(slide => slide===nextSlide);
    moveToSlide(track,currentSlide,nextSlide);
    updateDots(currentDot,nextDot);
    hideShowArrows(slides,prevButton,nextButton,nextIndex);
})

//For the dotsnav

dotsNav.addEventListener('click', e=>{
   const targetDot = e.target.closest('button');
    //console.log('type1')
    if(!targetDot) return;
    //console.log('type2')
    
    const currentSlide  = track.querySelector('.current_slide');
    const currentDot  = dotsNav.querySelector('.current_slide');
    const targetIndex = dots.findIndex(dot => dot === targetDot);
//    console.log(targetIndex);
    const targetSlide = slides[targetIndex];
    
    moveToSlide(track,currentSlide,targetSlide);
    updateDots(currentDot,targetDot);
    
    
    //Button appear and disappear
    hideShowArrows(slides,prevButton,nextButton,targetIndex);
   
});