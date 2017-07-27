// FILTER JQuery

$(document).ready(function() {

    // select 1
    // let $el = $('.lateral').find('a').filter(':even');
    // console.log($el);
    // $el.css('transform', 'scale(1)');

    // Passing a function to filer
    let $scLink = $('.lateral').find('a')
        .filter(function(index, element) {
            return $(element).find('span').text() 
            === 'Snapchat';
        });
     console.log($scLink.css('transform', 'rotate(45deg)'));
});
