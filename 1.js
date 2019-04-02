 $(function(){
    vitriedu =$('#edu').offset().top;
    console.log(vitriedu);

    $('.hr').click(function(){
        $('body,html').animate({scrollTop:vitriedu},500)
    })
})  
 