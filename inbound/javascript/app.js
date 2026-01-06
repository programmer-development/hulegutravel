var zen = function()
{ 
      var logo = Snap.select('.logo');

logo.attr(
{
      fill:'#fff'
});

logo.select('.zenman').transform('s.2,t98,105');
  
      var circle = Snap.select('.map-circle');
      var svgs = [circle];

var rot = function(thisCircle, per, dir)
{
      var dots = thisCircle.select('.dots');
      var scale = dots.transform().localMatrix.d;
      dots.stop().animate(
      {
      transform: 's'+scale+', t0,0r' + (360 * dir)
      },
      100000 * (per / 100),
function()
{
      dots.transform('s'+scale+',t0,0r0');
      rot(thisCircle,per);
}
); 
}
  
var rings = 5;
for (var i = 0; i <= rings; i++) 
{
      svgs.push(circle.clone());
      var per = i/rings;
      var pos = 200 - (200 * per);
      /*
      var speed = Math.floor(Math.random() * 100) + 25;
      */
      var speed = Math.floor(Math.random() * 100) + 10;
      var dir = Math.random() < 0.5 ? -1 : 1;
      var scale =  per * .9;

svgs[i].attr(
{
      fill: '#222'
});

svgs[i].select('.dots').transform('s'+scale+',t0,0r0');
    
rot(svgs[i], speed, dir);
}
}
zen();