//  How insert in the DOM: BEFORE() & AFTER()

$(document).ready(function() {
    //content to insert
    var $link = $('<a href="#"> LINK 1  </a>');
    // entry point
    $('.contenido').find('p').first().before($link);
});

//  How insert in the DOM: PREPEND() $ APPEND()

$(document).ready(function() {
    //content to insert
    var $link = $('<a href="#"> LINK 2 </a>');
    // entry point
    $('.contenido').find('p').append($link);
});

//  Eliniate elements from the DOM: DETACH() & REMOVE()

$(document).ready(function() {
    //content to insert
    var $link = $('<a href="#"> LINK 2 </a>');
    // entry point
    $('.contenido').find('p').last().remove();
});




