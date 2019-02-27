    // Note on workflow with data. Always get data first, then worry about processing it.
    
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

    // This is a function that will apply commas to the population numbers in the results
    function numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    }

    function displayMatches() {
        const matchArray = findMatches(this.value, cities);
        // console.log(matchArray);
        const html = matchArray.map(place => {
            const regex = new RegExp(this.value, 'gi');
            const cityName = place.city.replace(regex, `<span class="hl">${this.value}</span>`)
            const stateName = place.state.replace(regex, `<span class="hl">${this.value}</span>`)
            return `
                <li>
                    <span class="name">${cityName}, ${stateName}</span>
                    <span class="population">${numberWithCommas(place.population)}</span>
                </li>
            `
        }).join('');
        suggestions.innerHTML = html;
    }

    const searchInput = document.querySelector('.search');
    const suggestions = document.querySelector('.suggestions');

    // This will only trigger when we click outside the input box
    searchInput.addEventListener('change', displayMatches);
    // So we need a key up event as well
    searchInput.addEventListener('keyup', displayMatches);



    
    