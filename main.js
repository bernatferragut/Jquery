// JS
// Hover(fn1,fn2); 
$(document).ready(function() {
    $('a').hover(function() {
        // 1. save the title
        let $t = $(this).attr('title');
        let $c = $(this).data('color');
        // 2. save data and erase original title
        $(this).data('$t', $t).removeAttr('title');
        // 3. Add ourTooltip
        $('<p class="tooltip"></p>')
            .text($t)
            .css('color', $c)
            .appendTo('body')
            .fadeIn('slow');
    }, function() {
        // HOVER OUT
        // put back the native title
        $(this).attr('title', $(this).data('$t'));
        // Erase our tootlip
        $('.tooltip').remove(); 
    }).mousemove(function(e) {
        // ADD on MOVE
        // capturing X Y on the mouse over tooltip
        let mouseX = e.pageX + 10;
        let mouseY = e.pageY + 10;
        // make that tooltip moves with poiner
        $('.tooltip').css({
            top: mouseY,
            left: mouseX
        });
    });
});
