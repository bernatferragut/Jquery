// JQuery Plug-ins

//Plug-In to change the elements color

$(document).ready(function() {
    // 1.Create a 'special' function that holds all
    // This is the JQuery Prototype.
    // console.log($.fn === $.prototype)
    $.fn.changeColor = function(options) {
        // to have a default color (fallback)
        const config = $.extend({
            color: 'red',
        }, options );

        this.each((index, element) =>{ 
            let color = config.color;
            $(element).css('color', color);
        } )
    };
    $pars = $('.contenido').children('p').changeColor({
        color: 'green',
    });
});

