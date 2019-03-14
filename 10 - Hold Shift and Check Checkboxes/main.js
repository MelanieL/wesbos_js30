// Step 1 - Establish a variable for all checkboxes
// Step 2 - Loop over each checkbox and listen for an event. Click works with checkboxes.
// Step 3 - Create the check event function
// Step 4 - Need to create a variable when something is checked to know what to reference when next box is checked.

// Step 1
const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');
// console.log(checkboxes);

// Step 4
let lastChecked;

// Step 3
function handleCheck(e) {
    // console.log(e);
    // Check if they have the shift key down
    // And check if they are checking it
    let inBetween = false;
    if(e.shiftKey && this.checked) {
        // go ahead and do what we please
        // loop over every single checkbox
        checkboxes.forEach(checkbox => {
            console.log(checkbox);
            if(checkbox === this || checkbox === lastChecked) {
                // Flag variable:
                inBetween = !inBetween;
                console.log('Starting to check them in between!')
            }
            
            if(inBetween) {
                checkbox.checked = true;
            }
        })

    }
    // Step 4
    lastChecked = this;
}

// Step 2
checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck));

// Note: Doing it this way (with a loop) means that if someone changes the HTML it wont break
