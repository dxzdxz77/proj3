$(function(){
    $(".lazy").slick({
        lazyLoad: 'ondemand', // ondemand progressive anticipated
        infinite: true,
        dots : true,
        arrows : false,
        autoplay : true,
        autoplaySpeed : 2000,
        pauseOnHover : true, 
      }); //slick

      $('.slick-slide, .panel').each(function(){
        if($(window).width() < 769){
        var img = $(this).find('img');
        var img_pc = img.attr('src');
        var img_mo = img_pc.replace('_1920','_768');
        img.attr('src',img_mo);
        }else{
        var img = $(this).find('img');
        var img_mo = img.attr('src');
        var img_pc = img_mo.replace('_768','_1920');
        img.attr('src',img_pc);
        }
        }) 
        $(window).resize(function(){
          $('.slick-slide, .panel').each(function(){
            if($(window).width() < 769){
            var img = $(this).find('img');
            var img_pc = img.attr('src');
            var img_mo = img_pc.replace('_1920','_768');
            img.attr('src',img_mo);
            }else{
            var img = $(this).find('img');
            var img_mo = img.attr('src');
            var img_pc = img_mo.replace('_768','_1920');
            img.attr('src',img_pc);
            }
            }) 
        })
})//jp end