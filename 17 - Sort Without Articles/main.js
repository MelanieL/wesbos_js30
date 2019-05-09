const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];

function strip(bandName) {
    // This regex expression says when it starts with (that's what the carrot is for) a or the or an, the i makes it insensitive, meaning it doesn't care about caps
    return bandName.replace(/^(a |the |an)/i, '').trim();
}

const sortedBands = bands.sort(function(a, b) {
    if (strip(a) > strip(b)) {
        return 1;
    } else {
        return -1;
    }
});

document.querySelector('#bands').innerHTML = 
    sortedBands
        .map(band => `<li>${band}</li>`)
        .join('');

console.log(sortedBands);