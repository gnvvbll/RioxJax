
var navigation = $('.header').offset().top + 500;

$(document).scroll(function(){
    if( $(this).scrollTop() > navigation ){
        $('.navbar-expand-lg').css({
            'background-color' : '#fff',
            'box-shadow': '1px 1px 14px #888887'
        });
        $('.navbar-expand-lg .navbar-nav>li>a').css({
            'color' : '#000'
        });
        $('.navbar-brand').css({
            'color' : '#ff6347'
        });
    }
    else{
        $('.navbar-expand-lg').css({
            'background-color' : 'transparent',
            'box-shadow': 'none'
        });
        $('.navbar-expand-lg .navbar-nav>li>a').css({
            'color' : '#fff'
        });
        $('.navbar-brand').css({
            'color' : '#fff'
        });
    }
});