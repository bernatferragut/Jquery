// Animate() in JQuery
// use VELOCITY.js instead
// or GREEN Sock
// $(document).ready(function() {
//     // chaining two animation + call back at the end
//     $anima = $('.lateral').animate({
//         'flex-basis':'90%',
//         'padding': '10px',
//     }, 3000, function() {
//        $('main').animate({
//            'width': '110px'
//        }, 4000, function() {
//            console.log('finnaly ended')
//        })
//     });
// });

// Using Animate CSS library
$(document).ready(function() {
    let $i = $('.lateral').children('img');
    $i.on('click', function() {
        $m = $('main');
        $m.addClass('animated fadeIn');
        //timeout();
    });

    let timeout = setTimeout(function() {
        $m.addClass('fadeOut');
        clearTimeout(timeout);
    }, 3000);
});
