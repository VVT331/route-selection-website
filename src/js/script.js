"use strict";

window.addEventListener('DOMContentLoaded', () => {
    const openBtn = document.querySelector('.navigation__burger'),
        menu = document.querySelector('.burger'),
        closeBtn = menu.querySelector('.burger__header-close');

    openBtn.addEventListener('click', () => {
        menu.classList.add('burger_active');
        document.body.style.overflow = 'hidden';
    });

    closeBtn.addEventListener('click', () => {
        menu.classList.remove('burger_active');
        document.body.style.overflow = '';
    });
});