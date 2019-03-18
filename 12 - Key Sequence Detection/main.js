const pressed = [];
const secretCode = 'wesbos';

window.addEventListener('keyup', (e) => {
    console.log(e.key);
    pressed.push(e.key);
    // We want to trim down, rather than loggin keys
    pressed.splice(-secretCode.length - 1, pressed.length - secretCode.length);
    if(pressed.join('').includes(secretCode)) {
        console.log('DING DING!');
        // This is from an old JS library (see link in index.html)
        cornify_add();
    }
    console.log(pressed);
})