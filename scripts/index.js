// @todo: Темплейт карточки
const cardTemplate = document.querySelector('#card-template').content;
// @todo: DOM узлы
const cardList = document.querySelector('.places__list');
// @todo: Функция создания карточки
function createElement(cardName, cardLink, deleteCard) {
    const cardElement = cardTemplate.querySelector('.places__item').cloneNode(true);
    const cardImage = cardElement.querySelector('.card__image');
    const cardTitle = cardElement.querySelector('.card__title');
    const deleteButton = cardElement.querySelector('.card__delete-button');
    cardImage.src = cardLink;
    cardImage.alt = cardName;
    cardTitle.textContent = cardName;
    deleteButton.addEventListener('click', function() {
        deleteCard(cardElement);
    });
    return cardElement;
}
// @todo: Функция удаления карточки
function deleteCard (card) {
card.remove();
}
// @todo: Вывести карточки на страницу
initialCards.forEach( element => {
	cardList.append(createElement(element.name, element.link, deleteCard));
})