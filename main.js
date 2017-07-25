// EVENTS

$(document).ready(function() {
    // 1.select + change
    var $myP = $('.contenido').find('p').first();
    var $link = $('.lateral').find('a').last();

    $link.on('click', function() {
        // console.log('works')
        if (!$myP.css('color', 'red')) {
            $myP.css('color', 'red');
        }else{
            $myP.css('color', 'black');
        }
    });

    // Listen P
    $('.contenido').children('p').on('click', function(e) {
        console.log('this');
        this.css('color', 'red');
    })
});




