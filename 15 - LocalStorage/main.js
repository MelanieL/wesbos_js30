const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.plates');
// JSON here will check to see if it can get it first from Local Storage
const items = JSON.parse(localStorage.getItem('items')) || [];

function addItem(e) {
    // Use preventDefault to stop the page from reloading on submit
    e.preventDefault();
    // console.log('hello');
    // Take box text and put into an object:
    const text = (this.querySelector('[name=item]')).value;
    const item = {
        text,
        // In ES6, could use just text for above instead of text: text
        done: false
    };
    console.log(item);
    items.push(item);
    populateList(items, itemsList);
    // Also want to use "Local Storage", which is computer by computer, website by website, storag. To see, go to DevTools, Application, Local Storage, file:// and then see list of key values
    // You may only use strings in local storage
    // Below, items is key, items are the values (but need to be strings), so we need to stringify
    localStorage.setItem('items', JSON.stringify(items));
    // If needed, can use parse to do the reverse (string to object)
    // To reset the form:
    this.reset();
}

// Function parameters force function to be more resilient and reusable
function populateList(plates = [], platesList) {
    platesList.innerHTML = plates.map((plate, i) => {
        return `
            <li>
                <input type="checkbox" data-index=${i} id="item${i}" ${plate.done ? 'checked' : ''} />
                <label for="item${i}">${plate.text}</label>
            </li>
        `;
    }).join('');
}

// Need a function to keep items checked on refresh
function toggleDone(e) {
    if(!e.target.matches('input')) return; // skip this unless it's an input
    const el = e.target;
    // console.log(el.dataset.index);
    const index = el.dataset.index;
    // The next line says do the opposite of what it is, so if it's true make it false and vice versa
    items[index].done = !items[index].done;
    // Run stringify again
    localStorage.setItem('items', JSON.stringify(items));
    populateList(items, itemsList);
}

addItems.addEventListener('submit', addItem);

// Event delegation is about finding something on the page that exists at the beginning. So in the example above, there are items that aren't on the page when our event listeners fire (they are added later)
// Hey plates! When you have children, make sure to tell them this thing...
itemsList.addEventListener('click', toggleDone);

populateList(items, itemsList);

// Challenge: Make a button that checks all, or unchecks all
