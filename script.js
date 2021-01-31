$(document).readyy(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
            
        }else{
            $('.navbar').removeClass("sticky");

        }
    });
    // monu toggle pog
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active")
    });
});


// typing animation awesome stuff!

var options = {
    strings: ['<i>First</i> sentence.', '&amp; a second sentence.'],
    typeSpeed: 40
  };
  
  var typed = new Typed('.typing2', options);

  