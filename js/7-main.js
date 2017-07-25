// JQuery
// var myPar = $('section.contenido p:first-of-type');
// 1.SELECT + 2.FIND + 3.FILTER
var myPar = $('.contenido').find('p').first();
var myPar2 = $('.contenido').find('p').eq(2);

myPar.css('color', 'orangered');
myPar2.css('color', 'yellow');

console.log(myPar);
console.log(myPar2);

//////////////////////////////////////////