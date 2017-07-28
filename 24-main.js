// console.log('works');

// $(document).ready(function() {
//     // CSS getter
//     $myCSS = $('.lateral').children('a').first().css('color');
//     console.log($myCSS);

//     // CSS setter
//     $myCSS2 = $('.contenido').children('p').last().css({
//         'color':'red',
//         'font-size':'40px'
//     });
// })

// CSS with CLASSES

$(document).ready(function() {
    // CLASS ADD
    $myP = $('.contenido').children('p').first();
    //$myP.addClass('myClass');

    // ACTIVATOR
    $img = $('.lateral').children('img');
    // ACTION
    $img.on('click', function() {
        if( $myP.hasClass('myClass')) {
            $myP.removeClass('myClass');
        } else {
            $myP.addClass('myClass');
        }
    });
})




