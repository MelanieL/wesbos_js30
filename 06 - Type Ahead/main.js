$( document ).ready (function() {

    const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';
    
    const cities = [];
    
    // Fetch will return a promise
    fetch(endpoint)
    // Turn unstructured json into proper readable json
        .then(blob => blob.json())
    // .then(data => console.log(data)) 
    // How to get this data into cities?
    // Use push & spread(...)
        .then(data => cities.push(...data))
    
    function findMatches(wordToMatch, cities) {
        return cities.filter(place => {
            // Here we need to figure out if the city or state matches what ws searched
            // Need regexes
            // gi = g means global, i means insensitive (meaning not case sensitive)
            const regex = new RegExp(wordToMatch, 'gi');
            // Below means if ___ or ___ return, then true, and return 
            return place.city.match(regex) || place.state.match(regex)
        });
    }



});