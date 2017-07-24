////// WITH JQUERY ///////
// Selecting Elements
// JS Native
var element = document.querySelector('h1');
console.log(element.innerHTML);
// Set time out
var timeout = setTimeout(function() {
    element.innerHTML = ' JQuery - iALIVE!!';
}, 1000)
// JQuery
var element = $('h1');
console.log(element.text());

var timeout2 = setTimeout( function() {
    element.text('JQuery2 is Alive!');
}, 1000)





