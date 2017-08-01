// HTTP CALLS
// sending data in my AJAX request.
// select form submit;

$('form').on('submit',function(evt) {
    evt.preventDefault();
    console.log(evt);
    // AJAX
    $.ajax('server/ajax.php',{
        type: 'POST', // GET by default
        // send Form data
        dataType: {
            'name': $('name').val(),
            'message': $('message').val()
        }.then(function() {
            console.log(res);
        })

    });
});

// CORS - Cross Origin Resource Sharing
// You send it through the HEADERS




