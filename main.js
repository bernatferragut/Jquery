// Slide Toggle - SlideToggle()

// $(document).ready(function() {
//     // select
//     let $el = $('.contenido').children('p');
//     // event
//     let $cat = $('.lateral').children('img');
//     $cat.on('click', function() {
//         showSequence($el, 1000);
//     })
//     // functionality
//     function showSequence($collection, time) {
//         this.time = time || 1000;
//         $el.each(function(index, element){
//             $(element).slideToggle(time * index +1);
//         });
//     }
// });

// Mouse Events

// $(document).ready(function() {
//     // select
//     $el = $('.contenido').children('p');
//     // event
//     $active = $();
//     $el.on('mouseenter', function() {
//         myF($el, 2000);
//     })
//     function myF($collection, time) {
//         this.time =  time || 1000;
//         $collection.each(function(index, element)  {
//             $(element).slideToggle(time * (index * 1));
//         });
//     }
// });

$(document).ready(function() {
    // select input
    $input = $('#enter');
    // select h1
    $h1 = $('.contenido').children('h1');
    //console.log($input);
    $input.on('keyup', function(event) {
        // console.log(event);
        $h1.text($input.val());
    })
});

