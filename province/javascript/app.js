$.js = function (el) 
{
      return $('[data-js=' + el + ']')
};
function carousel() 
{
$.js('content-section-time').slick(
{
      infinite: false,
      arrows: false,
      dots: true,
      autoplay: true,
      speed: 1100,
      slidesToShow: 2,
      slidesToScroll: 2,
      responsive: 
      [
      {
      breakpoint: 400,
      settings: 
      {
      slidesToShow: 1,
      slidesToScroll: 1
      }
   }]
});
}

carousel();


