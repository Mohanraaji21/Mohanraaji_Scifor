
const slides = document.querySelectorAll(".slides img");
let slideIndex = 0;
let intervalId = null;

//initializeSlider();

document.addEventListener("DOMContentLoaded", initializeSlider());

function initializeSlider()
{
    if(slides.length > 0)
    {
    slides[slideIndex].classList.add("displaySlide");
    intervalId = setInterval(nextSlide, 5000);
    }
}

function showSlide(index)
{

    if(index >= slides.length)
    {
        slideIndex = 0;
    }
    else if(index < 0)
    {
        slideIndex = slides.length - 1;
    }

    slides.forEach(slide =>{
        slide.classList.remove("displaySlide");
    });

    slides[slideIndex].classList.add("displaySlide");

}

function nextSlide()
{
    slideIndex++;
    showSlide(slideIndex);
    console.log("next");
}

function prevSlide()
{
    clearInterval(intervalId);
    slideIndex--;
    showSlide(slideIndex);
}








var tablinks = document.getElementsByClassName('tab-links');
var tabcont = document.getElementsByClassName('tab-contents');


function opentab(tabname)
{
    for(tablink of tablinks)
    {
        tablink.classList.remove('active-link');
    }

    for(tabcon of tabcont)
    {
        tabcon.classList.remove('active-tab');
    }

    event.currentTarget.classList.add('active-link');
    document.getElementById(tabname).classList.add('active-tab');
}

// 

var sidemenu = document.getElementById('sidemenu');

function openmenu(){
    sidemenu.style.right = '0';
}

function closemenu(){
    sidemenu.style.right = '-200px';
}