// Do the 'least' amount of search in th DOM 
// That's why we cache some info to use less memory

// $(document).ready(function() {
//     $select = $('.contenido').find('p').last();
//     //console.log($select);
//     $css = $select.css('color', 'orangered');
//     $myData = $css.data('secret');
//     console.log($myData);
//     // LINK
//     var $link = $('<a href="#>LINK</a>');
//     // APPEND TO SELECT on CHAINING METHODS
//     $myData.append($link);

//     EVeNT DELEGATION

// });
//console.log('works2');
// EVENT DELEGATE
$(document).ready(function() {
    $('a').on('click', function(event) {
        event.preventDefault();
        console.log('clicked');
    });
});