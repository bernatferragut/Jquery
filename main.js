// JQ1KeyBoard Events
// $(document).ready(function() {
//     // $elA input
//     $elA = $('#enter');
//     // $elB output
//     $elB = $('.contenido').children('h1');
//     // Reaction
//     $elA.on('keyup', function(event) {
//         $elB.text($elA.val());
//     });
// });

// Accessing am especific KEY
$(document).ready(function() {
    // $elA input
    $elA = $('#enter');
    // $elB output
    $elB = $('.contenido').children('h1');
    //JQ Reaction
    $elA.on('keyup', function(event) {
        //console.log(event.which) => JS gives 
        let eventCode = event.which;
        if( eventCode === 13) {
            $elB.text($elA.val());
            $elA.val('');
        }
    });
});