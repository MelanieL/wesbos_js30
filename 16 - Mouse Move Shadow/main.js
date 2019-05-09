const hero = document.querySelector('.hero');
const text = hero.querySelector('h1');
const walk = 100; // 100px

function shadow(e) {
    // console.log(e);
    const width = hero.offsetWidth;
    const height = hero.offsetHeight;
    // Can also use ES6 destructuring:
    // const { offsetWidth: width, offsetHeight: height } = hero;

    // Using let because we below we may need to re-assign values of x and y
    let { offsetX: x, offsetY: y } = e;
    // console.log(x, y);

    if(this !== e.target) {
        x = x + e.target.offsetLeft;
        y = y + e.target.offsetTop;
    }

    const xWalk = Math.round((x / width * walk) - (walk / 2));
    const yWalk = Math.round((y / height * walk) - (walk / 2));

    text.style.textShadow = `${xWalk}px ${yWalk}px 0 red`;

}

hero.addEventListener('mousemove', shadow);