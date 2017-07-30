// FULL JQuery SLIDER
$(document).ready(function() {
    // SELECTIONS
    let $list = $('li'); // images li list
    $images = $('li').find('img'); // images
    let active = 0;
    let quantity = $images.length;
    // START
    // Cancel images and add to to li background
    $images.hide();
    // EACH()
    $images.each(function(index, image) {
        $list.eq(index).css({
            'background-image':'url('+ $(image).attr('src')+')',
            'background-size': 'cover',
            'background-position': 'center center',
            'position':'absolute'
        });
        $(image).remove();
    });
    // show first image
    $list.eq(active).fadeIn();

    // EventListeners
    // RIGHT
    let $right = $('#right');
    $right.on('click', function(e) {
        e.preventDefault();
        active +=1;
        if(active > quantity-1) {
            active = 0;
        }
        showImage();
    });
    // LEFT
    let $left = $('#left');
    $left.on('click', function(e) {
        e.preventDefault;
        active -=1;
        if(active < 0) {
            active = quantity-1;
        }
        showImage();
    })

    // Show Image
    function showImage() {
        $list.hide().eq(active).fadeIn();
    }
});


