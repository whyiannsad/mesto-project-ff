// @todo: Темплейт карточки
const cardTemplate = document.querySelector('#card-template').content;
// @todo: DOM узлы
const cardList = cardContainer.querySelector('.places__list');
// @todo: Функция создания карточки
function addElement(cardName, cardLink, deleteButton) {
    const cardElement = cardTemplate.querySelector('.places__item').cloneNode(true);
    const cardImage = cardElement.querySelector('.card__image');
	const cardTitle = cardElement.querySelector('.card__title');
	const deleteButton = cardElement.querySelector('.card__delete-button');
    cardImage.src = cardLink;
    cardImage.alt = cardName;
    cardTitle.textContent = cardName;
    deleteButton.addEventListener('click', function() {
        deleteButton(card);
    })
    return cardElement;
}
// @todo: Функция удаления карточки
function deleteCard(card) {
	card.remove();
}
// @todo: Вывести карточки на страницу
initialCards.forEach((item) => {
    places.append(addElement(item.name, item.link, deleteCard));
});