new Splide( '.slider-right', {
    type   : 'loop',
    perPage: 6,
    arrows:true,
    breakpoints: {
		768: {
            perPage: 5,
            arrows:false,
            },
            500:{
            perPage: 4,
            arrows:false,    
            }
      }
}).mount();

var menu=document.querySelector(".menu")
var onbtn=document.querySelector(".menu-btn")

onbtn.addEventListener('click',function(){
      menu.classList.toggle('show')
      onbtn.classList.toggle('active')
      document.querySelector('body').classList.toggle('noscroll')
})
var win=document.querySelector(".window")

document.querySelector('.search').addEventListener('click',function(){
      win.classList.toggle("block")
})