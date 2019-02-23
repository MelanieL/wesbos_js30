$( document ).ready (function() {
    const panels = document.querySelectorAll('.panel');

    function toggleOpen() {
        this.classList.toggle('open');
    }

    function toggleActive(e) {
        // This console log will tell us which transitions to look at
        console.log(e.propertyName);
        // Important to say "if includes flex because for Safari it's different than other browsers (flex-grow vs just flex), so this will catch all of them"
        if(e.propertyName.includes('flex')) {
            this.classList.toggle('open-active');
        }
    }

    // Loop over each panel, listen for a click, find and run function
    panels.forEach(panel => panel.addEventListener('click', toggleOpen));
    panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));

});