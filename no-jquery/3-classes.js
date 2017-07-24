// MORE CLASSES

var header = document.querySelector('h1');
var myP = document.querySelector('p');
//console.log(selected.classList);
var myButton = document.querySelector('button');
myButton.addEventListener('click', function() {
    //console.log('button is clicked');
    if (!myP.classList.contains('red')) {
        myP.classList.add('red');
        myP.classList.remove('blue');
    }else{
        myP.classList.add('blue');
        myP.classList.remove('red');
    }
})

function toggleClass(el, cl) {
    if(el.classList.contains(cl)) {
        el.classList.remove(cl);
    }else {
        el.classList.add(cl);
    }
}
// Event that fires toggleClass function on element
header.addEventListener('click', function() {
    toggleClass(this, 'red');
})


