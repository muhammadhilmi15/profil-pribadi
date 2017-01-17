
(function(window, $) {

    window.requestAnimFrame = (function(){
        return  window.requestAnimationFrame       ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame    ||
        function( callback ){
            window.setTimeout(callback, 1000 / 60);
        };
    })();

    var y = 0,
    f = 0.45;

    function move() {
        y -= f;
        $('#banner').css('background-position', 'center ' + y + 'px');
        requestAnimationFrame(move);
    }
    move();

})(window, jQuery);

jQuery(document).ready(function($){
    var $timeline_block = $('.cd-timeline-block');

    //hide timeline blocks which are outside the viewport
    $timeline_block.each(function(){
        if($(this).offset().top > $(window).scrollTop()+$(window).height()*0.75) {
            $(this).find('.cd-timeline-img, .cd-timeline-content').addClass('is-hidden');
        }
    });

    //on scolling, show/animate timeline blocks when enter the viewport
    $(window).on('scroll', function(){
        $timeline_block.each(function(){
            if( $(this).offset().top <= $(window).scrollTop()+$(window).height()*0.75 && $(this).find('.cd-timeline-img').hasClass('is-hidden') ) {
                $(this).find('.cd-timeline-img, .cd-timeline-content').removeClass('is-hidden').addClass('bounce-in');
            }
        });
    });
});

$(function() {
   $("#1").addClass("progress-bar-blue");
   $("#2").addClass("progress-bar-blue");
   $("#3").addClass("progress-bar-blue");
   $("#4").addClass("progress-bar-blue");
   $("#5").addClass("progress-bar-blue");
   $("#6").addClass("progress-bar-blue");
   $("#7").addClass("progress-bar-blue");
   $("#8").addClass("progress-bar-blue");
});
