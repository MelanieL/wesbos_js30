// Without debounce, when you scroll the function gets called 50+ times which is too much. With debounce, it will only run so many times in a set amount of time. There are frameworks for this problem, but this tutorial is vanilla js so this is how we are dealing with it.
function debounce(func, wait = 20, immediate = true) {
    var timeout;
    return function () {
        var context = this, args = arguments;
        var later = function () {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}

const sliderImages = document.querySelectorAll('.slide-in');

function checkSlide(e) {
    // console.log(e);
    // console.count(e);
    // To get a reading of how far down the page you are scrolled:
    // console.log(window.scrollY + window.innerHeight);
    sliderImages.forEach(sliderImage => {
        // Haldway through the image
        const slideInAt = (window.scrollY + window.innerHeight) - sliderImage.height / 2;
        // console.log(slideInAt);
        // Bottom of the image:
        const imageBottom = sliderImage.offsetTop + sliderImage.height;
        const isHalfShown = slideInAt > sliderImage.offsetTop;
        const isNotScrolledPast = window.scrollY < imageBottom;
        if (isHalfShown && isNotScrolledPast) {
            sliderImage.classList.add('active');
        } else {
            sliderImage.classList.remove('active');
        }
    });

}

window.addEventListener('scroll', debounce(checkSlide));

// Rule: When page is scrolled to show 50% of area where image should be, that's when we want our image to appear