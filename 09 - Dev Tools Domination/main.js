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
const p = document.querySelector('p');
console.assert(p.classList.contains('ouch'), 'That is wrong!');

console.assert(1 === 1, 'That is wrong!');

// clearing
console.clear();

// Viewing DOM Elements
// To take a look at all things that live on that element (class list, etc.)
console.dir(p);

// Grouping together
dogs.forEach(dog => {
    console.group(`${dog.name}`);
    // can also use console.groupCollapsed so that the info is less cluttered and tabs are collapsed
    console.log(`This is ${dog.name}`);
    console.log(`${dog.name} is ${dog.age} years old`);
    console.log(`${dog.name} is ${dog.age * 7} dog years old`);
    console.groupEnd(`${dog.name}`);
});

// counting
// Will count how many time to use
console.count('Wes');

// timing
// To See how long something takes
// There is also performance.now in browser
console.time('fetching data');
fetch('https://api.github.com/users/wesbos')
    .then(data => data.json())
    .then(data => {
        console.timeEnd('fetching data');
        console.log(data);
    });

