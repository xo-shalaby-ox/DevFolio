// Nav
window.addEventListener('scroll', () => {
    const header = document.getElementById('header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

let list = document.querySelectorAll(".navbar-nav .nav-link");
list.forEach( el => {
    el.addEventListener("click" , function(){
        list.forEach(li => {
            li.classList.remove("active")
        })
        el.classList.add("active")

        let bsCollapse = new bootstrap.Collapse(navbarCollapse);
        bsCollapse.hide();
    })
})


let navBar = document.getElementById("navbarSupportedContent");
let icon = document.getElementById("icon-x");

icon.addEventListener("click" ,function(){
    navBar.classList.add("disapear")
    navBar.classList.remove("show")
})


// Drop Down
let deepDropDown = document.getElementById("deep-dropdown");
let dropDown = document.getElementById("drop-down");

dropDown.addEventListener("click", function(e) {
    e.preventDefault();
    e.stopPropagation();

    deepDropDown.classList.toggle("visible")
});

// Typed js

const options = {
    strings: ["Designer", "Developer","Freelancer","Photographer"],
    typeSpeed: 60,
    backSpeed: 40,
    loop: true,
};

const typed = new Typed("#typed-output", options);

// Progress 

let section = document.querySelector(".about");
let progSpan = document.querySelectorAll(".progress span");
let spanUp = document.getElementById("top");

let numbers = document.querySelectorAll(".nums .num");
let secCountion = document.querySelector(".counting");
let started = false;

window.onscroll = function(){
    
    AOS.refresh();

    if(window.scrollY >= secCountion.offsetTop - 200){
        if(!started){
            numbers.forEach(num => startCount(num))
        }
        started = true;
    }

    if(window.scrollY >= section.offsetTop - 150 ){
        progSpan.forEach(span => {
            span.style.width = span.dataset.width;
        })
        spanUp.classList.add("show");
    }else{
        spanUp.classList.remove("show");
    }
    
}

function startCount(el){
    let goal = el.dataset.goal;
    let count = setInterval(() =>{
        el.textContent++;
        if(el.textContent == goal){
            clearInterval(count);
        }
    }, 2000 / goal)
}


//Swiper

const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,
    centerSlide: 'true',
    fade: 'true',
    speed: 500,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },
});

// SCROLL ARROW UP
spanUp.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
})

// AOS Animation
AOS.init({
    duration: 1200,
  });