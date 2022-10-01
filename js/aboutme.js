const responsive = {
    0: {
        items: 1
    },
    350: {
        items: 1
    },
    375: {
        items: 1
    },
    570: {
        items: 2
    },
    960: {
        items: 3
    }
}

$(document).ready(function(){

    $nav = $('.nav');
    $toggleCollapse = $('.toggle-collapse');

/**CLICK CLICK ON TOGGLE MENU */
$toggleCollapse.click(function(){
    $nav.toggleClass('collapse');
})

// click to move up 
$('.move-up span').click(function(){
    $('html,body').animate({
        scrollTop: 0
    }, 2000);
})

// animation
AOS.init();
});