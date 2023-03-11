$('.last_slick').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
prevArrow: ' <div class=" btn slider_btn slider_prev "><img src="./images/prev.png" alt="" width="20"></div>',
nextArrow: '<div class=" btn slider_btn slider_next "><img src="./images/next.png" alt="" width="20" ></div>',
responsive: [
  {
    breakpoint: 1300,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 1,
      infinite: true,
    }
  },
  {
    breakpoint: 890,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows:true,
    }
  },
  {
    breakpoint: 600,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows:false,
      centerMode: true,
  centerPadding: '10px',
    }
  }

]
});
$('.team_carousel').slick({
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
prevArrow: ' <div class=" btn slider_btn slider_prev "><img src="./images/prev.png" alt="" width="20"></div>',
nextArrow: '<div class=" btn slider_btn slider_next "><img src="./images/next.png" alt="" width="20" ></div>',
responsive: [
{
  breakpoint: 1300,
  settings: {
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
  }
},
{
  breakpoint: 1178,
  settings: {
    slidesToShow: 2,
    slidesToScroll: 1,
    infinite: true,
  }
},
{
  breakpoint: 859,
  settings: {
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows:true,
  }
},
{
  breakpoint: 600,
  settings: {
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows:false,
  }
}

]
});