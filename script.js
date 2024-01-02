// header
const bar = document.getElementById("bar");
const nav = document.getElementById("nav");

bar.onclick = (e) => {
    const icon = e.target.getAttribute("class")
    if(icon == "fa-solid fa-bars"){
        e.target.setAttribute("class","fa-solid fa-xmark")

    }else{
        e.target.setAttribute("class","fa-solid fa-bars")
    }
    nav.classList.toggle("showNav")
}


// carousel
const carouselContainer = document.querySelector(".carouselContainer");
const eachCarousel = document.querySelector(".eachCarousel").clientWidth;
const allEachCarousel = document.querySelectorAll(".eachCarousel");
const allIndicator = document.querySelectorAll(".indicator");

const slideCarousel = (index) => {
    for(let x = 0; x<allEachCarousel.length;x++){
        if(x === index){
            allEachCarousel[x].classList.add("eachCarouselBorder")
            allIndicator[x].classList.add("activeIndicator")
        }else{
            allEachCarousel[x].classList.remove("eachCarouselBorder")
            allIndicator[x].classList.remove("activeIndicator")
        }
    }
   carouselContainer.scrollLeft = (index * (eachCarousel + 10))
   console.log(carouselContainer.scrollLeft)
}

document.querySelector('.contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Display the alert
    alert('Thank you!');

    // Redirect to the home page
    window.location.href = 'index.html'; // Replace 'home.html' with the actual path to your home page
});
