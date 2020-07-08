
$(document).ready(function() {
    $('.nav a[href^="#"]').click(function() {//choose weblinks from menu     
        var offset = $('.nav').innerHeight();//menu height, getting dinamicly
        var target = $(this).attr('href'); // saving value href attribute
        $('html, body').animate({
            scrollTop: $(target).offset().top - offset// subtract height of menu
        }, 500); // animation time
        $('.nav a[href^="#"]').removeClass('active'); //remove class Active from all menu points
        $(this).addClas('active');// to add class Active to active weblink
        return false;
    });
});