let menu=document.queryselector('#menu-bars');
let navbar=document.queryselector('.navbar');

menu.onclick=()=>{
   menu.classlist.toggle('fa-times');
   navbar.classlist.toggle('active');
}
windows.onscroll=()=>{
    menu.classlist.remove('fa-times');
    navbar.classlist.remove('active');
 }
 var swiper = new Swiper(".home-slider", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 100,
      modifier: 2,
      slideShadows: true,
    },
    loop:true,
    autoplay:{
        delay:3000,
        disableOnInteraction:false,
    }
  });