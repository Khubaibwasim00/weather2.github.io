let menu = document.querySelector('#Bars')
let navbar = document.querySelector('.navbar')

menu.onclick = function(){
  menu.classList.toggle('fa-times')
  navbar.classList.toggle('active')
}

let section = document.querySelector('section')
let navLinks = document.querySelector('header .navbar a')



window.onscroll = function(){

  menu.classList.remove('fa-times')
  navbar.classList.remove('active')

  section.forEach(sec =>{
    let top = window.scrollY;
    let height = sec.offsetHeight;
    let offset = sec.offsetTop - 150;
    let id = sec.getAttribute('id');

    if(top => offset && top < offset + height){
      navLinks.forEach(links =>{
        links.classList.remove('active')
        document.querySelector('header .navbar a[href*='+id+']').classList.add('active')
      })
    }
  })
}

document.querySelector('#search-icon').onclick = function(){
    document.querySelector('#search-form').classList.toggle('active')
}
document.querySelector('#close').onclick = function(){
    document.querySelector('#search-form').classList.remove('active')
}

var swiper = new Swiper(".home-slider", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  loop:true,
  });