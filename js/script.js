const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}


$(document).ready(function(){
	
	// $(".slider").slick({
	//    slidesToShow: 3,
	//    autoplay: true,
	//    autoplaySpeed: 2000,
	//    slidesToScroll: 1,
	//     responsive: [
 //    {
 //      breakpoint: 768,
 //      settings: {
 //        slidesToShow: 1,
 //        slidesToScroll: 1,
 //        infinite: true,
 //        dots: true
 //      }
 //    },
 //  ]
	// });

	
$('.slider').slick({
  dots: false,
  infinite: true,
  autoplay:true,
  speed: 1000,
  slidesToShow: 3,
   arrows: false,

  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        // dots: true
      }
    },
     {
      breakpoint: 960,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        // dots: true
      }
    },
  ]
});

		$(".sl").slick({
	   slidesToShow: 3,
	   slidesToScroll: 1,
	   autoplay: true,
	   autoplaySpeed: 1000,
   arrows: false,
     responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        // dots: true
      }
    },
      {
      breakpoint: 960,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        // dots: true
      }
    },
  ]
 
	});
	$(".sliderr").slick({
	   slidesToShow: 1,
	   slidesToScroll: 1,
	   autoplay: true,
	   autoplaySpeed: 3000,
	   dots: false,
    prevArrow: false,
    nextArrow: false
	});
});

$('.banner-area').slick({
    autoplay:true,
    speed:800,
    arrows:false,
    dots:false,
    fade:true
 })

      

      