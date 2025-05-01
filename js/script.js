




const navigation = document.getElementById('navigation');

    window.addEventListener('scroll', function () {
      if (window.scrollY > 300) {
        navigation.classList.add('scrolled');
      } else {
        navigation.classList.remove('scrolled');
      }
    });



       $.fakeLoader({
          timeToHide:1200,
          spinner:"spinner7",
          bgColor:"orange",

        });

   

      $(document).ready(function(){
        $('.owl-carousel').owlCarousel();
      });
   
var owl = $('.owl-carousel');
owl.owlCarousel({
    items:4,
    loop:true,
    margin:10,
    autoplay:true,
    autoplayTimeout:1000,
    autoplayHoverPause:true
});
$('.play').on('click',function(){
    owl.trigger('play.owl.autoplay',[1000])
})
$('.stop').on('click',function(){
    owl.trigger('stop.owl.autoplay')
})



window.addEventListener('load', function() {
  baguetteBox.run('.col-md-4');
});



new WOW().init();



$(function(){
  var rellax = new Rellax('.rellax', {
    horizontal: true,
  });
});


 document.addEventListener("scroll", () => {
    const layers = document.querySelectorAll(".layer");
    const scrollY = window.scrollY;

    layers.forEach(layer => {
      const speed = layer.dataset.speed;
      layer.style.transform = `translateY(${scrollY * speed * 0.1}px)`;
    });
  });
  