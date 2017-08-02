// JQuery Plug-ins

//Plug-In to change the elements color

// $(document).ready(function() {
//     // console.log($.fn === $.prototype)
//     $.fn.changeColor = function(options) {
//         // object configuration with default
//         const config = $.extend({
//             color: 'red',
//         }, options );
//         // action
//         this.each((index, element) =>{ 
//             let color = config.color;
//             $(element).css('color', color);
//         } )
//     };
//     // Example of selected element
//     $('.contenido').children('p').changeColor({
//         color: 'green'
//     });
// });

// DEFINING A PROMISE IN JQUERY
// $.deferred.promise()
$(document).ready(() => {
    function APIconsult() {
        const deferred = $.Deferred();
        setTimeout(function() {
            var res = [
                { title: 'learn JQ' },
                { title: 'learn JS' },
                { title: 'learn PY' },
            ];
            //success
            deferred.resolve(res);
            //fail
            deferred.reject(err('Did not work'))
        },2000);
        return deferred.promise();
    }

    APIconsult()
        .then((res) => {
            console.log(res);
        })
        .fail((err) => {
            console.log(err);
        })
        .always(()=> {
            console.log('finished');
        })
});



