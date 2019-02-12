$( document ).ready (function() {
    const inputs = document.querySelectorAll('.controls input');
    
    function handleUpdate() {
        // console.log(this.value);
        const suffix = this.dataset.sizing || '';
        // console.log(suffix);
        // console.log(this.name);
        document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
    }

    // We are going to loop over the inputs with the forEach method
    // forEach
    // What this says is that we are listening for the 'change" event and when we get it, we are going to run handleUpdate
    inputs.forEach(input => input.addEventListener('change', handleUpdate));
    inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));

});