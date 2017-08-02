// JQuery AJAX - moving on your search results
// https://randomuser.me/api/?results=500
// results.pivture.thumbnail


$(document).ready(function() {
    // SEARCH
    $('button').on('click', function(evt) {
        evt.preventDefault();
        // Getting JSON Data
        $.getJSON('https://randomuser.me/api/?results=50')
            .then(showPictures)
            .fail(err => console.log(err))
            .always(() => console.info('req.finished'));

        // Compose pictures    
        function showPictures(pictures) {
            // Elininate event Listener
            $('button').off('click');
            // Search for the picture
            $.each(pictures,function(index, picture) {
                // console.log(picture);
               $('div').css('background-image', 
                `url($(picture.results.picture))`).appendTo($('.fotos'));
            })
        }
    });
});
