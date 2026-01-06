function openTab(tabNumber) 
{

var i;
var x = document.getElementsByClassName("tab-box");
  
$('.tab-button').removeClass('button-active');
$('.tab-button').click(function() {
$(this).addClass('button-active');
})


for (i = 0; i < x.length; i++) 
{
x[i].classList.remove("tab-active");
}
document.getElementById(tabNumber).classList.add("tab-active");

}