// Events
// JS Native
// Listening ContentLaoded from DM
document.addEventListener('DOMContentLoaded', function(){
    console.log('Dom uploaded');
});
//capture de link
var link = document.querySelector('a');
// attach eventListener
link.addEventListener('click', function(event){
    event.preventDefault();
    console.log('clicked!');
});


