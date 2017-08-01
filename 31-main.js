// AJAX - ARGUMENTS
$(document).ready(function() {
    $.ajax('imported.html',{

        beforeSend: function() {
            // show loading spinner
        },
        success: function(res, status, request) {
            console.log(arguments);
            $('h1').append(res);
        },
        error: function(res,errorTypr, message) {
            console.log(arguments);
        },
        complete: function(res, status) {
            console.log(arguments);
        },
        timeout: 1

    });
});

// PROMISES API > 3.0 

$(document).ready(function() {
    $.ajax('imported.html')
        // success()
        .done( function(res) {
            $('h1').append(res);
        })
        // error()
        .fail(function(res, error, message) {
            console.log(arguments);
        })
        // complete()
        .always(function(res, status) {
            console.log(arguments);
        })
});



