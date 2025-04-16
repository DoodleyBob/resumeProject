let angle = 0;
let img = document.querySelector(".me");

$(img).click(function(){
    angle += 360;
    $(this).animate({rotate: angle}, {
        duration: "1000",
        easing: 'linear', 
        step: function(now) {
        $(this).css('transform', 'rotate(' + now + ')');
        }
    });
});