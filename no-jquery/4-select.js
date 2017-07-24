
// SELECT without JQuery
let selection = document.querySelectorAll('li');
// find
console.log(selection[0].innerHTML);
// action
selection[1].addEventListener('click', function() {
    console.log('click');
})
// find specific class element
var byClass = document.getElementsByClassName('intro');
// console.log('BYCLASS: ' + byClass);
var ul = document.getElementsByTagName('ul');
console.log(ul);
// Id
var myId = document.getElementById('subtitle');
console.log(myId.innerHTML);


