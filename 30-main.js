// Jquery & AJAX 

$(document).ready(function() {
    // AJAX 
    $.ajax('imported.html', {
        // success
        success: function(res) {
            // console.log(res)
            $('h1').append($(res));
        }
    });
});

// GET

$(document).ready(function() {
    // AJAX  - METHOD GET
    $.get('imported.html',function(res) {
        // console.log(res);
        $('h1').append($(res));
    })

});

// GET JSON

$(document).ready(function() {
    // AJAX - getJSON
    $.getJSON('https://randomuser.me/api/?results=50')
        .then(function(res) {
            //console.log(res);
            res.results.forEach(function(person){
                // console.log(person.picture.thumbnail);
                $('<img></img>').attr('src',
                person.picture.thumbnail).appendTo('h1');
            })
        });
});

