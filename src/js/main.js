"use strict";

// service worker registration - remove if you're not going to use it

if ('serviceWorker' in navigator) {
  window.addEventListener('load', function () {
    navigator.serviceWorker.register('serviceworker.js').then(function (registration) {
      // Registration was successful
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }, function (err) {
      // registration failed :(
      console.log('ServiceWorker registration failed: ', err);
    });
  });
}

// place your code below

const buttonLoad = document.querySelector(".form__button--load-js");

const buttonSave = document.querySelector(".form__button--save-js");

const buttonRemove = document.querySelector(".form__button--delete-js");

const textarea = document.querySelector(".form__textarea--js");
textarea.value = "";

buttonSave.addEventListener('click', () => {
  localStorage.setItem('textwritten', textarea.value);
});

buttonLoad.addEventListener('click', () => {
  textarea.value = localStorage.getItem('textwritten');
});

buttonRemove.addEventListener('click', () => {
  localStorage.clear();
  textarea.value = "";
});


