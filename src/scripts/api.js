const config = {
    baseUrl: 'https://mesto.nomoreparties.co/v1/wff-cohort-6',
    headers: {
        authorization: '492845ed-8f40-461f-9a82-c4a862dbaea5',
        'Content-Type': 'application/json'
    },
}


function checkResponse(res) {
    if (res.ok) {
        return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
}


export const getInitialCards = () => {
    return fetch(`${config.baseUrl}/cards`, {
        method: 'GET',
        headers: config.headers
    })
    .then(res => checkResponse(res));
}


export const getUserData = () => {
    return fetch(`${config.baseUrl}/users/me`, {
        method: 'GET',
        headers: config.headers
    })
    .then(res => checkResponse(res));
}


export function changeUserData(profileTitle, profileDescription) {
    return fetch(`${config.baseUrl}/users/me`, {
        method: 'PATCH',
        headers: config.headers,
        body: JSON.stringify({
            name: profileTitle,
            about: profileDescription
        })
    })
    .then(res => checkResponse(res));
}


export function changeUserImage(profileImage) {
    return fetch(`${config.baseUrl}/users/me/avatar`, {
        method: 'PATCH',
        headers: config.headers,
        body: JSON.stringify({
            avatar: profileImage
        })
    })
    .then(res => checkResponse(res));
}


export function setLike(cardId) {
    return fetch(`${config.baseUrl}/cards/likes/${cardId}`, {
        method: 'PUT',
        headers: config.headers,
    })
    .then(res => checkResponse(res));
}


export function removeLike(cardId) {
    return fetch(`${config.baseUrl}/cards/likes/${cardId}`, {
        method: 'DELETE',
        headers: config.headers,
    })
    .then(res => checkResponse(res));
}


export function postCard(placeName, placeLink) {
    return fetch(`${config.baseUrl}/cards`, {
        method: 'POST',
        headers: config.headers,
        body: JSON.stringify({
            name: placeName,
            link: placeLink
        })
    })
    .then(res => checkResponse(res));
}


export function removeCard(cardId) {
    return fetch(`${config.baseUrl}/cards/${cardId}`, {
        method: 'DELETE',
        headers: config.headers,
    })
    .then(res => checkResponse(res));
}