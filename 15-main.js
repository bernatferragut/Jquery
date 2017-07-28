// EVENTS
$(document).ready(function() {

    // 1. DIRECT EVENT LISTENER
    // let $el = $('a');
    // $el.on('click', function(evt) {
    //     evt.preventDefault();
    //     console.log('clicked');
    // })
    // console.log($el)

     // 1. DELEGATE EVENT LISTENER
    let $el = $('.contenido');
    // We listen globally
    $el.on('click','a', function(evt) {
        // we filter inside the global 
        // de 'a'.
        evt.preventDefault();
        console.log('clicked');
    })
    console.log($el)

    let $link = '<a href="#">LINK</a>';
    $('p').last().css('color', 'orangered').append($link);

});

