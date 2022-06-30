 $('.about-click').click(function(){
        $('html,body').animate({scrollTop:$('#about').offset().top},800);
    });


$(function(){ 
if($(window).width()<770){ 
$('.navbar a').on('click', function(){
    $('.navbar-toggle').click();
  });
}
});
