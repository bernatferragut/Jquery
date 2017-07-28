// JQuery

// Chaining different methods for DOM traversing
$(document).ready(function() {
    $('.contenido').find('p').first().next().css('color', 'red');
});
// Query Up => Parent() and Down => Child() the DOM

$(document).ready(function() {
    // Parent
    var $parent = $('.lateral').find('span').last();
    //$parent.css('border', '1px solid red');
    
    // Children
    var $children = $('main').find('*');
    $children.css({
        'transition': 'all 2s',
        'transform': 'rotate(180deg)'
    });
});






