function openPopup(element) {
    element.classList.add('popup_is-opened');
    element.addEventListener('click', closePopupOverlay);
    document.addEventListener('keydown', closePopupEsc);
}

function closePopup(element) {
    element.classList.remove('popup_is-opened');
    element.addEventListener('click', closePopupOverlay);
    document.addEventListener('keydown', closePopupEsc);
}

function closePopupEsc(evt) {
    if (evt.key === 'Escape') {
        closePopup(document.querySelector('.popup_is-opened'))
    };
}

function closePopupOverlay(evt) {
    if (evt.target === evt.currentTarget) {
        closePopup(evt.currentTarget);
    };
}

export { openPopup, closePopup };