const dogs = [{name: 'Snickers', age: 2 }, {name: 'hugo', age: 8 }];

function makeGreen() {
    const p = document.querySelector('p');
    p.style.color = '#BADA55';
    p.style.fontSize = '50px';
}

// Regular
console.log('hello');

// Interpolated
// Will pass second through %s
console.log('Hello I am a %s string!', 'poop')

// Styled
console.log('%c I am some great text', 'font-size:50px; backgound:red;')

// warning!
console.warn('OH NOOOO');

// Error :|
console.error('Shit!');

// Info
console.info('Crocodiles eat 3-4 people per year');

// Testing

// clearing

// Viewing DOM Elements

// Grouping together

// counting

// timing

