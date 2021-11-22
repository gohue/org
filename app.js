const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');
const navLogo = document.querySelector('#navbar__logo');
const body = document.querySelector('body');

// Display Mobile Menu 
const mobileMenu = () => {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
    body.classList.toggle('active');
};

menu.addEventListener('click', mobileMenu);

// Animations
gsap.registerPlugin(ScrollTrigger)

gsap.from('.animate-hero', {
    duration: 1.6,
    opacity: 0,
    y: -150,
    stagger: 0.3
})

gsap.from('.animate-services', {
    scrollTrigger: '.animate-services',
    duration: 0.5,
    opacity: 1,
    x: -150,
    stagger: 0.12
});

gsap.from('.animate-img', {
    scrollTrigger: '.animate-services',
    duration: 1.2,
    opacity: 0,
    x: -200,
});

gsap.from('.animate-membership', {
    scrollTrigger: '.animate-membership',
    duration: 1,
    opacity: 0,
    y: -150,
    stagger: 0.3,
    delay: 0.5
});
gsap.from('.animate-card', {
    scrollTrigger: '.animate-card',
    duration: 1,
    opacity: 0,
    y: -150,
    stagger: 0.1,
    delay: 0.2
});
gsap.from('.animate-team', {
    scrollTrigger: '.animate-team',
    duration: 1,
    opacity: 0,
    y: -150,
    stagger: 0.3,
    delay: 0.2
});
gsap.from('.animate-email', {
    scrollTrigger: '.animate-email',
    duration: 0.8,
    opacity: 0,
    y: -150,
    stagger: 0.25,
    delay: 0.6
});
function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
 }
 // When the user scrolls down 20px from the top of the document, slide down the navbar
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-50px";
  }
}

// Send Email Info
function senEmail(name, email, message) {
    email.send({
        HOST: "smtp.gmail.com",
        Username: "qrayqos@gmail.com",
        Password: "sqtjrnrokscawzmt",
        To: "qrayqos@gmail.com",
        From: "qrayqos@gmail.com",
        Subject: '${name} send you a message',
        Body: 'Name: ${name} <br/> Email: ${email} <br/> Message: ${message}',
    })
}
gsap.from("", 2, {
    opacity: 0,
    delay: 0.1,
    stagger: 0.2
})
