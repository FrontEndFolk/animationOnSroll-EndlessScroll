const animItems = document.querySelectorAll('.scrl-anim');


const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
            observer.unobserve(entry.target);
        }
    })
}, { threshold: 0.8 });

animItems.forEach((item) => {
    observer.observe(item);
});

const lastElemObserver = new IntersectionObserver((entries) => {
    let lastElem = entries[0];
    if (!lastElem.isIntersecting) return
    loadNewElem();
    lastElemObserver.unobserve(lastElem.target);
    lastElemObserver.observe(document.querySelector('main section:last-child'));
}, { threshold: 1, rootMargin: '100px' })

lastElemObserver.observe(document.querySelector('main section:last-child'));

console.log(animItems)

const main = document.querySelector('main');

function loadNewElem() {
    for (let i = 0; i < 10; i++) {
        let elem = document.createElement('section');
        elem.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean mi nunc, venenatis et metus et, vehicula viverra sem. Donec sit amet auctor leo, non pulvinar diam. Donec pretium porta justo, nec ullamcorper lorem dapibus in. Fusce consectetur, arcu vel pellentesque ullamcorper, nibh leo tempus massa, non aliquet nisl nunc eu ipsum. Praesent ultricies dolor nulla, id porta lectus dignissim eu. Ut rhoncus vulputate lacus sed aliquet. Morbi ligula leo, fringilla in ligula eget, feugiat maximus libero. Don;ec elementum augue eget aliquet aliquam';
        elem.className = 'scrl-anim new-section'
        observer.observe(elem)
        main.append(elem);
    }
}