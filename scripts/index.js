let self = this;

self.header = document.querySelector('header');
self.input = document.querySelector('.mobile');
self.menu = document.querySelector('nav.mobile-nav');
self.main = document.querySelector('div.main');

self.input.addEventListener('change', (e) => {
    if(e.target.checked) {
        self.menu.style.transform = 'translateX(100%)';
    } else {
        self.menu.style.transform = 'translateX(-100%)';
    }
})

self.menu.style.top = `${self.header.clientHeight}px`;
self.main.style.paddingTop = `${self.header.clientHeight}px`;

window.addEventListener('resize', function(){
    self.menu.style.top = `${self.header.clientHeight}px`;
    self.main.style.paddingTop = `${self.header.clientHeight}px`;
});

