// once the Dom is ready
// $(document).ready(function() {
//     $('.lateral').find('a').last().on('click', function() {
//         $('.contenido'.children('p').css('color','red'));
//     });
// // THIS becomes $THIS in JQuery
//     $('.contenido').children('p').on('click', function(event) {
//         event.preventDefault();
//         $(this).css('color', 'red');
//     });
// });
// HTML DATA - Store DATA in HTML5 > data / dataset

$(document).ready(function() {
    $myVar= $('.lateral').find('a').last();
    // Getter
    var myData = $myVar.data('secret');
    // Setter
    $myVar.data('secret', 'mossad secretmossad secret');
    // Find
    console.log(myData);

    // Filter selection
    var myData = $('*');
    filtrado = myData.filter(function() {
        data = $(this).data('secret');
        return data == 'KGB';
    })
    console.log(filtrado);
});
