// @todo: Функция создания карточки
function addCard(cardValue, remove, likeCard, imageOpen) {
    const cardTemplate = document.querySelector('#card-template').content;
    const cardElement = cardTemplate.querySelector('.card').cloneNode(true);
    const deleteButton = cardElement.querySelector('.card__delete-button');
    deleteButton.addEventListener('click', remove);
    const likeButton = cardElement.querySelector('.card__like-button');
    likeButton.addEventListener('click', likeCard);
    cardElement.querySelector('.card__title').textContent = cardValue.name;
    cardElement.querySelector('.card__image').alt = cardValue.name;
    cardElement.querySelector('.card__image').src = cardValue.link;
    const imageClick = cardElement.querySelector('.card__image');
    imageClick.addEventListener('click', () => {
        imageOpen(cardValue);
    })
    
    return cardElement;
}
// @todo: Функция удаления карточки
function deleteCard (evt) {
    const card = evt.target.closest('.card');
    card.remove()
}

// Постановка лайка
function likeCard (evt) {
    evt.target.classList.toggle('card__like-button_is-active');
}

export {addCard, deleteCard, likeCard};