import "../pages/index.css";
import { createCard, removeCard, likeCard} from "./card.js"
import { openPopup, closePopup} from "./modal.js"
import { enableValidation, clearValidation } from './validation.js';
import { getInitialCards, getUserData, changeUserData, changeUserImage, postCard } from './api.js'


// DOM узлы 
const content = document.querySelector('.content');
const placesList = document.querySelector('.places__list');
let userId;

//Валидации форм
const validationConfig = {
	formSelector: '.popup__form',
	inputSelector: '.popup__input',
	submitButtonSelector: '.popup__button',
	inactiveButtonClass: 'popup__button_disabled',
	inputErrorClass: 'popup__input_type_error',
	errorClass: 'popup__error_visible'
};

//Константы редактирования
const editButtonOpen = document.querySelector('.profile__edit-button');
const editPopup = document.querySelector('.popup_type_edit');
const editButtonClose = editPopup.querySelector('.popup__close');
const editForm = document.forms['edit-profile'];
const editInputName = editForm.elements['name'];
const editInputDescription = editForm.elements['description'];
const profileTitle = document.querySelector('.profile__title');
const profileDescription = document.querySelector('.profile__description');
const editPopupSaveButton = editForm.querySelector('.popup__button');

//Открытие
editButtonOpen.addEventListener('click', function() {
	openPopup(editPopup);
	editInputName.value = profileTitle.textContent;
	editInputDescription.value = profileDescription.textContent;
	clearValidation(editForm, validationConfig);
});

//Закрытие
editButtonClose.addEventListener('click', function() {
	closePopup(editPopup);
});

//Редактировать профиль
function editFormSubmit(event) {
	event.preventDefault();
	editPopupSaveButton.textContent = 'Сохранение...';
	changeUserData(editInputName.value, editInputDescription.value)
	.then(() => {
		profileTitle.textContent = editInputName.value;
		profileDescription.textContent = editInputDescription.value;
		closePopup(editPopup);
	})
	.catch((error) => {
		console.log(error);
	})
	.finally(() => {
		editPopupSaveButton.textContent = 'Сохранение';
	})
}

editForm.addEventListener('submit', editFormSubmit);

//Смена аватарки
const avatarPopup = document.querySelector('.popup_type_avatar');
const profileImage = document.querySelector('.profile__image');
const avatarForm = document.forms['new-avatar'];
const avatarInput = avatarForm.elements['link'];
const avatarCloseButton = avatarPopup.querySelector('.popup__close');
const avatarPopupSaveButton = avatarForm.querySelector('.popup__button');

profileImage.addEventListener('click', () => {
	avatarForm.reset();
	openPopup(avatarPopup);
	clearValidation(avatarForm, validationConfig);
})

avatarCloseButton.addEventListener('click', () => {
	closePopup(avatarPopup);
})

function avatarFormSubmit(event) {
	event.preventDefault();
	avatarPopupSaveButton.textContent = 'Сохранение...';

	changeUserImage(avatarInput.value)
	.then(() => {
		profileImage.style = `background-image: url('${avatarInput.value}')`;
		closePopup(avatarPopup)
	})
	.catch((error) => {
		console.log(error);
	})
	.finally(() => {
		avatarPopupSaveButton.textContent = 'Сохранение';
	})
}

avatarForm.addEventListener('submit', avatarFormSubmit);

//Константы добавления
const addPopup = document.querySelector('.popup_type_new-card');
const addButtonOpen = document.querySelector('.profile__add-button');
const addForm = document.forms['new-place'];
const addInputName = addForm.elements['place-name'];
const addInputUrl = addForm.elements['link'];
const addPopupSaveButton = addPopup.querySelector('.popup__button');
const addButtonClose = addPopup.querySelector('.popup__close');

//Открытие
addButtonOpen.addEventListener('click', function() {
	addForm.reset();
	openPopup(addPopup);
	clearValidation(addForm, validationConfig);
});

//Закрытие
addButtonClose.addEventListener('click', function() {
	closePopup(addPopup);
});

function addFormSubmit(event) {
	event.preventDefault();
	addPopupSaveButton.textContent = 'Сохранение...';

	postCard(addInputName.value, addInputUrl.value)
	.then((cardValue) => {
		placesList.prepend(createCard(cardValue, userId, removeCard, likeCard, openImage));
		addForm.reset();
		closePopup(addPopup);
	})
	.catch((error) => {
		console.log(error);
	})
	.finally(() => {
		addPopupSaveButton.textContent = 'Сохранить';
	})
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

//Валидация
enableValidation(validationConfig);

//Вывод карточек
Promise.all([getInitialCards(), getUserData()])
.then(([initialCardsData, userData]) => {
	userId = userData._id;
	profileTitle.textContent = userData.name;
	profileDescription.textContent = userData.about;
	profileImage.style = `background-image: url('${userData.avatar}')`

	initialCardsData.forEach((cardValue) => {
		placesList.append(createCard(cardValue, userId, removeCard, likeCard, openImage));
	})
})
.catch((error) => {
	console.log(error);
})