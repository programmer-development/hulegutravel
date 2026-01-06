/* контент хэсэг унших */
var o = $(window);
$(".mask-loading").css("height", o.height());
$(".spinner").css("top", (o.height() / 2) - 25);
setTimeout(function() 
{
      document.getElementById("content-section-load").style.display="none";
}, 
2000);  



$(document).bind("contextmenu",function(e)
{
return false;
});
$(document).ready(function()
{
$('.navbar-toggler').click(function()
{
$('.navbar-collapse').slideToggle(300);
});
    
      smallScreenMenu();
      let temp;
function resizeEnd()
{
      smallScreenMenu();
}

$(window).resize(function()
{
      clearTimeout(temp);
      temp = setTimeout(resizeEnd, 100);
      resetMenu();
});
});
const subMenus = $('.sub-menu');
const menuLinks = $('.menu-link');

function smallScreenMenu()
{
if($(window).innerWidth() <= 992)
{
      menuLinks.each(function(item)
{
$(this).click(function()
{
$(this).next().slideToggle();
});
});
} 
else 
{
      menuLinks.each(function(item)
{
$(this).off('click');
});
}
}
function resetMenu()
{
if($(window).innerWidth() > 992)
{
      subMenus.each(function(item)
{
$(this).css('display', 'none');
});
}
}



gsap.set('.parallax-box', 
{       
      width:'100%'     
}
)
gsap.set('.section-parallax', 
{
      width:'100%', 
      height:'200%'
})
gsap.timeline(
{
      scrollTrigger:
      {
      trigger:'.section-parallax',       
      end:'bottom bottom', 
      scrub:1
}
})

.fromTo('.cloud', 
{
      y:100
},
{
      y:-800
}, 
0)
.fromTo('.mountain', 
{
      y:-10
},
{
      y:-100
},
0)




var isAnimating = false;

function scrollLeftAnimate(elem, unit) 
{
if (!elem || isAnimating) 
{
return;
}

var time = 300;
var from = elem.scrollLeft; 
var aframe = 10;
isAnimating = true;
var start = new Date().getTime(),
timer = setInterval(function () 
{
var step = Math.min(1, (new Date().getTime() - start) / time);
elem.scrollLeft = ((step * unit) + from);
if (step === 1) 
{
      clearInterval(timer);
      isAnimating = false;
}
}, 
aframe);
}

function initDealCarrousel(dealCarrouselID) 
{
var target = document.querySelector("#" + dealCarrouselID + " .box-flexbox");
var cardOutterWidth;
var maxCarrouselScroll;
function updateUpaCarrouselInfo() 
{
      cardOutterWidth = document.querySelector("#" + dealCarrouselID + " .box-card").offsetWidth;
      maxCarrouselScroll = (document.querySelectorAll("#" + dealCarrouselID + " .box-card").length *
      cardOutterWidth) - document.querySelector("#" + dealCarrouselID + " .box-flexbox")
      .clientWidth;
}
document.querySelector("#" + dealCarrouselID + " .arrow-left").addEventListener("click",
function () 
{
updateUpaCarrouselInfo();

if (target.scrollLeft > 0) 
{
      scrollLeftAnimate(target, -cardOutterWidth * 2);
}
}
);

document.querySelector("#" + dealCarrouselID + " .arrow-right").addEventListener("click",
function () 
{
updateUpaCarrouselInfo(); 
if (target.scrollLeft < maxCarrouselScroll) 
{
      scrollLeftAnimate(target, cardOutterWidth * 2);
}
}
);
}

initDealCarrousel('box-container');