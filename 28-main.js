// ACCORDEON
$(document).ready(function() {
    // Show first p content
    $header = $('.panel__cabecera');
    $contentp1 = $('.panel__contenido').first().slideDown();
    // events
    $header.on('click',function(evt) {
        // prevent default
        evt.preventDefault();
        // hide the others
        $('.panel__contenido').not(this).each( function() {
            $(this).slideUp();
        })
        // panel contenido show
        $(this).siblings('.panel__contenido').slideToggle();
    });
});




