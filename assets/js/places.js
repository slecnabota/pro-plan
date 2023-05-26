window.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('[data-card]');
    const cardBtns = document.querySelectorAll('[data-card-show]');
    const cardBodies = document.querySelectorAll('[data-card-body]');

    cardBtns.forEach((btn, i) => {
        btn.addEventListener('click', e => {
            e.preventDefault();
            btn.classList.toggle('places-card-show--active');
            if (cardBodies[i].style.height) {
                cardBodies[i].style.height = null;
            } else {
                cardBodies[i].style.height = cardBodies[i].scrollHeight + 'px';
            }
        });
    });

    const cardLists = document.querySelectorAll('[data-card-list]');
    const cardMaps = document.querySelectorAll('[data-card-wrap]');

    cardLists.forEach((list, i) => {
        const btns = list.querySelectorAll('[data-card-map]');
        btns.forEach(btn => btn.setAttribute('data-parent', i));
    });

    cardLists.forEach((list, i) => {
        const btns = list.querySelectorAll('[data-card-map]');
        btns.forEach(btn => btn.setAttribute('data-parent', i));
        btns.forEach(btn => {
            btn.addEventListener('click', e => {
                e.preventDefault();
                cardMaps[i].innerHTML = btn.getAttribute('data-card-map');
            });
        });
    });
});

