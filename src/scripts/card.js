import {setLike, removeCard, removeLike} from "./api";


function createCard(cardValue, deleteCard, likeCard, openImage, userId) {
    const cardTemplate = document.querySelector('#card-template').content;
    const cardElement = cardTemplate.querySelector('.card').cloneNode(true);
    
    const deleteButton = cardElement.querySelector('.card__delete-button');
    deleteButton.addEventListener('click', (evt) =>
    deleteCard(evt, cardValue));
    if (cardValue.owner._id !== userId) {
        deleteButton.remove();
    }

    const likeButton = cardElement.querySelector('.card__like-button');
    const likeCount = cardElement.querySelector('.card__like-count');
    likeButton.addEventListener('click', (evt) => 
    likeCard(evt, cardValue, userId));
    if (cardValue.likes.length > 0) {
        likeCount.textContent = cardValue.likes.length;
    } else {
        likeCount.textContent = '0';
    }

    if (isLikedByUser(cardValue, userId)) {
        likeButton.classList.add('card__like-button_is-active');
    } else {
        likeButton.classlist.remove('card__like-button_is-active');
    }

    cardElement.querySelector('.card__title').textContent = cardValue.name;
    cardElement.querySelector('.card__image').alt = cardValue.name;
    cardElement.querySelector('.card__image').src = cardValue.link;

    const imageClick = cardElement.querySelector('.card__image');
    imageClick.addEventListener('click', () => {
        openImage(cardValue);
    })
    
    return cardElement;
}
// @todo: Функция удаления карточки
function deleteCard (evt, cardValue) {
    const card = evt.target.closest('.card');
    removeCard(cardValue._id)
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
function likeCard (evt, cardValue, userId) {
    const likeButton = evt.target;
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

export {createCard, deleteCard, likeCard};