
//Dropdown Nav js
(function() {
  document.querySelector('.nav-button').addEventListener('click', function() {
    this.parentNode.parentNode.classList.toggle('closed')
  }, false);
})();



//Print out inputted quantity js
function add() { 
  var x = document.getElementById("show");
  var y = document.getElementById("quantity").value;
  document.getElementById("show").innerHTML = "Added " + y + " to cart";
  if (x.style.display === "none") {
        
        x.style.display = "block";
        //Temporary Display
        setTimeout(() => { x.style.display = "none";}, 2000);
    
  }
}

function add2() { 
  var x = document.getElementById("show2");
  var y = document.getElementById("quantity2").value;
  document.getElementById("show2").innerHTML = "Added " + y + " to cart";
  if (x.style.display === "none") {
        
        x.style.display = "block";
        //Temporary Display
        setTimeout(() => { x.style.display = "none";}, 2000);
    
  }
}

function add3() { 
  var x = document.getElementById("show3");
  var y = document.getElementById("quantity3").value;
  document.getElementById("show3").innerHTML = "Added " + y + " to cart";
  if (x.style.display === "none") {
        
        x.style.display = "block";
        //Temporary Display
        setTimeout(() => { x.style.display = "none";}, 2000);
    
  }
}

function add4() { 
  var x = document.getElementById("show4");
  var y = document.getElementById("quantity4").value;
  document.getElementById("show4").innerHTML = "Added " + y + " to cart";
  if (x.style.display === "none") {
        
        x.style.display = "block";
        //Temporary Display
        setTimeout(() => { x.style.display = "none";}, 2000);
    
  }
}



//Button to scroll on top js
let topbtn = document.getElementById("topbtn");

window.onscroll = function() {myFunction()};

function myFunction() {
//Scroll bar js
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";

  if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
    topbtn.style.display = "block";
  } else {
    topbtn.style.display = "none";
  }
}


//Scroll top button js
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}


//Image carousel js
let carousel = document.querySelector('.carousel');
let carouselInner = document.querySelector('.carousel-inner');
let prev = document.querySelector('.carousel-controls .prev');
let next = document.querySelector('.carousel-controls .next');
let slides =  document.querySelectorAll('.carousel-inner .carousel-item');
let totalSlides = slides.length;
let step = 100 / totalSlides;
let activeSlide = 0;
let activeIndicator = 0;
let direction = -1;
let jump = 1;
let interval = 2000;
let time;



//Init carousel
carouselInner.style.minWidth = (totalSlides * 100) + '%';
loadIndicators();
loop(true);


//Carousel events

next.addEventListener('click',()=>{
    slideToNext();
});

prev.addEventListener('click',()=>{
    slideToPrev();
});

carouselInner.addEventListener('transitionend',()=>{
    if(direction === -1){
        if(jump > 1){
            for(let i = 0; i < jump; i++){
                activeSlide++;
                carouselInner.append(carouselInner.firstElementChild);
            }
        }else{
            activeSlide++;
            carouselInner.append(carouselInner.firstElementChild);
        }
    }else if(direction === 1){
        if(jump > 1){
            for(let i = 0; i < jump; i++){
                activeSlide--;
                carouselInner.prepend(carouselInner.lastElementChild);
            }
        }else{
            activeSlide--;
            carouselInner.prepend(carouselInner.lastElementChild);
        }
    };

    carouselInner.style.transition = 'none';
    carouselInner.style.transform = 'translateX(0%)';
    setTimeout(()=>{
        jump = 1;
        carouselInner.style.transition = 'all ease .5s';
    });
    updateIndicators();
});

document.querySelectorAll('.carousel-indicators span').forEach(item=>{
    item.addEventListener('click',(e)=>{
        let slideTo = parseInt(e.target.dataset.slideTo);
        
        let indicators = document.querySelectorAll('.carousel-indicators span');

        indicators.forEach((item,index)=>{
            if(item.classList.contains('active')){
                activeIndicator = index
            }
        })

        if(slideTo - activeIndicator > 1){
            jump = slideTo - activeIndicator;
            step = jump * step;
            slideToNext();
        }else if(slideTo - activeIndicator === 1){
            slideToNext();
        }else if(slideTo - activeIndicator < 0){

            if(Math.abs(slideTo - activeIndicator) > 1){
                jump = Math.abs(slideTo - activeIndicator);
                step = jump * step;
                slideToPrev();
            }
                slideToPrev();
        }
        step = 100 / totalSlides; 
    })
});

carousel.addEventListener('mouseover',()=>{
    loop(false);
})

carousel.addEventListener('mouseout',()=>{
    loop(true);
})


//Load the indicators (increase the opacity)
function loadIndicators(){
    slides.forEach((slide,index)=>{
        if(index === 0){
            document.querySelector('.carousel-indicators').innerHTML +=
            `<span data-slide-to="${index}" class="active"></span>`;
        }else{
            document.querySelector('.carousel-indicators').innerHTML +=
            `<span data-slide-to="${index}"></span>`;
        }
    }); 
};

//UPdate indicators (move to next)
function updateIndicators(){
    if(activeSlide > (totalSlides - 1)){
        activeSlide = 0;
    }else if(activeSlide < 0){
        activeSlide = (totalSlides - 1);
    }
    document.querySelector('.carousel-indicators span.active').classList.remove('active');
    document.querySelectorAll('.carousel-indicators span')[activeSlide].classList.add('active');
};

//Next on click
function slideToNext(){
    if(direction === 1){
        direction = -1;
        carouselInner.prepend(carouselInner.lastElementChild);
    };
    
    carousel.style.justifyContent = 'flex-start';
    carouselInner.style.transform = `translateX(-${step}%)`;
};

//Back on click
function slideToPrev(){
    if(direction === -1){
        direction = 1;
        carouselInner.append(carouselInner.firstElementChild);
    };
    carousel.style.justifyContent = 'flex-end'
    carouselInner.style.transform = `translateX(${step}%)`;
};

//loop images
function loop(status){
    if(status === true){
        time = setInterval(()=>{
            slideToNext();
        },interval);
    }else{
        clearInterval(time);
    }
}




