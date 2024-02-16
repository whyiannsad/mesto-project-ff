import { setLike, deleteCard, removeLike } from "./api";


function createCard(cardValue, userId, removeCard, likeCard, openImage) {
    const cardTemplate = document.querySelector('#card-template').content;
    const cardElement = cardTemplate.querySelector('.card').cloneNode(true);

    cardElement.querySelector('.card__title').textContent = cardValue.name;
    const cardImage = cardElement.querySelector('.card__image');
    cardImage.src = cardValue.link;
    cardImage.alt = cardValue.name;

    const deleteButton = cardElement.querySelector('.card__delete-button');
    deleteButton.addEventListener('click', (event) => removeCard(event, cardValue));
    if (cardValue.owner._id !== userId) {
        deleteButton.remove();
    }
    
    const likeButton = cardElement.querySelector('.card__like-button');
    const likeCount = cardElement.querySelector('.card__like-count');
    likeButton.addEventListener('click', (event) => likeCard(event, cardValue, userId));
    if (cardValue.likes.length > 0) {
        likeCount.textContent = cardValue.likes.length;
    } else {
        likeCount.textContent = '0';
    }

    if (isLikedByUser(cardValue, userId)) {
        likeButton.classList.add('card__like-button_is-active');
    } else {
        likeButton.classList.remove('card__like-button_is-active');
    }

    const imageClick = cardImage;
    imageClick.addEventListener('click', () => {
        openImage(cardValue);
    })
    
    return cardElement;
}

// @todo: Функция удаления карточки
function removeCard (event, cardValue) {
    const card = event.target.closest('.card');
    deleteCard(cardValue._id)
    .then (() => {
        card.remove();
    })
    .catch((error) => {
        console.log(error);
    })
}

//Наличие лайка
function isLikedByUser(cardValue, userId) {
    return cardValue.likes.some(owner => owner._id === userId)
}

// Постановка лайка
function likeCard (event, cardValue, userId) {
    const likeButton = event.target;
    const likeCounter = likeButton.closest('.card__like').querySelector('.card__like-count');
    const isLiked = isLikedByUser(cardValue, userId);
    if (isLiked) {
        removeLike(cardValue._id)
        .then(res => {
            cardValue.likes = res.likes;
            likeButton.classList.remove('card__like-button_is-active');
            likeCounter.textContent = res.likes.length;
        })
        .catch((error) => {
            console.log(error);
        })
    } else {
        setLike(cardValue._id)
        .then(res => {
            cardValue.likes = res.likes;
            likeButton.classList.add('card__like-button_is-active');
            likeCounter.textContent = res.likes.length;
        })
        .catch(error => {
            console.log(error);
        })
    }
}

export { createCard, removeCard, likeCard };