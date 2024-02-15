(()=>{"use strict";var e={baseUrl:"https://mesto.nomoreparties.co/v1/wff-cohort-6",headers:{authorization:"492845ed-8f40-461f-9a82-c4a862dbaea5","Content-Type":"application/json"}};function t(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}function n(e,t,n,r,c){var u=document.querySelector("#card-template").content.querySelector(".card").cloneNode(!0),a=u.querySelector(".card__delete-button");a.addEventListener("click",(function(n){return t(n,e)})),e.owner._id!==c&&a.remove();var i=u.querySelector(".card__like-button"),l=u.querySelector(".card__like-count");return i.addEventListener("click",(function(t){return n(t,e,c)})),e.likes.length>0?l.textContent=e.likes.length:l.textContent="0",o(e,c)?i.classList.add("card__like-button_is-active"):i.classlist.remove("card__like-button_is-active"),u.querySelector(".card__title").textContent=e.name,u.querySelector(".card__image").alt=e.name,u.querySelector(".card__image").src=e.link,u.querySelector(".card__image").addEventListener("click",(function(){r(e)})),u}function r(n,r){var o,c=n.target.closest(".card");(o=r._id,fetch("".concat(e.baseUrl,"/cards/").concat(o),{method:"DELETE",headers:e.headers}).then((function(e){return t(e)}))).then((function(){c.remove()})).catch((function(e){console.log(e)}))}function o(e,t){return e.likes.some((function(e){return e._id===t}))}function c(n,r,c){var u,a=n.target,i=a.closest(".card__like").querySelector(".card__like-count");o(r,c)?(u=r._id,fetch("".concat(e.baseUrl,"/cards/likes/").concat(u),{method:"DELETE",headers:e.headers}).then((function(e){return t(e)}))).then((function(e){r.likes=e.likes,a.classList.remove("card__like-button_is-active"),i.textContent=e.likes.length})).catch((function(e){console.log(e)})):function(n){return fetch("".concat(e.baseUrl,"/cards/likes/").concat(n),{method:"PUT",headers:e.headers}).then((function(e){return t(e)}))}(r._id).then((function(e){r.likes=e.likes,a.classList.add("card__like-button_is-active"),i.textContent=e.likes.length})).catch((function(e){console.log(e)}))}function u(e){e.classList.add("popup_is-opened"),e.addEventListener("click",l),document.addEventListener("keydown",i)}function a(e){e.classList.remove("popup_is-opened"),e.addEventListener("click",l),document.addEventListener("keydown",i)}function i(e){"Escape"===e.key&&a(document.querySelector(".popup_is-opened"))}function l(e){e.target===e.currentTarget&&a(document.querySelector(".popup_is-opened"))}function s(e,t){var n=Array.from(e.querySelectorAll(t.inputSelector)),r=e.querySelector(t.submitButtonSelector);n.forEach((function(n){d(e,n,t)})),p(n,r,t)}function d(e,t,n){var r=e.querySelector(".".concat(t.id,"-error"));t.classList.remove(n.inputErrorClass),r.classList.remove(n.errorClass),r.textContent=""}var p=function(e,t,n){!function(e){return e.some((function(e){return!e.validity.valid}))}(e)?(t.classList.remove(n.inactiveButtonClass),t.disabled=!1):(t.classList.add(n.inactiveButtonClass),t.disabled=!0)};function f(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}document.querySelector(".content"),document.querySelector(".places__list");var _,m={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__button",inactiveButtonClass:"popup__button_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__error_visible"};!function(e){Array.from(document.querySelectorAll(e.formSelector)).forEach((function(t){t.addEventListener("submit",(function(e){e.preventDefault()})),function(e,t){var n=Array.from(e.querySelectorAll(t.inputSelector)),r=e.querySelector(t.submitButtonSelector);p(n,r,t),n.forEach((function(o){o.addEventListener("input",(function(){(function(e,t,n){t.validity.patternMismatch?t.setCustomValidity(t.dataset.errorMessage):t.setCustomValidity(""),t.validity.valid?d(e,t,n):function(e,t,n,r){var o=e.querySelector(".".concat(t.id,"-error"));t.classList.add(r.inputErrorClass),o.textContent=n,o.classList.add(r.errorClass)}(e,t,t.validationMessage,n)})(e,o,t),p(n,r,t)}))}))}(t,e)}))}(m),Promise.all([fetch("".concat(e.baseUrl,"/cards"),{method:"GET",headers:e.headers}).then((function(e){return t(e)})),fetch("".concat(e.baseUrl,"/users/me"),{method:"GET",headers:e.headers}).then((function(e){return t(e)}))]).then((function(e){var t,r,o=(r=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,c,u,a=[],i=!0,l=!1;try{if(c=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;i=!1}else for(;!(i=(r=c.call(n)).done)&&(a.push(r.value),a.length!==t);i=!0);}catch(e){l=!0,o=e}finally{try{if(!i&&null!=n.return&&(u=n.return(),Object(u)!==u))return}finally{if(l)throw o}}return a}}(t,r)||function(e,t){if(e){if("string"==typeof e)return f(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?f(e,t):void 0}}(t,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),u=o[0],a=o[1];_=a._id,b.textContent=a.name,q.textContent=a.about,g.style="background-image: url('".concat(a.avatar,"')"),u.forEach((function(e){placesList.append(n(e,_,removeCard,c,J))}))}));var y=document.querySelector(".profile__edit-button"),v=document.querySelector(".popup_type_edit"),h=document.querySelector(".popup__input_type_name"),S=document.querySelector(".popup__input_type_description"),b=document.querySelector(".profile__title"),q=document.querySelector(".profile__description"),k=C.querySelector(".popup__button");y.addEventListener("click",(function(){u(v),h.value=b.textContent,S.value=q.textContent,s(C,m)})),v.querySelector(".popup__close").addEventListener("click",(function(){a(v)}));var C=v.querySelector(".popup__form");C.addEventListener("submit",(function(n){n.preventDefault(),k.textContent="Сохранение...",function(n,r){return fetch("".concat(e.baseUrl,"/users/me"),{method:"PATCH",headers:e.headers,body:JSON.stringify({name:n,about:r})}).then((function(e){return t(e)}))}(editNameInput.value,editDescriptionInput.value).then((function(){b.textContent=editNameInput.value,q.textContent=editDescriptionInput.value,a(v)})).catch((function(e){console.log(e)})).finally((function(){k.textContent="Сохранение"}))}));var E=document.querySelector(".popup_type_avatar"),g=document.querySelector(".profile__image"),L=document.forms["new-avatar"],x=L.elements.link,A=E.querySelector(".popup__close"),T=L.querySelector(".popup__button");g.addEventListener("click",(function(){L.reset(),u(E),s(L,m)})),A.addEventListener("click",(function(){a(E)})),L.addEventListener("submit",(function(n){n.preventDefault(),T.textContent="Сохранить...",function(n){return fetch("".concat(e.baseUrl,"/users/me/avatar"),{method:"PATCH",headers:e.headers,body:JSON.stringify({avatar:n})}).then((function(e){return t(e)}))}(x.value).then((function(){g.style="background-image: url('".concat(x.value,"')"),a(E)})).catch((function(e){console.log(e)})).finally((function(){T.textContent="Сохранение"}))}));var U=document.querySelector(".popup_type_new-card"),w=document.querySelector(".profile__add-button"),j=document.querySelector(".popup__input_type_card-name"),D=document.querySelector(".popup__input_type_url"),O=I.querySelector(".popup__button");w.addEventListener("click",(function(){I.reset(),u(U),s(I,m)})),U.querySelector(".popup__close").addEventListener("click",(function(){a(U)}));var I=U.querySelector(".popup__form");I.addEventListener("submit",(function(o){var u,i;o.preventDefault(),O.textContent="Сохранение...",(u=j.value,i=D.value,fetch("".concat(e.baseUrl,"/cards"),{method:"POST",headers:e.headers,body:JSON.stringify({name:u,link:i})}).then((function(e){return t(e)}))).then((function(e){placesList.prepend(n(e,_,r,c,J)),I.reset(),a(U)})).catch((function(e){console.log(e)})).finally((function(){O.textContent="Сохранить"}))}));var B=document.querySelector(".popup_type_image"),N=B.querySelector(".popup__close"),P=B.querySelector(".popup__image"),M=B.querySelector(".popup__caption");function J(e){M.textContent=e.name,P.alt=e.name,P.src=e.link,u(B)}N.addEventListener("click",(function(){a(B)}))})();