// Slide Toggle - SlideToggle()

$(document).ready(function() {
    // select
    let $el = $('.contenido').children('p');
    // event
    let $cat = $('.lateral').children('img');
    $cat.on('click', function() {
        showSequence($el, 1000);
    })
    // functionality
    function showSequence($collection, time) {
        this.time = time || 1000;
        $el.each(function(index, element){
            $(element).slideToggle(time * index +1);
        });
    }
});