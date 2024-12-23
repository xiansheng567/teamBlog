let lastScrollTop = 0; 
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', function() {
    let scrollTop =document.documentElement.scrollTop;
    if (Math.abs(scrollTop - lastScrollTop) > 5) {
        if (scrollTop > lastScrollTop) {
            navbar.classList.add('move');
        } else {
            navbar.classList.remove('move');
        }
    }
    
    lastScrollTop = scrollTop; 
});
