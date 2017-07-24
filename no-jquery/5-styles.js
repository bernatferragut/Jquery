// how to obtain the element styes

// 1.DOM selection
var element = document.querySelector('div'),
// inspect with getComputedStyle
styles = getComputedStyle(element, null);
console.log(styles.backgroundColor);
// Modify styles
element.style.backgroundColor = 'red';
element.style.borderWidth = '10px';
element.style.borderColor = 'orangered';
// At the same time
element.style.cssText += 'background-color: yellow;border-width: 10px; border-color:green';
//  How to add a class to make a transition
    element.classList.add('transition');

