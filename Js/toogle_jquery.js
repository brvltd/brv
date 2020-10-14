$(document).ready(function()
{
	$("#overlay").click(function()
	{
		$("#hideToggle").toggle(800);
		$("#showToggle").toggle(800);
	});

	$("#hide").click(function()
	{
		$("#hideToggle").toggle(800);
		$("#showToggle").toggle(800);
	});

	$("#overlay1").click(function()
	{
		$("#hideToggle1").toggle(800);
		$("#showToggle1").toggle(800);
	});

	$("#hide1").click(function()
	{
		$("#hideToggle1").toggle(800);
		$("#showToggle1").toggle(800);
	});

	$("#overlay2").click(function()
	{
		$("#hideToggle2").toggle(800);
		$("#showToggle2").toggle(800);
	});

	$("#hide2").click(function()
	{
		$("#hideToggle2").toggle(800);
		$("#showToggle2").toggle(800);
	});

	$("#overlay3").click(function()
	{
		$("#hideToggle3").toggle(800);
		$("#showToggle3").toggle(800);
	});

	$("#hide3").click(function()
	{
		$("#hideToggle3").toggle(800);
		$("#showToggle3").toggle(800);
	});

$('#img1').mouseover(function(){
    $(this).css('-webkit-transform','rotate(360deg)')
    .css('transform','rotate(360deg)')
    .css('transition','width 2s, height 2s, transform 2s'); 
    
}).mouseout(function(){
    $(this).css('-webkit-transform','rotate(-360deg)')
    .css('transform','rotate(-360deg)')
    .css('transition','width 2s, height 2s, transform 2s');
});

$('#img2').mouseover(function(){
    $(this).css('-webkit-transform','rotate(360deg)')
    .css('transform','rotate(360deg)')
    .css('transition','width 2s, height 2s, transform 2s'); 
    
}).mouseout(function(){
    $(this).css('-webkit-transform','rotate(-360deg)')
    .css('transform','rotate(-360deg)')
    .css('transition','width 2s, height 2s, transform 2s');
});

$('#img3').mouseover(function(){
    $(this).css('-webkit-transform','rotate(360deg)')
    .css('transform','rotate(360deg)')
    .css('transition','width 2s, height 2s, transform 2s'); 
    
}).mouseout(function(){
    $(this).css('-webkit-transform','rotate(-360deg)')
    .css('transform','rotate(-360deg)')
    .css('transition','width 2s, height 2s, transform 2s');
});
});