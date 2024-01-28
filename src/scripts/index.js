import "../pages/index.css";
import { initialCards } from "./cards.js"
import { createCard, deleteCard, likeCard} from "./card.js"
import { openPopup, closePopup} from "./modal.js"


// DOM узлы 
const content = document.querySelector('.content');
const cardList = document.querySelector('.places__list');

//Вывод карточек
function renderList() {
	initialCards.forEach((cardValue) => {
		cardList.append(createCard(cardValue, deleteCard, likeCard, openImage));
	});
}
renderList();

//Константы редактирования
const editButtonOpen = document.querySelector('.profile__edit-button');
const editPopup = document.querySelector('.popup_type_edit');
const editInputName = document.querySelector(".popup__input_type_name");
const editInputDescription = document.querySelector(".popup__input_type_description");
const profileTitle = document.querySelector('.profile__title');
const profileDescription = document.querySelector('.profile__description');

//Открытие
editButtonOpen.addEventListener('click', function() {
	openPopup(editPopup);
	editInputName.value = profileTitle.textContent;
	editInputDescription.value = profileDescription.textContent;
});

const editButtonClose = editPopup.querySelector('.popup__close');

//Закрытие
editButtonClose.addEventListener('click', function() {
	closePopup(editPopup);
});

function editFormSubmit(evt) {
	evt.preventDefault();
	profileTitle.textContent = editInputName.value;
	profileDescription.textContent = editInputDescription.value;
	closePopup(editPopup);
}

const editForm = editPopup.querySelector(".popup__form");

editForm.addEventListener('submit', editFormSubmit);

//Константы добавления
const addPopup = document.querySelector('.popup_type_new-card');
const addButtonOpen = document.querySelector('.profile__add-button');
const addInputName = document.querySelector(".popup__input_type_card-name");
const addInputUrl = document.querySelector(".popup__input_type_url");

//Открытие
addButtonOpen.addEventListener('click', function() {
	openPopup(addPopup);
});

const addButtonClose = addPopup.querySelector('.popup__close');

//Закрытие
addButtonClose.addEventListener('click', function() {
	closePopup(addPopup);
});

const addForm = addPopup.querySelector(".popup__form");

function addFormSubmit(evt) {
	evt.preventDefault();
	const cardValue = { name: addInputName.value, link: addInputUrl.value};
	cardList.prepend(createCard(cardValue, deleteCard, likeCard, openImage));
	addForm.reset();
	closePopup(addPopup);
}

addForm.addEventListener('submit', addFormSubmit);

//Коснтанты картинки
const imagePopup = document.querySelector('.popup_type_image');
const imageButtonClose = imagePopup.querySelector('.popup__close');
const imageCard = imagePopup.querySelector('.popup__image');
const imageCaption = imagePopup.querySelector('.popup__caption');

//Открытие
function openImage(cardValue) {
	imageCaption.textContent = cardValue.name;
	imageCard.alt = cardValue.name;
	imageCard.src = cardValue.link;
	openPopup(imagePopup);
}

//Закрытие
imageButtonClose.addEventListener('click', function() {
	closePopup(imagePopup);
})