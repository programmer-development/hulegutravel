const totalGooballs = $('.ball-animation').length;
const angle = 360 / totalGooballs;

$('.ball-animation').each(function (i) 
{
const rotationAngle = angle * i;

$(this).css(
{
      transform: 'rotate(' + rotationAngle + 'deg)' 
});
});
const entryTimeline = new TimelineMax(
{
onComplete: function () 
{
      pulsateGooBalls();
} 
});



TweenMax.set($('.animation-end'), 
{
      y: 150 
});
entryTimeline.add([
TweenMax.staggerFromTo($('.animation-end'), 0.3, 
{ 
      scale: 0 
}, 
{ 
      scale: 1, 
      ease: Power3.easeOut 
}, 
0.10),
TweenMax.staggerTo($('.animation-end'), 
      1.2, 
{ 
      y: 160, 
      ease: Power3.easeOut 
}, 
0.25),
TweenMax.staggerTo($('.animation-end'), 0.5, 
{
      y: 0,
      delay: 1.7,
      ease: Power4.easeOut 
},
0.15)
]);



function pulsateGooBalls() 
{
const pulseTimeline = new TimelineMax({ repeat: -1 });

for (let i = 0; i < totalGooballs; i++) 
{
pulseTimeline.to($('.animation-end')[i], 0.6, 
{
      y: -8,
      delay: Math.random(),
      repeat: -1,
      yoyo: true 
},
0);
}
}


$('.ball-box').click(function () 
{
const leaveTimeline = new TimelineMax({ onComplete: function () 
{
      entryTimeline.restart();
} 
});

leaveTimeline.add([
TweenMax.staggerTo($('.animation-end'), 
0.5, 
{ 
      y: 160, 
      scale: 8, 
      ease: Power3.easeInOut 
}, 
0.18),
TweenMax.staggerTo($('.animation-end'), 
1.7, 
{ 
      scale: 5, 
      ease: Power3.easeInOut 
}, 
0.18)]);

leaveTimeline.add([
TweenMax.to($('.animation-end'), 
0.5, 
{ 
      y: 0, 
      scale: 0, 
      ease: Power3.easeInOut 
}),
TweenMax.to($('.ball-article'), 
1, 
{ 
      scale: 0, 
      ease: Power3.easeInOut 
}
)]);
});




var cursor = document.querySelector(".cursor");
var cursor2 = document.querySelector(".cursor2");
document.addEventListener("mousemove",function(e){
cursor.style.cssText = cursor2.style.cssText = "left: " + e.clientX + "px; top: " + e.clientY + "px;";
});




const card = document.querySelector(".card-timeline");

let up = false;
let start;
let end;

card.addEventListener("mousedown", e => 
{
      up = true;
      card.classList.add("active");
      start = e.pageX - card.offsetLeft;
      scrollLeft = card.scrollLeft;
});
card.addEventListener("mouseleave", () => 
{
setTimeout(function() 
{
      up = false;
      card.classList.remove("active");
},
100);
});
card.addEventListener("mouseup", () => 
{
setTimeout(function() 
{
      up = false;
      card.classList.remove("active");
}, 
100);
});
card.addEventListener("mousemove", e => 
{
if (!up) return;
e.preventDefault();

const x = e.pageX - card.offsetLeft;
const walk = (x - start) * 1;
card.scrollLeft = scrollLeft - walk;
console.log(walk);
});



const slider = document.querySelector(".grid-timeline");

let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener("mousedown", e => 
{
      isDown = true;
      slider.classList.add("active");
      startX = e.pageX - slider.offsetLeft;
      scrollLeft = slider.scrollLeft;
});
slider.addEventListener("mouseleave", () => 
{
setTimeout(function() 
{
      isDown = false;
      slider.classList.remove("active");
},
100);
});
slider.addEventListener("mouseup", () => 
{
setTimeout(function() 
{
      isDown = false;
      slider.classList.remove("active");
}, 
100);
});
slider.addEventListener("mousemove", e => 
{
if (!isDown) return;
e.preventDefault();

const x = e.pageX - slider.offsetLeft;
const walk = (x - startX) * 1;
slider.scrollLeft = scrollLeft - walk;
console.log(walk);
});





var swiper = new Swiper(".swiper-container", 
{
                loop: true,
                speed: 1000,
                parallax: true,
                autoplay:
                {
                    delay: 3000
                },
                loopAdditionalSlides: 10,
                grabCursor: true,
                navigation: 
                {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
                on: 
                {
                init: function()
                {
                this.autoplay.stop();
                },
                imagesReady: function()
                {
                this.el.classList.remove('loading');
                this.autoplay.start();
                }
                },
                pagination: 
                {
                el: '.swiper-pagination',
                clickable: true,
                renderBullet: function (index, className) 
                {
                return `<span class="outer-dot swiper-pagination-bullet"><span class="inner-dot"></span></span>`;
},
},
});

