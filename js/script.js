// event pada link
$('.page-scroll').on('click',function(e){
     
    
// ambil isi
 var Tuju =$(this).attr('href');

 var elemenTuju = $(Tuju);


 $('body'). animate({
 	scrollTop  : elemenTuju. offset().top - 50

 },  1250, 'easeInOutExpo');

 e. preventDefault();


});

 
