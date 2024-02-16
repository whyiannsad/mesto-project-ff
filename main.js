(()=>{"use strict";var e={baseUrl:"https://mesto.nomoreparties.co/v1/wff-cohort-6",headers:{authorization:"492845ed-8f40-461f-9a82-c4a862dbaea5","Content-Type":"application/json"}};function t(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}function n(e,t,n,c,a){var i=document.querySelector("#card-template").content.querySelector(".card").cloneNode(!0);i.querySelector(".card__title").textContent=e.name,u.alt=e.name,u.src=e.link;var u=i.querySelector(".card__image"),l=i.querySelector(".card__delete-button");l.addEventListener("click",(function(t){return r(t,e)})),e.owner._id!==a&&l.remove();var s=i.querySelector(".card__like-button"),d=i.querySelector(".card__like-count");return s.addEventListener("click",(function(t){return n(t,e,a)})),e.likes.length>0?d.textContent=e.likes.length:d.textContent="0",o(e,a)?s.classList.add("card__like-button_is-active"):s.classList.remove("card__like-button_is-active"),u.addEventListener("click",(function(){c(e)})),i}function r(n,r){var o,c=n.target.closest(".card");(o=r._id,fetch("".concat(e.baseUrl,"/cards/").concat(o),{method:"DELETE",headers:e.headers}).then((function(e){return t(e)}))).then((function(){c.remove()})).catch((function(e){console.log(e)}))}function o(e,t){return e.likes.some((function(e){return e._id===t}))}function c(n,r,c){var a,i=n.target,u=i.closest(".card__like").querySelector(".card__like-count");o(r,c)?(a=r._id,fetch("".concat(e.baseUrl,"/cards/likes/").concat(a),{method:"DELETE",headers:e.headers}).then((function(e){return t(e)}))).then((function(e){r.likes=e.likes,i.classList.remove("card__like-button_is-active"),u.textContent=e.likes.length})).catch((function(e){console.log(e)})):function(n){return fetch("".concat(e.baseUrl,"/cards/likes/").concat(n),{method:"PUT",headers:e.headers}).then((function(e){return t(e)}))}(r._id).then((function(e){r.likes=e.likes,i.classList.add("card__like-button_is-active"),u.textContent=e.likes.length})).catch((function(e){console.log(e)}))}function a(e){e.classList.add("popup_is-opened"),e.addEventListener("click",l),document.addEventListener("keydown",u)}function i(e){e.classList.remove("popup_is-opened"),e.addEventListener("click",l),document.addEventListener("keydown",u)}function u(e){"Escape"===e.key&&i(document.querySelector(".popup_is-opened"))}function l(e){e.target===e.currentTarget&&i(e.currentTarget)}function s(e,t){var n=Array.from(e.querySelectorAll(t.inputSelector)),r=e.querySelector(t.submitButtonSelector);n.forEach((function(n){d(e,n,t)})),f(n,r,t)}function d(e,t,n){var r=e.querySelector(".".concat(t.id,"-error"));t.classList.remove(n.inputErrorClass),r.classList.remove(n.errorClass),r.textContent=""}var f=function(e,t,n){!function(e){return e.some((function(e){return!e.validity.valid}))}(e)?(t.classList.remove(n.inactiveButtonClass),t.disabled=!1):(t.classList.add(n.inactiveButtonClass),t.disabled=!0)};function p(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}document.querySelector(".content");var m=document.querySelector(".places__list"),_={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__button",inactiveButtonClass:"popup__button_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__error_visible"},v=document.querySelector(".profile__edit-button"),y=document.querySelector(".popup_type_edit"),h=y.querySelector(".popup__close"),S=document.forms["edit-profile"],b=S.elements.name,k=S.elements.description,q=document.querySelector(".profile__title"),E=document.querySelector(".profile__description"),g=v.querySelector(".popup__button");v.addEventListener("click",(function(){a(y),b.value=q.textContent,k.value=E.textContent,s(S,_)})),h.addEventListener("click",(function(){i(y)})),S.addEventListener("submit",(function(n){n.preventDefault(),g.textContent="Сохранение...",function(n,r){return fetch("".concat(e.baseUrl,"/users/me"),{method:"PATCH",headers:e.headers,body:JSON.stringify({name:n,about:r})}).then((function(e){return t(e)}))}(b.value,k.value).then((function(){q.textContent=b.value,E.textContent=k.value,i(y)})).catch((function(e){console.log(e)})).finally((function(){g.textContent="Сохранение"}))}));var C=document.querySelector(".popup_type_avatar"),L=document.querySelector(".profile__image"),x=document.forms["new-avatar"],A=x.elements.link,T=C.querySelector(".popup__close"),w=x.querySelector(".popup__button");L.addEventListener("click",(function(){x.reset(),a(C),s(x,_)})),T.addEventListener("click",(function(){i(C)})),x.addEventListener("submit",(function(n){n.preventDefault(),w.textContent="Сохранить...",function(n){return fetch("".concat(e.baseUrl,"/users/me/avatar"),{method:"PATCH",headers:e.headers,body:JSON.stringify({avatar:n})}).then((function(e){return t(e)}))}(A.value).then((function(){L.style="background-image: url('".concat(A.value,"')"),i(C)})).catch((function(e){console.log(e)})).finally((function(){w.textContent="Сохранение"}))}));var U=document.querySelector(".popup_type_new-card"),j=document.querySelector(".profile__add-button"),O=document.forms["new-place"],B=O.elements["place-name"],D=O.elements.link,P=U.querySelector(".popup__button"),M=U.querySelector(".popup__close");j.addEventListener("click",(function(){O.reset(),a(U),s(O,_)})),M.addEventListener("click",(function(){i(U)})),O.addEventListener("submit",(function(o){var a,u;o.preventDefault(),P.textContent="Сохранение...",(a=B.value,u=D.value,fetch("".concat(e.baseUrl,"/cards"),{method:"POST",headers:e.headers,body:JSON.stringify({name:a,link:u})}).then((function(e){return t(e)}))).then((function(e){m.prepend(n(e,0,r,c,H)),O.reset(),i(U)})).catch((function(e){console.log(e)})).finally((function(){P.textContent="Сохранить"}))}));var N=document.querySelector(".popup_type_image"),I=N.querySelector(".popup__close"),J=N.querySelector(".popup__image"),G=N.querySelector(".popup__caption");function H(e){G.textContent=e.name,J.alt=e.name,J.src=e.link,a(N)}I.addEventListener("click",(function(){i(N)})),function(e){Array.from(document.querySelectorAll(e.formSelector)).forEach((function(t){t.addEventListener("submit",(function(e){e.preventDefault()})),function(e,t){var n=Array.from(e.querySelectorAll(t.inputSelector)),r=e.querySelector(t.submitButtonSelector);f(n,r,t),n.forEach((function(o){o.addEventListener("input",(function(){(function(e,t,n){t.validity.patternMismatch?t.setCustomValidity(t.dataset.errorMessage):t.setCustomValidity(""),t.validity.valid?d(e,t,n):function(e,t,n,r){var o=e.querySelector(".".concat(t.id,"-error"));t.classList.add(r.inputErrorClass),o.textContent=n,o.classList.add(r.errorClass)}(e,t,t.validationMessage,n)})(e,o,t),f(n,r,t)}))}))}(t,e)}))}(_),Promise.all([fetch("".concat(e.baseUrl,"/cards"),{method:"GET",headers:e.headers}).then((function(e){return t(e)})),fetch("".concat(e.baseUrl,"/users/me"),{method:"GET",headers:e.headers}).then((function(e){return t(e)}))]).then((function(e){var t,o,a=(o=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,c,a,i=[],u=!0,l=!1;try{if(c=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;u=!1}else for(;!(u=(r=c.call(n)).done)&&(i.push(r.value),i.length!==t);u=!0);}catch(e){l=!0,o=e}finally{try{if(!u&&null!=n.return&&(a=n.return(),Object(a)!==a))return}finally{if(l)throw o}}return i}}(t,o)||function(e,t){if(e){if("string"==typeof e)return p(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?p(e,t):void 0}}(t,o)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),i=a[0],u=a[1];u._id,q.textContent=u.name,E.textContent=u.about,L.style="background-image: url('".concat(u.avatar,"')"),i.forEach((function(e){m.append(n(e,0,r,c,H))}))})).catch((function(e){console.log(e)}))})();