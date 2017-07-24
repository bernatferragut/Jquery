// DOM is ready
// document.addEventListener
// ('DOMContentLoaded', function() {
//     console.log('Loaded');
// })
// JQuery is a DOM Search Engine
$(document).ready(function() {
    // console.log('DOM and JQ are ready');
    // 1.search 2.do something
    $('aside > img').fadeOut('slow');
    // go for spans
    $('a > span').css('color', 'red');
    // multiple selector
    //$('a, span, p').slideToggle();
    // pseudo classes
    $('p:even').css({
        'font-weight': 'bold',
        'color': 'orangered'
    });
})
