const animItems = document.querySelectorAll('.scrl-anim');

const opitons = {
    root: document.body,
    rootMargin: '0px',
    threshold: 0.75,
}


const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            console.log(1);
            entry.target.classList.add('show');
        }
    })
}, { opitons });

animItems.forEach((item) => {
    observer.observe(item);
});

console.log(animItems)
