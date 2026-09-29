const scrollUp = document.querySelector(".scroll-up");

if (scrollUp) {

    window.addEventListener('scroll', onScroll);
    scrollUp.addEventListener('click', onScrollUp);

    function onScroll() {
        if (window.scrollY > 300) {
            scrollUp.classList.remove('is-hidden')
        }
        else {
            scrollUp.classList.add('is-hidden')
        }
    }

    function onScrollUp() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }
}